/**
 * Created by Administrator on 2018/5/14 0014.
 *
 */
var states1 = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data: [
        {"abbr": "动物", "name": "动物"},
        {"abbr": "植物", "name": "植物"},

    ]
});
var states2 = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data: [
        {"abbr": "树木", "name": "树木"},
        {"abbr": "花草", "name": "花草"},
        {"abbr": "哺乳动物", "name": "哺乳动物"},
        {"abbr": "鸟类", "name": "鸟类"},

    ]
});

Ext.define('ssmDemo.view.CommodityChange', {

    extend: "Ext.window.Window",
    alias: "widget.commoditychange",

    width: 650,

    items: [{
        xtype: "form",
        bodyPadding: 55,
        defaultType: 'textfield',
        layout: "anchor",
        defaults: {
            anchor: '90%',

        },

        items: [
            {fieldLabel: "商品名称", name: "name", allowBanks: false},
            {
                xtype: "combo",
                store: states1,
                fieldLabel: "商品大类",
                name: "pType",
                queryMode: 'local',

                displayField: 'name',
                valueField: 'abbr',
                allowBanks: false,
            },
            {
                xtype: "combo",
                store: states2,
                fieldLabel: "商品小类",
                name: "aType",
                queryMode: 'local',

                displayField: 'name',
                valueField: 'abbr',
                allowBanks: false,
            },
        ],

    },

    ]
})
