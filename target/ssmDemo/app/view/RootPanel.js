
Ext.define('ssmDemo.view.RootPanel', {
    extend:'Ext.panel.Panel',
    width: "100%",
    height: "100%",
    minWidth:800,
    minHeight:700,
    alias:"widget.rootpanel",
    title: '便民开锁后台管理',
    layout: 'border',
    items: [
        {
        // xtype: 'panel' implied by default
        title: '菜单栏',
        region:'west',
        xtype: 'panel',
        margins: '5 0 0 5',
        width: 200,
        collapsible: true,   // make collapsible
        id: 'west-region-container',
        layout: 'fit',
        items:[
            {xtype:"collapseList"}
        ]


    },{
        region: 'center',     // center region is required, no width/height specified
        xtype: 'panel',
        layout: 'fit',
        margins: '5 5 0 0',
        items:[
            {xtype:"showtab"}
        ]


    },
        ],


});
