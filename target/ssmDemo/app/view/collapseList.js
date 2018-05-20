/**
 * Created by bliss on 2018/5/13.
 */
Ext.define("tab_arraygrid",{
    extend:"Ext.panel.Panel",
    height:"100%",
    items:[{
        xtype:"arraygrid",
    }]

});
Ext.define("tab_user",{
    extend:"Ext.panel.Panel",
    height:"100%",
    items:[{
        xtype:"user",
    }]
})
Ext.define("tab_employee",{
    extend:"Ext.panel.Panel",
    height:"100%",
    items:[{
        xtype:"employee",
    }]
})

    Ext.define("tab_commodity1",{
        extend:"Ext.panel.Panel",
        height:"100%",
        items:[{
            xtype:"commodity",
        }]
    }),


    Ext.define(


    'ssmDemo.view.collapseList', {
    extend:"Ext.panel.Panel",

    alias:"widget.collapseList",
    // width: "100%",
    // height: 600,
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },
    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [{
        title: '系统管理',
        layout : 'vbox',
        items:[
            {

                xtype:"button",
                text:"用户管理",
                width:"100%",
                handler:function(){
                    var tab = Ext.getCmp("showtab");
                    if(Ext.getCmp("usertab")==undefined){
                       var tab_temp =  tab.add(
                            [
                                {
                                    id:"usertab",
                                    height:"100%",
                                    title:"用户管理",
                                    closable: true,
                                    items:Ext.create("tab_user")

                                }
                            ]
                        )

                    }
                    tab.setActiveTab("usertab");

                }


            },

        ]
    },
        {
        title: '企业管理',

            layout : 'vbox',


            items:[

                {
                    xtype:"button",
                    text:"企业信息管理",
                    width:"100%",
                    margin:"10px",
                    handler:function(){
                        var tab = Ext.getCmp("showtab");
                        if(Ext.getCmp("arraygridtab")==undefined){
                          var   tab_temp =  tab.add(
                                [
                                    {
                                        id:"arraygridtab",
                                        height:"100%",
                                        title:"企业信息管理",
                                        closable: true,
                                        items:Ext.create("tab_arraygrid")

                                    }
                                ]
                            )

                        }
                        tab.setActiveTab("arraygridtab");
                        console.log(Ext.getCmp("arraygridtab"))




                    }

                },
                {
                    xtype:"button",
                    text:"从业人员管理",
                    width:"100%",
                    margin:"10px",
                    handler:function(){
                        var tab = Ext.getCmp("showtab");
                        if(Ext.getCmp("employeetab")==undefined){
                           var  tab_temp = tab.add(
                                [
                                    {
                                        id:"employeetab",
                                        height:"100%",
                                        title:"从业人员管理",
                                        closable: true,
                                        items:Ext.create("tab_employee")

                                    }
                                ]
                            )
                        }
                        tab.setActiveTab("employeetab");
                    }

                },


            ]
    },{

        title: '商品管理',

            layout: {
                // layout-specific configs go here
                type: 'accordion',
                titleCollapse: false,
                animate: true,
                activeOnTop: true
            },
            items:[

                {

                    title: '植物',
                    layout : 'vbox',
                    items:[
                        {

                            xtype:"button",
                            text:"树木",
                            width:"100%",
                            handler:function(){
                                var tab = Ext.getCmp("showtab");



                                if(Ext.getCmp("commoditytab1")==undefined){
                                    var tab_temp = tab.add(
                                        [
                                            {
                                                id:"commoditytab1",
                                                height:"100%",

                                                title:"树木",
                                                closable: true,
                                                items:Ext.create("tab_commodity1")

                                            }
                                        ]
                                    )

                                }
                                Ext.getCmp("commoditytab1").setTitle("树木");

                                tab.setActiveTab("commoditytab1");
                                // 使用过滤规则
                                var store = Ext.getCmp("commodity").getStore();
                                store.clearFilter(true);
                                store.filter([

                                    {property:"pType",value:"植物"},
                                    {property:"aType",value:"树木"}
                                ]
                                );



                            }

                        },
                        {

                            xtype:"button",
                            text:"花草",
                            width:"100%",
                            handler:function(){
                                var tab = Ext.getCmp("showtab");
                                Ext.getCmp("showtab");
                                if(Ext.getCmp("commoditytab1")==undefined){
                                    var tab_temp  = tab.add(
                                        [
                                            {
                                                id:"commoditytab1",
                                                height:"100%",
                                                title:"花草",
                                                closable: true,
                                                items:Ext.create("tab_commodity1")

                                            }
                                        ]
                                    )

                                }
                                Ext.getCmp("commoditytab1").setTitle("花草");

                                tab.setActiveTab("commoditytab1");
                                var store = Ext.getCmp("commodity").getStore();
                                store.clearFilter(true);
                                store.filter([
                                        {property:"pType",value:"植物"},
                                        {property:"aType",value:"花草"}
                                ]

                                );

                            }


                        },

                    ]
                },
                {

                    title: '动物',
                    layout : 'vbox',
                    items:[
                        {

                            xtype:"button",
                            text:"哺乳动物",
                            width:"100%",
                            handler:function(){
                                var tab = Ext.getCmp("showtab");
                                if(Ext.getCmp("commoditytab1")==undefined){
                                    tab.add(
                                        [
                                            {
                                                id:"commoditytab1",
                                                height:"100%",
                                                title:"哺乳动物",
                                                closable: true,
                                                items:Ext.create("tab_commodity1")

                                            }
                                        ]
                                    )

                                }
                                Ext.getCmp("commoditytab1").setTitle("哺乳动物");
                                tab.setActiveTab("commoditytab1");
                                var store = Ext.getCmp("commodity").getStore();
                                store.clearFilter(true);
                                store.filter([
                                    {property:"pType",value:"动物"},
                                    {property:"aType",value:"哺乳动物"}
                                ]
                                );


                            }

                        },
                        {

                            xtype:"button",
                            text:"鸟类",
                            width:"100%",
                            handler:function(){
                                var tab = Ext.getCmp("showtab");
                                if(Ext.getCmp("commoditytab1")==undefined){
                                    tab.add(
                                        [
                                            {
                                                id:"commoditytab1",
                                                height:"100%",
                                                title:"鸟类",
                                                closable: true,
                                                items:Ext.create("tab_commodity1")

                                            }
                                        ]
                                    )

                                }
                                Ext.getCmp("commoditytab1").setTitle("鸟类");
                                tab.setActiveTab("commoditytab1");
                                var store = Ext.getCmp("commodity").getStore();
                                store.clearFilter(true);
                                store.filter([
                                    {property:"pType",value:"动物"},
                                    {property:"aType",value:"鸟类"}
                                ]
                                );


                            }

                        },

                    ]
                },
            ]
    }],
});
