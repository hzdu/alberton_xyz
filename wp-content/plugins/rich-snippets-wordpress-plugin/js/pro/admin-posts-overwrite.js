var rich_snippets_posts_forms;

(
		function () {
			'use strict';

			rich_snippets_posts_forms = function () {
				this.$modal         = null;
				this.$modal_menu    = null;
				this.$modal_content = null;
				this.$form          = null;
				this.$save_button   = null;

				this.init = function () {
					var self = this;

					self.$modal         = jQuery( '.wpb-rs-form-modal' );
					self.$modal_menu    = self.$modal.find( '.media-menu' );
					self.$modal_content = self.$modal.find( '.wpb-rs-form-outer' );
					self.$form          = self.$modal.find( 'form' );
					self.$save_button   = self.$modal.find( '.wpb-rs-modalwindow-save' );

					jQuery( document ).on( 'click', '.wpb-rs-overwrite-snippet', function ( e ) {
						e.preventDefault();
						self.modal_open();
					} );

					self.$modal.on( 'click', '.media-modal-close', function () {
						self.modal_close();
					} );

					self.$modal.on( 'click', '.wpb-rs-modalwindow-reload', function ( e ) {
						e.preventDefault();
						self.load_global_snippets_menu();
					} );

					jQuery( self.$modal ).on( 'click', '.wpb-rs-modalwindow-menu-item', function ( e ) {
						e.preventDefault();
						var post_id = parseInt( jQuery( this ).attr( 'data-post_id' ) );
						self.render_snippet( post_id );
					} );

					jQuery( self.$modal ).on( 'click', '.wpb-rs-modalwindow-save', function ( e ) {
						e.preventDefault();
						self.save_current_snippet();
					} );

					jQuery( self.$modal ).on( 'click', '.wpb-rs-duplicate-property', function () {
						self.duplicate_property( jQuery( this ).closest( 'tr' ) );
					} );

					jQuery( self.$modal ).on( 'click', '.wpb-rs-delete-property', function () {
						self.delete_property( jQuery( this ).closest( 'tr' ) );
					} );

				};

				this.rename_all_props = function ( $table, prop_name ) {
					var i = 0;
					$table.find( '> tbody > tr' ).each( function () {
						var $row  = jQuery( this );
						var pname = $row.attr( 'data-prop_name' );

						if ( pname.indexOf( prop_name ) === -1 ) {
							return;
						}

						var old_number    = pname.match( new RegExp( prop_name + '([0-9]+)' ) )[ 1 ];
						var old_prop_name = prop_name + old_number;
						var new_prop_name = prop_name + i;

						$row.attr( 'data-prop_name', pname.replace( old_prop_name, new_prop_name ) );

						$row.find( ':input' ).each( function () {
							jQuery( this ).attr( 'name', jQuery( this ).attr( 'name' ).replace( old_prop_name, new_prop_name ) );
						} );

						i++;
					} );
				};

				this.prop_name_without_no = function ( prop_name ) {
					var no = parseInt( prop_name.substr( prop_name.lastIndexOf( '_' ) + 1 ).match( /[a-zA-Z]+(-[a-zA-Z0-9]+-)?([0-9]+)/ )[ 2 ] );
					return prop_name.substr( 0, prop_name.length - no.toString().length );
				};

				this.prop_number = function ( prop_name ) {
					return parseInt( prop_name.substr( prop_name.lastIndexOf( '_' ) + 1 ).match( /[a-zA-Z]+(-[a-zA-Z0-9]+-)?([0-9]+)/ )[ 2 ] );
				};

				this.duplicate_property = function ( $row ) {

					var $duplicate    = $row.clone( true );
					var prop_name     = $row.attr( 'data-prop_name' );
					var no            = this.prop_number( prop_name );
					var new_prop_name = this.prop_name_without_no( prop_name ) + (no + 1);

					$duplicate.attr( 'data-prop_name', new_prop_name );

					$duplicate.find( ':input' ).each( function () {
						jQuery( this ).attr(
								'name',
								jQuery( this ).attr( 'name' ).replace( prop_name, new_prop_name )
						);
					} );

					$duplicate.find( '.wpb-rs-schema-property-row' ).each( function () {
						jQuery( this ).attr(
								'data-prop_name',
								jQuery( this ).attr( 'data-prop_name' ).replace( prop_name, new_prop_name )
						);
					} );

					$row.after( $duplicate );
					this.rename_all_props( $row.closest( 'table.wpb-rs-property-list' ), this.prop_name_without_no( new_prop_name ) );
				};

				this.delete_property = function ( $row ) {
					var prop_name = $row.attr( 'data-prop_name' );

					var $table = $row.closest( 'table.wpb-rs-property-list' );

					$row.remove();

					this.rename_all_props( $table, this.prop_name_without_no( prop_name ) );
				};

				this.modal_open = function () {
					this.$modal.show();
					this.load_global_snippets_menu();
				};

				this.modal_close = function () {
					this.$modal.hide();
				};

				this.on_ajax_before_send = function () {
					this.$modal.find( '.wpb-rs-modalwindow-loader' ).removeClass( 'wpb-rs-modalwindow-loader-hidden' );
				};

				this.on_ajax_complete = function () {
					this.$modal.find( '.wpb-rs-modalwindow-loader' ).addClass( 'wpb-rs-modalwindow-loader-hidden' );
				};

				this.add_menu_item = function ( item ) {
					var $item = jQuery( '<a data-post_id="' + item.post_id + '" href="#" class="media-menu-item wpb-rs-modalwindow-menu-item">' + item.label + '</a>' );

					$item.insertBefore( this.$modal_menu.find( '.separator' ).last() );
				};

				this.remove_all_menu_items = function () {
					this.$modal_menu.find( 'a' ).not( '.wpb-rs-modal-new' ).remove();
				};

				this.render_snippet = function ( snippet_post_id ) {
					var self = this;
					jQuery.ajax( {
						'url'       : WPB_RS_POSTS_FORMS.rest_url + '/wpbuddy/rich_snippets/v1/overwrite_form/',
						'dataType'  : 'json',
						'beforeSend': function ( xhr ) {
							xhr.setRequestHeader( 'X-WP-Nonce', WPB_RS_POSTS_FORMS.nonce );
							self.on_ajax_before_send();
						},
						'data'      : {
							'snippet_post_id': snippet_post_id,
							'post_id'        : WPB_RS_POSTS_FORMS.post_id
						},
						'method'    : 'GET'
					} ).done( function ( data ) {
						self.$modal_content.html( data.form );
						rs_fields.init( self.$modal );
					} ).fail( function ( xhr, text_status, error ) {
						rich_snippets_errors.ajax_error_handler( xhr, text_status, error );
					} ).always( function () {
						self.on_ajax_complete();
					} );
				};

				this.load_global_snippets_menu = function () {
					var self = this;
					jQuery.ajax( {
						'url'       : WPB_RS_POSTS_FORMS.rest_url + '/wp/v2/wpb-rs-global/?per_page=100',
						'dataType'  : 'json',
						'beforeSend': function ( xhr ) {
							self.on_ajax_before_send();
							xhr.setRequestHeader( 'X-WP-Nonce', WPB_RS_POSTS_FORMS.nonce );
						},
						'data'      : {},
						'method'    : 'GET'
					} ).done( function ( posts ) {
						self.remove_all_menu_items();
						posts.forEach( function ( post ) {
							self.add_menu_item( {
								'label'  : post.title.rendered,
								'post_id': post.id
							} );
						} );
					} ).fail( function ( xhr, text_status, error ) {
						rich_snippets_errors.ajax_error_handler( xhr, text_status, error );
					} ).always( function () {
						self.on_ajax_complete();
					} );
				};

				this.save_current_snippet = function () {
					var self      = this;
					var form_data = this.$form.serializeArray();
					form_data.push( {
						'name' : 'post_id',
						'value': WPB_RS_POSTS_FORMS.post_id
					} );

					jQuery.ajax( {
						'url'       : WPB_RS_POSTS_FORMS.rest_url + '/wpbuddy/rich_snippets/v1/overwrite/',
						'dataType'  : 'json',
						'beforeSend': function ( xhr ) {
							xhr.setRequestHeader( 'X-WP-Nonce', WPB_RS_POSTS_FORMS.nonce );
							self.$save_button.addClass( 'install-now updating-message' );
						},
						'data'      : form_data,
						'method'    : 'POST'
					} ).done( function () {
						self.$save_button.text( WPB_RS_POSTS_FORMS.i18n.saved );
						setTimeout( function () {
							self.$save_button.text( WPB_RS_POSTS_FORMS.i18n.save );
						}, 3000 );
					} ).fail( function ( xhr, text_status, error ) {
						rich_snippets_errors.ajax_error_handler( xhr, text_status, error );
					} ).always( function () {
						self.$save_button.removeClass( 'install-now updating-message' );
					} );

				};

			};

			jQuery( document ).ready( function () {
				new rich_snippets_posts_forms().init();
			} );

		}
)();



