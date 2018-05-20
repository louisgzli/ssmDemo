/**
 * Created by Administrator on 2018/5/14 0014.
 */
/**
 * Created by Administrator on 2018/5/14 0014.
 */
Requires:[
    "ssmDemo.view.UserChange"
]

Ext.define('ssmDemo.view.User', {
    extend: 'Ext.grid.Panel',
    id: "user",
    requires: [
        'Ext.grid.column.Action',
        'Ext.grid.*',
        'Ext.util.*',
        'Ext.toolbar.Paging',
    ],
    alias: "widget.user",
    store: "User",
    stateful: true,
    // collapsible: true,
    multiSelect: true,
    stateId: 'user',
    width: "100%",
    height: "100%",

    //分页
    /*dockedItems: [{
     xtype: 'pagingtoolbar',
     store: "Company",   // same store GridPanel is using
     dock: 'bottom',
     displayInfo: true
     }],*/


    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },


    dockedItems: [{
        dock: "top",
        xtype: "toolbar",
        items: [

            {
                xtype: 'button',
                text: '添加',
                tooltip: '添加',

                listeners: {
                    click: {
                        fn: function () {

                            Ext.create('ssmDemo.view.UserChange', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {
                                            var form = this.up("window").down("form");
                                            values = form.getValues();
                                            console.log(values);
                                            Ext.getCmp("user").getStore().insert(0, values);
                                            this.up("window").close();
                                            //添加同步导数据库
                                            user_add(values);

                                            load4()
                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").close();


                                        }
                                    }]
                                }]
                            }).show();

                        }
                    }
                }
            },
            {
                xtype: 'button',
                text: '修改',

                tooltip: '修改',
                listeners: {
                    click: {
                        fn: function () {
                            var modify = Ext.create('ssmDemo.view.UserChange', {
                                dockedItems: [{
                                    xtype: 'toolbar',
                                    dock: 'bottom',
                                    ui: 'footer',
                                    layout: {
                                        pack: 'center'
                                    },
                                    items: [{
                                        minWidth: 80,
                                        text: '保存',
                                        handler: function () {

                                            var win = this.up("window");

                                            var form = win.down("form");
                                            record = form.getRecord();
                                            values = form.getValues();
                                            record.set(values);
                                            win.close();
                                            //修改同步到数据库
                                            values.id = Ext.getCmp("user").getSelectionModel().getLastSelected().data.id;
                                            user_update(values);
                                            load4()
                                        }
                                    }, {
                                        minWidth: 80,
                                        text: '取消',
                                        handler: function () {
                                            this.up("window").close();
                                        }
                                    }]
                                }]
                            })
                            form = modify.down("form");
                            record = Ext.getCmp("user").getSelectionModel().getLastSelected(),
                                console.log("user" + form);
                            form.loadRecord(record);
                            modify.show();

                        }

                    }

                },

            },
            {
                xtype: 'button',
                text: "删除",
                tooltip: '删除',

                handler: function () {
                    console.log("user点了删除")

                    Ext.create("Ext.window.Window",{
                        title:"确定要删除该记录",
                        width:300,
                        height:150,
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [{
                                minWidth: 80,
                                text: '删除',
                                handler: function () {
                                    record = Ext.getCmp("user").getSelectionModel().getSelection();
                                    console.log(record);
                                    Ext.getCmp("user").getStore().remove(record);
                                    this.up("window").close();
                                    //从数据库中删除
                                    for(var i = 0;i<record.length;i++){
                                        user_dele(record[i].getData().id);
                                    }

                                    load4()
                                }
                            }, {
                                minWidth: 80,
                                text: '取消',
                                handler: function () {
                                    this.up("window").close();


                                }
                            }]
                        }]

                    }).show();

                }
            },
            {
                xtype: 'button',
                text: "查询",

                tooltip: '查询',
                handler: function () {

                    var win = Ext.create('ssmDemo.view.UserChange', {
                        dockedItems: [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            layout: {
                                pack: 'center'
                            },
                            items: [
                                {
                                    text: "查询",
                                    handler:function(){
                                        var form = this.up("window").down("form");

                                        values = form.getValues();
                                        var userNameKey = values.name;



                                        //正则表达式匹配公司名
                                        if(userNameKey==="")var regexName = new RegExp("[\s\S]*");
                                        else  var regexName = new RegExp("("+userNameKey+")+");



                                        var store  = Ext.getCmp("user").getStore();



                                        var count = store.getCount();
                                        var record_temp=[];
                                        for(var i = 0;i<count;i++){
                                            var strName = store.getAt(i).get("name").toString();


                                            //正则表达式匹配company

                                            if(regexName.test(strName)){
                                                record_temp.push(store.getAt(i));
                                            }
                                        }
                                        store.loadRecords(record_temp);
                                        this.up("window").destroy();
                                    }
                                }
                            ]
                        }
                        ],
                    }).show();
                    Ext.getCmp("query_userPassword").hide();
                }
            },
        ],
    }],

    initComponent: function () {
        this.columns = [
            {
                text:"id",
                flex:1,
                sortable:true,
                dataIndex:"id",
            },

            {

                text: '用户名',
                flex: 1,
                sortable: false,
                dataIndex: 'name'
            },
            {

                text: '密码',
                flex: 1,
                sortable: false,
                dataIndex: 'password'
            },

        ];

        this.callParent();

    },

})
function user_add(values){
    Ext.Ajax.request({
        url: 'user/new.action',

        method:"post",
        params:{
            id:values.id,
            name:values.name,
            password:values.password,

        }
    });
};
function user_update(values){
    Ext.Ajax.request({
        url: 'user/update.action',

        method:"post",
        params:{
            id:values.id,
            name:values.name,
            password:values.password,
        }
    });
};
function user_dele(id){
    console.log("->>>>>>>>>>>>>>>>>>>>>");
    Ext.Ajax.request({
        url: 'user/dele.action',

        method:"post",
        params:{
            id:id,
        }
    });
};
function load4() {
    Ext.getCmp("employee").getStore().load();
}
