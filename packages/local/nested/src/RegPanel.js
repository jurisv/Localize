Ext.define('Sample.nested.RegPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'regpanel',

    defaults: {
        xtype: 'textfield',
        anchor: '100%'
    },

    items: [
        {
            fieldLabel: {$key: 'firstName'}
        },
        {
            fieldLabel: '^lastName'
        }
    ]
});