/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Sample.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Sample.view.main.MainController',
        'Sample.view.main.MainModel',
        'Sample.view.main.List',
        'Test1.*',
        'Sample.nested.*'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Home',
            iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },
        {
            title: 'Registration',
            xtype: 'regpanel',
            iconCls: 'fa-user'
        },
        {
            title: '^navigation.users', //lookup using string notation (Recommended)
            xtype: 'test1-users',
            iconCls: 'fa-user'
        }, {
            title: 'Groups',
            iconCls: 'fa-users',
            bind: {
                html: {$key: 'content', tpl: '{0}: {loremIpsum}'} //lookup using object notation; only required when using in conjunction with tpl
            }
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            html: {$key: 'content2', tpl: '{0}: {loremIpsum}'} // Intentional error as example (observe console log)
        }
    ]
});
