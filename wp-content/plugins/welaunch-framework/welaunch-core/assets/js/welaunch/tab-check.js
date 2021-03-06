/* global welaunch */

(function( $ ) {
	'use strict';

	$.welaunch = $.welaunch || {};

	$.welaunch.tabCheck = function() {
		var link;
		var tab;
		var sTab;
		var cookieName;
		var opt_name;

		$( '.welaunch-group-tab-link-a' ).click(
			function() {
				var elements;
				var index;
				var el;
				var relid;
				var oldid;
				var cookieName;
				var boxIndex;
				var parentID;
				var newParent;

				link = $( this );

				if ( link.parent().hasClass( 'empty_section' ) && link.parent().hasClass( 'hasSubSections' ) ) {
					elements = $( this ).closest( 'ul' ).find( '.welaunch-group-tab-link-a' );
					index    = elements.index( this );

					link = elements.slice( index + 1, index + 2 );
				}

				el    = link.parents( '.welaunch-container:first' );
				relid = link.data( 'rel' ); // The group ID of interest.
				oldid = el.find( '.welaunch-group-tab-link-li.active:first .welaunch-group-tab-link-a' ).data( 'rel' );
				opt_name = $.welaunch.getOptName( el );

				if ( oldid === relid ) {
					return;
				}

				cookieName = '';

				if ( ! link.parents( '.postbox-container:first' ).length ) {
					$( '#currentSection' ).val( relid );

					cookieName = 'welaunch_current_tab_' + welaunch.optName.args.opt_name;
				} else {
					el.prev( '#currentSection' ).val( relid );

					boxIndex = el.data( 'index' );

					if ( '' !== boxIndex ) {
						cookieName = 'welaunch_metabox_' + boxIndex + '_current_tab_' + welaunch.optName.args.opt_name;
					}
				}

				// Set the proper page cookie.
				$.cookie(
					cookieName,
					relid,
					{
						expires: 7,
						path: '/'
					}
				);

				if ( el.find( '#' + relid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).length ) {
					parentID = el.find( '#' + relid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).attr( 'id' ).split( '_' );
					parentID = parentID[0];
				}

				el.find( '#toplevel_page_' + welaunch.optName.args.slug + ' .wp-submenu a.current' ).removeClass( 'current' );
				el.find( '#toplevel_page_' + welaunch.optName.args.slug + ' .wp-submenu li.current' ).removeClass( 'current' );

				el.find( '#toplevel_page_' + welaunch.optName.args.slug + ' .wp-submenu a' ).each(
					function() {
						var url = $( this ).attr( 'href' ).split( '&tab=' );

						if ( url[1] === relid || url[1] === parentID ) {
							$( this ).addClass( 'current' );
							$( this ).parent().addClass( 'current' );
						}
					}
				);

				if ( el.find( '#' + oldid + '_section_group_li' ).find( '#' + oldid + '_section_group_li' ).length ) {
					el.find( '#' + oldid + '_section_group_li' ).addClass( 'activeChild' );
					el.find( '#' + relid + '_section_group_li' ).addClass( 'active' ).removeClass( 'activeChild' );
				} else if ( el.find( '#' + relid + '_section_group_li' ).parents( '#' + oldid + '_section_group_li' ).length || el.find( '#' + oldid + '_section_group_li' ).parents( 'ul.subsection' ).find( '#' + relid + '_section_group_li' ).length ) {
					if ( el.find( '#' + relid + '_section_group_li' ).parents( '#' + oldid + '_section_group_li' ).length ) {
						el.find( '#' + oldid + '_section_group_li' ).addClass( 'activeChild' ).removeClass( 'active' );
					} else {
						el.find( '#' + relid + '_section_group_li' ).addClass( 'active' );
						el.find( '#' + oldid + '_section_group_li' ).removeClass( 'active' );
					}
					el.find( '#' + relid + '_section_group_li' ).removeClass( 'activeChild' ).addClass( 'active' );
				} else {
					setTimeout(
						function() {
							el.find( '#' + relid + '_section_group_li' ).addClass( 'active' ).removeClass( 'activeChild' ).find( 'ul.subsection' ).slideDown();
						},
						1
					);

					if ( el.find( '#' + oldid + '_section_group_li' ).find( 'ul.subsection' ).length ) {
						el.find( '#' + oldid + '_section_group_li' ).find( 'ul.subsection' ).slideUp(
							'fast',
							function() {
								el.find( '#' + oldid + '_section_group_li' ).removeClass( 'active' ).removeClass( 'activeChild' );
							}
						);

						newParent = el.find( '#' + relid + '_section_group_li' ).parents( '.hasSubSections:first' );

						if ( newParent.length > 0 ) {
							el.find( '#' + relid + '_section_group_li' ).removeClass( 'active' );
							relid = newParent.find( '.welaunch-group-tab-link-a:first' ).data( 'rel' );

							if ( newParent.hasClass( 'empty_section' ) ) {
								newParent.find( '.subsection li:first' ).addClass( 'active' );
								el.find( '#' + relid + '_section_group_li' ).removeClass( 'active' ).addClass( 'activeChild' ).find( 'ul.subsection' ).slideDown();
								newParent = newParent.find( '.subsection li:first' );
								relid     = newParent.find( '.welaunch-group-tab-link-a:first' ).data( 'rel' );
							} else {
								el.find( '#' + relid + '_section_group_li' ).addClass( 'active' ).removeClass( 'activeChild' ).find( 'ul.subsection' ).slideDown();
							}
						}
					} else if ( el.find( '#' + oldid + '_section_group_li' ).parents( 'ul.subsection' ).length ) {
						if ( ! el.find( '#' + oldid + '_section_group_li' ).parents( '#' + relid + '_section_group_li' ).length ) {
							el.find( '#' + oldid + '_section_group_li' ).parents( 'ul.subsection' ).slideUp(
								'fast',
								function() {
									el.find( '#' + oldid + '_section_group_li' ).removeClass( 'active' );
									el.find( '#' + oldid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).removeClass( 'active' ).removeClass( 'activeChild' );
									el.find( '#' + relid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).addClass( 'activeChild' ).find( 'ul.subsection' ).slideDown();
									el.find( '#' + relid + '_section_group_li' ).addClass( 'active' );
								}
							);
						} else {
							el.find( '#' + oldid + '_section_group_li' ).removeClass( 'active' );
						}
					} else {
						el.find( '#' + oldid + '_section_group_li' ).removeClass( 'active' );

						if ( el.find( '#' + relid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).length ) {
							setTimeout(
								function() {
									el.find( '#' + relid + '_section_group_li' ).parents( '.welaunch-group-tab-link-li' ).addClass( 'activeChild' ).find( 'ul.subsection' ).slideDown();
								},
								50
							);

							el.find( '#' + relid + '_section_group_li' ).addClass( 'active' );
						}
					}
				}

				// Show the group.
				el.find( '#' + oldid + '_section_group' ).hide();

				el.find( '#' + relid + '_section_group' ).fadeIn(
					200,
					function() {
						if ( 0 !== el.find( '#welaunch-footer' ).length ) {
							$.welaunch.stickyInfo(); // Race condition fix.
						}

						$.welaunch.initFields();
					}
				);

				$( '#toplevel_page_' + welaunch.optName.args.slug ).find( '.current' ).removeClass( 'current' );
			}
		);

		if ( undefined !== welaunch.optName.last_tab ) {
			$( '#' + welaunch.optName.last_tab + '_section_group_li_a' ).click();

			return;
		}

		tab = decodeURI( ( new RegExp( 'tab=(.+?)(&|$)' ).exec( location.search ) || [''])[1] );

		if ( '' !== tab ) {
			if ( $.cookie( 'welaunch_current_tab_get' ) !== tab ) {
				$.cookie(
					'welaunch_current_tab',
					tab,
					{
						expires: 7,
						path: '/'
					}
				);

				$.cookie(
					'welaunch_current_tab_get',
					tab,
					{
						expires: 7,
						path: '/'
					}
				);

				$.cookie(
					'welaunch_current_tab_' + welaunch.optName.args.opt_name,
					tab,
					{
						expires: 7,
						path: '/'
					}
				);

				$( '#' + tab + '_section_group_li' ).click();
			}
		} else if ( '' !== $.cookie( 'welaunch_current_tab_get' ) ) {
			$.removeCookie( 'welaunch_current_tab_get' );
		}

		$( '.welaunch-container' ).each(
			function() {
				var boxIndex;

				if ( ! $( this ).parents( '.postbox-container:first' ).length ) {
					opt_name = $( '.welaunch-ajax-security' ).data( 'opt-name' );

					cookieName = 'welaunch_current_tab_' + opt_name;

					sTab = $( this ).find( '#' + $.cookie( cookieName ) + '_section_group_li_a' );
				} else {
					opt_name = $.welaunch.getOptName( this );

					boxIndex = $( this ).data( 'index' );

					if ( '' === boxIndex ) {
						boxIndex = 0;
					}

					cookieName = 'welaunch_metabox_' + boxIndex + '_current_tab_' + opt_name;

					sTab = $( this ).find( '#' + $.cookie( cookieName ) + '_section_group_li_a' );
				}

				// Tab the first item or the saved one.
				if ( null === $.cookie( cookieName ) || 'undefined' === typeof ( $.cookie( cookieName ) ) || 0 === sTab.length ) {
					$( this ).find( '.welaunch-group-tab-link-a:first' ).click();
				} else {
					sTab.click();
				}
			}
		);
	};
})( jQuery );
