/*!
 * reports.js
 *
 * Copyright (c) "kento" Karim Rahimpur www.itthinx.com
 *
 * This code is provided subject to the license granted.
 * Unauthorized use and distribution is prohibited.
 * See COPYRIGHT.txt and LICENSE.txt
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * This header and all notices must be kept intact.
 *
 * @author itthinx
 * @package woocommerce-product-search
 * @since 4.5.0
 */

if ( typeof jQuery !== 'undefined' ) {
	jQuery( document ).ready( function() {

		jQuery( 'div.wrap.woocommerce > .error.inline' ).each(
			function() {
				if ( jQuery( this ).html().indexOf( 'analytics' ) >= 0 ) {
					jQuery( this ).remove();
				}
			}
		);

		jQuery( 'div.wrap.woocommerce > .error.inline' ).show();
	} );
}
