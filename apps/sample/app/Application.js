/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Sample.Application', {
    extend: 'Ext.app.Application',

    name: 'Sample',

    requires: [
        'Localize.Base',

        'Test1.*',
        'Sample.nested.*'
    ],

    controllers: [
        'Main'
    ],

    launch: function () {
        console.log('Application launch called')
    }
});
