// This file was generated by modules-webmake (modules for web) project.
// See: https://github.com/medikoo/modules-webmake

(function (modules) {
	'use strict';

	var resolve, getRequire, wmRequire, notFoundError, findFile
	  , extensions = {".js":[],".json":[],".css":[],".html":[]}
	  , envRequire = typeof require === 'function' ? require : null;

	notFoundError = function (path) {
		var error = new Error("Could not find module '" + path + "'");
		error.code = 'MODULE_NOT_FOUND';
		return error;
	};
	findFile = function (scope, name, extName) {
		var i, ext;
		if (typeof scope[name + extName] === 'function') return name + extName;
		for (i = 0; (ext = extensions[extName][i]); ++i) {
			if (typeof scope[name + ext] === 'function') return name + ext;
		}
		return null;
	};
	resolve = function (scope, tree, path, fullPath, state, id) {
		var name, dir, exports, module, fn, found, ext;
		path = path.split('/');
		name = path.pop();
		if ((name === '.') || (name === '..')) {
			path.push(name);
			name = '';
		}
		while ((dir = path.shift()) != null) {
			if (!dir || (dir === '.')) continue;
			if (dir === '..') {
				scope = tree.pop();
				id = id.slice(0, id.lastIndexOf('/'));
			} else {
				tree.push(scope);
				scope = scope[dir];
				id += '/' + dir;
			}
			if (!scope) throw notFoundError(fullPath);
		}
		if (name && (typeof scope[name] !== 'function')) {
			found = findFile(scope, name, '.js');
			if (!found) found = findFile(scope, name, '.json');
			if (!found) found = findFile(scope, name, '.css');
			if (!found) found = findFile(scope, name, '.html');
			if (found) {
				name = found;
			} else if ((state !== 2) && (typeof scope[name] === 'object')) {
				tree.push(scope);
				scope = scope[name];
				id += '/' + name;
				name = '';
			}
		}
		if (!name) {
			if ((state !== 1) && scope[':mainpath:']) {
				return resolve(scope, tree, scope[':mainpath:'], fullPath, 1, id);
			}
			return resolve(scope, tree, 'index', fullPath, 2, id);
		}
		fn = scope[name];
		if (!fn) throw notFoundError(fullPath);
		if (fn.hasOwnProperty('module')) return fn.module.exports;
		exports = {};
		fn.module = module = { exports: exports, id: id + '/' + name };
		fn.call(exports, exports, module, getRequire(scope, tree, id));
		return module.exports;
	};
	wmRequire = function (scope, tree, fullPath, id) {
		var name, path = fullPath, t = fullPath.charAt(0), state = 0;
		if (t === '/') {
			path = path.slice(1);
			scope = modules['/'];
			if (!scope) {
				if (envRequire) return envRequire(fullPath);
				throw notFoundError(fullPath);
			}
			id = '/';
			tree = [];
		} else if (t !== '.') {
			name = path.split('/', 1)[0];
			scope = modules[name];
			if (!scope) {
				if (envRequire) return envRequire(fullPath);
				throw notFoundError(fullPath);
			}
			id = name;
			tree = [];
			path = path.slice(name.length + 1);
			if (!path) {
				path = scope[':mainpath:'];
				if (path) {
					state = 1;
				} else {
					path = 'index';
					state = 2;
				}
			}
		}
		return resolve(scope, tree, path, fullPath, state, id);
	};
	getRequire = function (scope, tree, id) {
		return function (path) {
			return wmRequire(scope, [].concat(tree), path, id);
		};
	};
	return getRequire(modules, [], '');
})({
	"ab-page-testing": {
		"assets": {
			"js": {
				"admin": {
					"collections": {
						"base.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 10:55 AM\n */\n\n/**\n * Base Collection\n */\nmodule.exports = Backbone.Collection.extend( {\n\t/**\n\t * helper function to get the last item of a collection\n\t *\n\t * @return Backbone.Model\n\t */\n\tlast: function () {\n\t\treturn this.at( this.size() - 1 );\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/collections/base.js");
						},
						"breadcrumbs.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 10:56 AM\n */\n\nvar base = require( './base' ),\n\tBreadcrumbLink = require( '../models/breadcrumb-link' );\n/**\n * Breadcrumb links collection\n */\nmodule.exports = base.extend( {\n\tmodel: Backbone.Model.extend( {\n\t\tdefaults: {\n\t\t\thash: '',\n\t\t\tlabel: ''\n\t\t}\n\t} ),\n\t/**\n\t * helper function allows adding items to the collection easier\n\t *\n\t * @param {string} route\n\t * @param {string} label\n\t */\n\tadd_page: function ( route, label ) {\n\t\tvar _model = new BreadcrumbLink( {\n\t\t\thash: route,\n\t\t\tlabel: label\n\t\t} );\n\t\treturn this.add( _model );\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/collections/breadcrumbs.js");
						}
					},
					"main.js": function (exports, module, require) {
						eval("(function ( $ ) {\n\n\t//DOM ready\n\t$( function () {\n\t\tvar ThriveAbAdmin = window.ThriveAbAdmin || {},\n\t\t\trouter = require( './router' );\n\n\n\t\tBackbone.emulateHTTP = true;\n\n\t\tThriveAbAdmin.router = new router();\n\t\tThriveAbAdmin.router.init_breadcrumbs();\n\n\t\tBackbone.history.stop();\n\t\tBackbone.history.start();\n\n\t\tif ( ! Backbone.history.fragment ) {\n\t\t\tThriveAbAdmin.router.navigate( '#dashboard', {trigger: true} );\n\t\t}\n\t} );\n})( jQuery );\n//# sourceURL=ab-page-testing/assets/js/admin/main.js");
					},
					"models": {
						"breadcrumb-link.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 11:00 AM\n */\n\n/**\n * BreadcrumbLink model\n */\nmodule.exports = Backbone.Model.extend( {\n\tdefaults: {\n\t\tID: '',\n\t\thash: '',\n\t\tlabel: '',\n\t\tfull_link: false\n\t},\n\t/**\n\t * we pass only hash and label, and build the ID based on the label\n\t *\n\t * @param {object} att\n\t */\n\tinitialize: function ( att ) {\n\t\tif ( ! this.get( 'ID' ) ) {\n\t\t\tthis.set( 'ID', att.label.split( ' ' ).join( '' ).toLowerCase() );\n\t\t}\n\t\tthis.set( 'full_link', att.hash.match( /^http/ ) );\n\t},\n\t/**\n\t *\n\t * @returns {String}\n\t */\n\tget_url: function () {\n\t\treturn this.get( 'full_link' ) ? this.get( 'hash' ) : ('#' + this.get( 'hash' ));\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/models/breadcrumb-link.js");
						}
					},
					"router.js": function (exports, module, require) {
						eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 9:51 AM\n */\n\nvar BreadcrumbsCollection = require( './collections/breadcrumbs' ),\n\tBreadcrumbsView = require( './views/breadcrumbs' ),\n\tDashboardView = require( './views/dashboard' );\n\n(function ( $ ) {\n\n\tmodule.exports = Backbone.Router.extend( {\n\t\tview: null,\n\t\t$el: $( '#tab-admin-dashboard-wrapper' ),\n\t\troutes: {\n\t\t\t'dashboard': 'dashboard'\n\t\t},\n\t\tbreadcrumbs: {\n\t\t\tcol: null,\n\t\t\tview: null\n\t\t},\n\t\t/**\n\t\t * init the breadcrumbs collection and view\n\t\t */\n\t\tinit_breadcrumbs: function () {\n\t\t\tthis.breadcrumbs.col = new BreadcrumbsCollection();\n\t\t\tthis.breadcrumbs.view = new BreadcrumbsView( {\n\t\t\t\tcollection: this.breadcrumbs.col\n\t\t\t} )\n\t\t},\n\t\t/**\n\t\t * set the current page - adds the structure to breadcrumbs and sets the new document title\n\t\t *\n\t\t * @param {string} section page hierarchy\n\t\t * @param {string} label current page label\n\t\t *\n\t\t * @param {Array} [structure] optional the structure of the links that lead to the current page\n\t\t */\n\t\tset_page: function ( section, label, structure ) {\n\t\t\tthis.breadcrumbs.col.reset();\n\t\t\tstructure = structure || {};\n\t\t\t/* Thrive Dashboard is always the first element */\n\t\t\tthis.breadcrumbs.col.add_page( ThriveAbAdmin.dash_url, ThriveAbAdmin.t.Thrive_Dashboard, true );\n\n\t\t\t_.each( structure, _.bind( function ( item ) {\n\t\t\t\tthis.breadcrumbs.col.add_page( item.route, item.label );\n\t\t\t}, this ) );\n\t\t\t/**\n\t\t\t * last link - no need for route\n\t\t\t */\n\t\t\tthis.breadcrumbs.col.add_page( '', label );\n\t\t\t/* update the page title */\n\t\t\tvar $title = $( 'head > title' );\n\t\t\tif ( ! this.original_title ) {\n\t\t\t\tthis.original_title = $title.html();\n\t\t\t}\n\t\t\t$title.html( label + ' &lsaquo; ' + this.original_title );\n\t\t},\n\t\t/**\n\t\t * dashboard route callback\n\t\t */\n\t\tdashboard: function () {\n\t\t\tthis.set_page( 'dashboard', ThriveAbAdmin.t.Dashboard );\n\t\t\tvar self = this;\n\t\t\tTVE_Dash.showLoader();\n\n\t\t\tif ( this.view ) {\n\t\t\t\tthis.view.remove();\n\t\t\t}\n\n\t\t\tjQuery.ajax( {\n\t\t\t\tcache: false,\n\t\t\t\turl: ThriveAbAdmin.ajax.url,\n\t\t\t\tmethod: 'POST',\n\t\t\t\tdataType: 'json',\n\t\t\t\tdata: {\n\t\t\t\t\troute: 'testsforadmin',\n\t\t\t\t\taction: ThriveAbAdmin.ajax.action,\n\t\t\t\t\tcustom: ThriveAbAdmin.ajax.controller_action,\n\t\t\t\t\tnonce: ThriveAbAdmin.ajax.nonce\n\t\t\t\t}\n\t\t\t} ).done( function ( response ) {\n\t\t\t\tself.view = new DashboardView( {\n\t\t\t\t\trunning_tests: new Backbone.Collection( response.running_tests ),\n\t\t\t\t\tcompleted_tests: new Backbone.Collection( response.completed_tests ),\n\t\t\t\t\tdashboard_stats: response.dashboard_stats\n\t\t\t\t} );\n\n\t\t\t\tself.$el.html( self.view.render().$el );\n\t\t\t\tTVE_Dash.hideLoader();\n\t\t\t} );\n\t\t}\n\t} );\n})( jQuery );\n//# sourceURL=ab-page-testing/assets/js/admin/router.js");
					},
					"views": {
						"breadcrumbs.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 11:03 AM\n */\n\n/**\n * breadcrumbs view - renders breadcrumb links\n */\n(function ( $ ) {\n\tmodule.exports = Backbone.View.extend( {\n\t\tel: $( '#tab-breadcrumbs-wrapper' )[0],\n\t\ttemplate: TVE_Dash.tpl( 'breadcrumbs' ),\n\t\t/**\n\t\t * setup collection listeners\n\t\t */\n\t\tinitialize: function () {\n\t\t\tthis.$title = $( 'head > title' );\n\t\t\tthis.original_title = this.$title.html();\n\t\t\tthis.listenTo( this.collection, 'change', this.render );\n\t\t\tthis.listenTo( this.collection, 'add', this.render );\n\t\t},\n\t\t/**\n\t\t * render the html\n\t\t */\n\t\trender: function () {\n\t\t\tthis.$el.empty().html( this.template( {links: this.collection} ) );\n\t\t}\n\t} );\n})( jQuery );\n//# sourceURL=ab-page-testing/assets/js/admin/views/breadcrumbs.js");
						},
						"dashboard.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 2:17 PM\n */\nvar TestListView = require( './test-list' ),\n\tTestPagination = require( './test-pagination' );\n\nmodule.exports = Backbone.View.extend( {\n\ttemplate: TVE_Dash.tpl( 'dashboard' ),\n\tevents: {\n\t\t'keyup .tab-running-search-input': 'search_tests',\n\t\t'keyup .tab-completed-search-input': 'search_tests'\n\t},\n\trunning_test_pagination: null,\n\tcompleted_test_pagination: null,\n\tinitialize: function ( args ) {\n\t\tthis.running_tests = args.running_tests;\n\t\tthis.completed_tests = args.completed_tests;\n\t\tthis.dashboard_stats = args.dashboard_stats;\n\n\t\tthis.listenTo( this.completed_tests, 'remove', function () {\n\t\t\tthis.completed_test_pagination.changePage();\n\t\t}, this );\n\n\t},\n\trender: function () {\n\t\tthis.$el.html( this.template( {stats: this.dashboard_stats} ) );\n\n\t\tthis.render_running_tests();\n\t\tthis.render_completed_tests();\n\n\t\treturn this;\n\t},\n\n\trender_running_tests: function () {\n\n\t\tvar running_test_list = new TestListView( {\n\t\t\ttemplate_item: TVE_Dash.tpl( 'running-test-item' ),\n\t\t\ttemplate_no_item: TVE_Dash.tpl( 'running-test-no-item' ),\n\t\t\ttemplate_no_search_item: TVE_Dash.tpl( 'running-test-no-search-item' ),\n\t\t\tel: this.$el.find( '.tab-running-test-items-list' ),\n\t\t\tcollection: this.running_tests\n\t\t} );\n\n\t\tthis.running_test_pagination = new TestPagination( {\n\t\t\tcollection: this.running_tests,\n\t\t\tview: running_test_list,\n\t\t\tel: this.$el.find( '.tab-running-pagination' )\n\t\t} );\n\n\t\tthis.running_test_pagination.changePage();\n\t},\n\n\trender_completed_tests: function () {\n\t\tvar completed_test_list = new TestListView( {\n\t\t\ttemplate_item: TVE_Dash.tpl( 'completed-test-item' ),\n\t\t\ttemplate_no_item: TVE_Dash.tpl( 'completed-test-no-item' ),\n\t\t\ttemplate_no_search_item: TVE_Dash.tpl( 'completed-test-no-search-item' ),\n\t\t\tel: this.$el.find( '.tab-completed-test-items-list' ),\n\t\t\tcollection: this.completed_tests\n\t\t} );\n\n\t\tthis.completed_test_pagination = new TestPagination( {\n\t\t\tcollection: this.completed_tests,\n\t\t\tview: completed_test_list,\n\t\t\tel: this.$el.find( '.tab-completed-pagination' )\n\t\t} );\n\n\t\tthis.completed_test_pagination.changePage();\n\t},\n\tsearch_tests: function ( e ) {\n\n\t\tvar search = jQuery( e.target ).val(),\n\t\t\tpagination;\n\n\t\tif ( e.currentTarget.className.indexOf( 'running' ) !== - 1 ) {\n\t\t\tpagination = this.running_test_pagination;\n\t\t} else if ( e.currentTarget.className.indexOf( 'completed' ) !== - 1 ) {\n\t\t\tpagination = this.completed_test_pagination;\n\t\t} else {\n\t\t\treturn;\n\t\t}\n\n\t\tpagination.changePage( null, {\n\t\t\tpage: 1,\n\t\t\tsearch_by: search\n\t\t} );\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/views/dashboard.js");
						},
						"test-item.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 4:55 PM\n */\n\nvar delete_test_modal = require( './../../modals/delete' );\n\nmodule.exports = Backbone.View.extend( {\n\ttemplate: '',\n\ttagName: 'tr',\n\tevents: {\n\t\t'click .tab-delete-test': 'delete_test'\n\t},\n\tinitialize: function ( attr ) {\n\t\tthis.template = attr.template;\n\t},\n\trender: function () {\n\t\tthis.$el.html( this.template( {model: this.model} ) );\n\n\t\treturn this;\n\t},\n\tdelete_test: function () {\n\t\tif ( this.model.get( 'status' ) !== 'completed' ) {\n\t\t\treturn;\n\t\t}\n\n\t\tTVE_Dash.modal( delete_test_modal, {\n\t\t\tsubmit: _.bind( function () {\n\t\t\t\tTVE_Dash.showLoader();\n\n\t\t\t\tvar self = this;\n\n\t\t\t\tjQuery.ajax( {\n\t\t\t\t\tcache: false,\n\t\t\t\t\turl: ThriveAbAdmin.ajax.url,\n\t\t\t\t\tmethod: 'POST',\n\t\t\t\t\tdataType: 'json',\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tid: this.model.get( 'id' ),\n\t\t\t\t\t\tpage_id: this.model.get( 'page_id' ),\n\t\t\t\t\t\troute: 'deletecompletedtestadmin',\n\t\t\t\t\t\taction: ThriveAbAdmin.ajax.action,\n\t\t\t\t\t\tcustom: ThriveAbAdmin.ajax.controller_action,\n\t\t\t\t\t\tnonce: ThriveAbAdmin.ajax.nonce\n\t\t\t\t\t}\n\t\t\t\t} ).done( function ( response ) {\n\n\t\t\t\t\tif ( response.success ) {\n\t\t\t\t\t\tself.collection.remove( self.model );\n\t\t\t\t\t\tTVE_Dash.success( response.text );\n\t\t\t\t\t} else {\n\t\t\t\t\t\tTVE_Dash.err( response.text );\n\t\t\t\t\t}\n\n\t\t\t\t\tTVE_Dash.hideLoader();\n\t\t\t\t} );\n\n\t\t\t}, this ),\n\t\t\ttitle: '',\n\t\t\tdescription: TVE_Dash.sprintf( ThriveAbAdmin.t.about_to_delete_variation, ['<strong>' + this.model.get( 'title' ) + '</strong>'] ),\n\t\t\tbtn_yes_txt: ThriveAbAdmin.t.yes,\n\t\t\tbtn_no_txt: ThriveAbAdmin.t.no,\n\t\t\t'max-width': '20%',\n\t\t\twidth: '20%'\n\t\t} );\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/views/test-item.js");
						},
						"test-list.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 1:31 PM\n */\n\nvar TestItemView = require( './test-item' );\n\nmodule.exports = Backbone.View.extend( {\n\ttemplate: '',\n\tevents: {},\n\tinitialize: function ( attr ) {\n\t\tthis.template_item = attr.template_item;\n\t\tthis.template_no_item = attr.template_no_item;\n\t\tthis.template_no_search_item = attr.template_no_search_item;\n\t\tthis.collection = attr.collection;\n\t},\n\trender: function ( collection, c_source ) {\n\t\tvar c = this.collection;\n\n\t\tthis.$el.empty();\n\n\t\tif ( typeof collection !== 'undefined' ) {\n\t\t\tc = new Backbone.Collection( collection );\n\t\t}\n\n\t\tif ( c.length === 0 ) {\n\t\t\tvar _no_results_template = this.template_no_item();\n\n\t\t\tif ( c_source === 'search_by' ) {\n\t\t\t\t_no_results_template = this.template_no_search_item();\n\t\t\t}\n\n\t\t\tthis.$el.html( _no_results_template );\n\t\t} else {\n\t\t\tc.each( this.renderOne, this );\n\t\t}\n\n\t\treturn this;\n\t},\n\trenderOne: function ( item ) {\n\t\tvar view = new TestItemView( {\n\t\t\ttemplate: this.template_item,\n\t\t\tcollection: this.collection,\n\t\t\tmodel: item\n\t\t} );\n\n\t\tthis.$el.append( view.render().$el );\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/views/test-list.js");
						},
						"test-pagination.js": function (exports, module, require) {
							eval("/**\n * Created by PhpStorm.\n * User: Ovidiu\n * Date: 1/16/2018\n * Time: 5:24 PM\n */\n\nmodule.exports = Backbone.View.extend( {\n\ttemplate: TVE_Dash.tpl( 'pagination' ),\n\tevents: {\n\t\t'click a.page': 'changePage',\n\t\t'change .tab-items-per-page': 'changeItemPerPage'\n\t},\n\tcurrentPage: 1,\n\tpageCount: 1,\n\titemsPerPage: 10,\n\ttotal_items: 0,\n\tcollection: null,\n\tparams: null,\n\tview: null,\n\tinitialize: function ( options ) {\n\t\tthis.collection = options.collection;\n\t\tthis.view = options.view;\n\t},\n\tchangeItemPerPage: function ( event ) {\n\t\tthis.itemsPerPage = jQuery( event.target ).val();\n\t\tthis.changePage( null, {page: 1} );\n\t},\n\tchangePage: function ( event, args ) {\n\t\tvar data = {\n\t\t\titemsPerPage: this.itemsPerPage\n\t\t};\n\n\t\t/* Set the current page of the pagination. This can be changed by clicking on a page or by just calling this method with params */\n\t\tif ( event && typeof event.currentTarget !== 'undefined' ) {\n\t\t\tdata.page = jQuery( event.currentTarget ).attr( 'value' );\n\t\t} else if ( args && typeof args.page !== 'undefined' ) {\n\t\t\tdata.page = parseInt( args.page );\n\t\t} else {\n\t\t\tdata.page = this.currentPage;\n\t\t}\n\n\t\t/* just to make sure */\n\t\tif ( data.page < 1 ) {\n\t\t\tdata.page = 1;\n\t\t}\n\n\t\t/* Parse args sent to pagination */\n\t\tif ( typeof args !== 'undefined' ) {\n\n\t\t\t/* When \"per page\"  filter changes, those values are not sent so we save them in the view so we can have them for later */\n\t\t\tif ( typeof args.search_by !== 'undefined' ) {\n\t\t\t\tthis.search_by = args.search_by;\n\t\t\t}\n\t\t}\n\n\t\t/* In case we've saved this before */\n\t\tdata.search_by = this.search_by ? this.search_by.toLowerCase() : '';\n\n\t\tif ( typeof this.view != 'undefined' && this.view != null ) {\n\n\t\t\t/* Prepare params for pagination render */\n\t\t\tthis.updateParams( data.page, this.collection.length );\n\n\t\t\tvar currentCollection = this.collection.clone(),\n\t\t\t\tfrom = (this.currentPage - 1) * this.itemsPerPage,\n\t\t\t\tcollectionSlice,\n\t\t\t\tremoveIds = [],\n\t\t\t\tc_source = '';\n\n\t\t\tif ( typeof currentCollection.comparator !== 'undefined' ) {\n\t\t\t\tcurrentCollection.sort();\n\t\t\t}\n\n\t\t\tif ( data.search_by ) {\n\n\t\t\t\tcurrentCollection.each( function ( model ) {\n\t\t\t\t\tvar title = model.get( 'title' ).toLowerCase(),\n\t\t\t\t\t\tgoal_pages = JSON.stringify( model.get( 'goal_pages' ) ).toLowerCase(),\n\t\t\t\t\t\tpage_title = model.get( 'page_title' ).toLowerCase();\n\t\t\t\t\tif ( title.indexOf( data.search_by ) === - 1 && goal_pages.indexOf( data.search_by ) === - 1 && page_title.indexOf( data.search_by ) === - 1 ) {\n\t\t\t\t\t\tremoveIds.push( model );\n\t\t\t\t\t}\n\t\t\t\t} );\n\n\t\t\t\tfor ( var i in removeIds ) {\n\t\t\t\t\tcurrentCollection.remove( removeIds[i] );\n\t\t\t\t}\n\t\t\t\tc_source = 'search_by';\n\t\t\t}\n\n\t\t\tcollectionSlice = currentCollection.chain().rest( from ).first( this.itemsPerPage ).value();\n\n\t\t\t/* render sliced view collection */\n\t\t\tthis.view.render( collectionSlice, c_source );\n\t\t\t/* render pagination */\n\t\t\tthis.render();\n\t\t}\n\n\t\treturn false;\n\t},\n\tupdateParams: function ( page, total ) {\n\t\tthis.currentPage = page;\n\t\tthis.total_items = total;\n\t\tthis.pageCount = Math.ceil( this.total_items / this.itemsPerPage );\n\t},\n\tsetupParams: function ( page ) {\n\t\tthis.currentPage = page;\n\t\tthis.total_items = this.collection.length;\n\t\tthis.pageCount = Math.ceil( this.total_items / this.itemsPerPage );\n\t},\n\trender: function () {\n\t\tthis.$el.html( this.template( {\n\t\t\tcurrentPage: parseInt( this.currentPage ),\n\t\t\tpageCount: parseInt( this.pageCount ),\n\t\t\ttotal_items: parseInt( this.total_items ),\n\t\t\titemsPerPage: parseInt( this.itemsPerPage )\n\t\t} ) );\n\n\t\tTVE_Dash.materialize( this.$el );\n\n\t\treturn this;\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/admin/views/test-pagination.js");
						}
					}
				},
				"modals": {
					"delete.js": function (exports, module, require) {
						eval("/**\n * General Delete Modal\n */\nmodule.exports = TVE_Dash.views.Modal.extend( {\n\n\ttemplate: TVE_Dash.tpl( 'modals/html-delete' ),\n\n\tevents: {\n\t\t'click .tvd-modal-submit': 'submit'\n\t},\n\n\tinitialize: function ( args ) {\n\n\t\tTVE_Dash.views.Modal.prototype.initialize.apply( this, arguments );\n\t\tthis.$el.addClass( 'tvd-red' );\n\t},\n\n\trender: function () {\n\n\t\tTVE_Dash.views.Modal.prototype.render.apply( this, arguments );\n\t\tthis.$( '.tvd-modal-close' ).addClass( 'tvd-white-text' );\n\n\t\treturn this;\n\t},\n\n\tsubmit: function () {\n\n\t\tif ( typeof this.data['submit'] !== 'function' ) {\n\t\t\tthrow new Error( 'Submit data not implemented' );\n\t\t}\n\t\tthis.data.submit.apply( this, arguments );\n\n\t\tthis.close();\n\t}\n} );\n//# sourceURL=ab-page-testing/assets/js/modals/delete.js");
					}
				}
			}
		}
	}
})("ab-page-testing/assets/js/admin/main");
