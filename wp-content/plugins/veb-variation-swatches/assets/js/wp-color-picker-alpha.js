(function ($, undef) {

    var wpColorPickerAlpha = {
        'version': 300
    };

    if ('wpColorPickerAlpha' in window && 'version' in window.wpColorPickerAlpha) {
        var version = parseInt(window.wpColorPickerAlpha.version, 10);
        if (!isNaN(version) && version >= wpColorPickerAlpha.version) {
            return;
        }
    }

    if (Color.fn.hasOwnProperty('to_s')) {
        return;
    }

    Color.fn.to_s = function (type) {
        type = type || 'hex';
        if ('hex' === type && this._alpha < 1) {
            type = 'rgba';
        }

        var color = '';
        if ('hex' === type) {
            color = this.toString();
        } else if (!this.error) {
            color = this.toCSS(type).replace(/\(\s+/, '(').replace(/\s+\)/, ')');
        }
        return color;
    };

    window.wpColorPickerAlpha = wpColorPickerAlpha;

    var backgroundImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==';

    $.widget('a8c.iris', $.a8c.iris, {

        alphaOptions: {
            alphaEnabled: false
        },

        _getColor: function _getColor(color) {
            if (color === undef) {
                color = this._color;
            }

            if (this.alphaOptions.alphaEnabled) {
                color = color.to_s(this.alphaOptions.alphaColorType);
                if (!this.alphaOptions.alphaColorWithSpace) {
                    color = color.replace(/\s+/g, '');
                }
                return color;
            }
            return color.toString();
        },

        _create: function _create() {
            try {
                
                this.alphaOptions = this.element.wpColorPicker('instance').alphaOptions;
            } catch (e) {}

            $.extend({}, this.alphaOptions, {
                alphaEnabled: false,
                alphaCustomWidth: 130,
                alphaReset: false,
                alphaColorType: 'hex',
                alphaColorWithSpace: false
            });

            this._super();
        },

        _addInputListeners: function _addInputListeners(input) {
            var self = this,
                debounceTimeout = 100,
                callback = function callback(event) {
                var val = input.val(),
                    color = new Color(val),
                    val = val.replace(/^(#|(rgb|hsl)a?)/, ''),
                    type = self.alphaOptions.alphaColorType;

                input.removeClass('iris-error');

                if (!color.error) {
                   
                    if ('hex' !== type || !(event.type === 'keyup' && val.match(/^[0-9a-fA-F]{3}$/))) {
                   
                        if (color.toIEOctoHex() !== self._color.toIEOctoHex()) {
                            self._setOption('color', self._getColor(color));
                        }
                    }
                } else if (val !== '') {
                    input.addClass('iris-error');
                }
            };

            input.on('change', callback).on('keyup', self._debounce(callback, debounceTimeout));

            if (self.options.hide) {
                input.one('focus', function () {
                    self.show();
                });
            }
        },

        _initControls: function _initControls() {
            this._super();

            if (this.alphaOptions.alphaEnabled) {
     
                var self = this,
                    stripAlpha = self.controls.strip.clone(false, false),
                    stripAlphaSlider = stripAlpha.find('.iris-slider-offset'),
                    controls = {
                    stripAlpha: stripAlpha,
                    stripAlphaSlider: stripAlphaSlider
                };

                stripAlpha.addClass('iris-strip-alpha');
                stripAlphaSlider.addClass('iris-slider-offset-alpha');
                stripAlpha.appendTo(self.picker.find('.iris-picker-inner'));

                $.each(controls, function (k, v) {
                    self.controls[k] = v;
                });

                self.controls.stripAlphaSlider.slider({
                    orientation: 'vertical',
                    min: 0,
                    max: 100,
                    step: 1,
                    value: parseInt(self._color._alpha * 100),
                    slide: function slide(event, ui) {
                        self.active = 'strip';
                  
                        self._color._alpha = parseFloat(ui.value / 100);
                        self._change.apply(self, arguments);
                    }
                });
            }
        },

        _dimensions: function _dimensions(reset) {
            this._super(reset);

            if (this.alphaOptions.alphaEnabled) {
                var self = this,
                    opts = self.options,
                    controls = self.controls,
                    square = controls.square,
                    strip = self.picker.find('.iris-strip'),
                    innerWidth,
                    squareWidth,
                    stripWidth,
                    stripMargin,
                    totalWidth;

                innerWidth = Math.round(self.picker.outerWidth(true) - (opts.border ? 22 : 0));
                squareWidth = Math.round(square.outerWidth());
                stripWidth = Math.round((innerWidth - squareWidth) / 2);
                stripMargin = Math.round(stripWidth / 2);
                totalWidth = Math.round(squareWidth + stripWidth * 2 + stripMargin * 2);
                while (totalWidth > innerWidth) {
                    stripWidth = Math.round(stripWidth - 2);
                    stripMargin = Math.round(stripMargin - 1);
                    totalWidth = Math.round(squareWidth + stripWidth * 2 + stripMargin * 2);
                }

                square.css('margin', '0');
                strip.width(stripWidth).css('margin-left', stripMargin + 'px');
            }
        },

        _change: function _change() {
            var self = this,
                active = self.active;

            self._super();

            if (self.alphaOptions.alphaEnabled) {
                var controls = self.controls,
                    alpha = parseInt(self._color._alpha * 100),
                    color = self._color.toRgb(),
                    gradient = ['rgb(' + color.r + ',' + color.g + ',' + color.b + ') 0%', 'rgba(' + color.r + ',' + color.g + ',' + color.b + ', 0) 100%'],
                    target = self.picker.closest('.wp-picker-container').find('.wp-color-result');

                self.options.color = self._getColor();
                controls.stripAlpha.css({ 'background': 'linear-gradient(to bottom, ' + gradient.join(', ') + '), url(' + backgroundImage + ')' });
                if (active) {
                    controls.stripAlphaSlider.slider('value', alpha);
                }

                if (!self._color.error) {
                    self.element.removeClass('iris-error').val(self.options.color);
                }

                self.picker.find('.iris-palette-container').on('click.palette', '.iris-palette', function () {
                    var color = $(this).data('color');
                    if (self.alphaOptions.alphaReset) {
                        self._color._alpha = 1;
                        color = self._getColor();
                    }
                    self._setOption('color', color);
                });
            }
        },

        _paintDimension: function _paintDimension(origin, control) {
            var self = this,
                color = false;

            if (self.alphaOptions.alphaEnabled && 'strip' === control) {
                color = self._color;
                self._color = new Color(color.toString());
                self.hue = self._color.h();
            }

            self._super(origin, control);

            if (color) {
                self._color = color;
            }
        },

        _setOption: function _setOption(key, value) {
            var self = this;
            if ('color' === key && self.alphaOptions.alphaEnabled) {
                value = '' + value;
                newColor = new Color(value).setHSpace(self.options.mode);
                if (!newColor.error && self._getColor(newColor) !== self._getColor()) {
                    self._color = newColor;
                    self.options.color = self._getColor();
                    self.active = 'external';
                    self._change();
                }
            } else {
                return self._super(key, value);
            }
        },

        color: function color(newColor) {
            if (newColor === true) {
                return this._color.clone();
            }
            if (newColor === undef) {
                return this._getColor();
            }
            this.option('color', newColor);
        }
    });


    $.widget('wp.wpColorPicker', $.wp.wpColorPicker, {
        alphaOptions: {
            alphaEnabled: false
        },

        _getAlphaOptions: function _getAlphaOptions() {
            var el = this.element,
                type = el.data('type') || this.options.type,
                color = el.data('defaultColor') || el.val(),
                options = {
                alphaEnabled: el.data('alphaEnabled') || false,
                alphaCustomWidth: 130,
                alphaReset: false,
                alphaColorType: 'rgb',
                alphaColorWithSpace: false
            };

            if (options.alphaEnabled) {
                options.alphaEnabled = el.is('input') && 'full' === type;
            }

            if (!options.alphaEnabled) {
                return options;
            }

            options.alphaColorWithSpace = color && color.match(/\s/);

            $.each(options, function (name, defaultValue) {
                var value = el.data(name) || defaultValue;
                switch (name) {
                    case 'alphaCustomWidth':
                        value = value ? parseInt(value, 10) : 0;
                        value = isNaN(value) ? defaultValue : value;
                        break;
                    case 'alphaColorType':
                        if (!value.match(/^(hex|(rgb|hsl)a?)$/)) {
                            if (color && color.match(/^#/)) {
                                value = 'hex';
                            } else if (color && color.match(/^hsla?/)) {
                                value = 'hsl';
                            } else {
                                value = defaultValue;
                            }
                        }
                        break;
                    default:
                        value = !!value;
                        break;
                }
                options[name] = value;
            });

            return options;
        },

        _create: function _create() {
        
            if (!$.support.iris) {
                return;
            }
            this.alphaOptions = this._getAlphaOptions();
            this._super();
        },

        _addListeners: function _addListeners() {
            if (!this.alphaOptions.alphaEnabled) {
                return this._super();
            }

            var self = this,
                el = self.element,
                isDeprecated = self.toggler.is('a');

            this.alphaOptions.defaultWidth = el.width();
            if (this.alphaOptions.alphaCustomWidth) {
                el.width(parseInt(this.alphaOptions.defaultWidth + this.alphaOptions.alphaCustomWidth, 10));
            }

            self.toggler.css({
                'position': 'relative',
                'background-image': 'url(' + backgroundImage + ')'
            });

            if (isDeprecated) {
                self.toggler.html('<span class="color-alpha" />');
            } else {
                self.toggler.append('<span class="color-alpha" />');
            }

            self.colorAlpha = self.toggler.find('span.color-alpha').css({
                'width': '30px',
                'height': '100%',
                'position': 'absolute',
                'top': 0,
                'background-color': el.val()
            });

            if ('ltr' === self.colorAlpha.css('direction')) {
                self.colorAlpha.css({
                    'border-bottom-left-radius': '2px',
                    'border-top-left-radius': '2px',
                    'left': 0
                });
            } else {
                self.colorAlpha.css({
                    'border-bottom-right-radius': '2px',
                    'border-top-right-radius': '2px',
                    'right': 0
                });
            }

            el.iris({
                change: function change(event, ui) {
                    self.colorAlpha.css({ 'background-color': ui.color.to_s(self.alphaOptions.alphaColorType) });

                    if ($.isFunction(self.options.change)) {
                        self.options.change.call(this, event, ui);
                    }
                }
            });

            self.wrap.on('click.wpcolorpicker', function (event) {
                event.stopPropagation();
            });

            self.toggler.click(function () {
                if (self.toggler.hasClass('wp-picker-open')) {
                    self.close();
                } else {
                    self.open();
                }
            });

            el.change(function (event) {
                var val = $(this).val();

                if (el.hasClass('iris-error') || val === '' || val.match(/^(#|(rgb|hsl)a?)$/)) {
                    if (isDeprecated) {
                        self.toggler.removeAttr('style');
                    }

                    self.colorAlpha.css('background-color', '');

                    if ($.isFunction(self.options.clear)) {
                        self.options.clear.call(this, event);
                    }
                }
            });

            self.button.click(function (event) {
                if ($(this).hasClass('wp-picker-default')) {
                    el.val(self.options.defaultColor).change();
                } else if ($(this).hasClass('wp-picker-clear')) {
                    el.val('');
                    if (isDeprecated) {
                        self.toggler.removeAttr('style');
                    }

                    self.colorAlpha.css('background-color', '');

                    if ($.isFunction(self.options.clear)) {
                        self.options.clear.call(this, event);
                    }

                    el.trigger('change');
                }
            });
        }
    });
})(jQuery);