Ext.define('Test1.Users', {
    extend: 'Ext.Panel',
    xtype: 'test1-users',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    title: '~title',
    defaults: {
        flex: 1
    },
    items: [
        {
            xtype: 'panel',
            title: '~title',
            html: '~content.dummy'
        },
        {
            xtype: 'panel',
            title: '~title2',
            html: '~Sample|navigation.users'
        },
        {
            xtype: 'panel',
            title: '~title3' // Missing localization as example (observe console log)
        }
    ]
});