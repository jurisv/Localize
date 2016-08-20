/**
 * This view is an example list of people.
 */
Ext.define('Sample.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Sample.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        {text: '^name', dataIndex: 'name'}, //lookup using string notation (Recommended)
        {text: 'Email', dataIndex: 'email', flex: 1},
        {
            text: {
                $key: 'phone',
                pkg: 'Sample'
            }, dataIndex: 'phone', flex: 1 // same lookup but using longer object notation
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
