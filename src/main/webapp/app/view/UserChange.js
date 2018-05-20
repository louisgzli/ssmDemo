/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define('ssmDemo.view.UserChange', {

    extend:"Ext.window.Window",
    alias:"widget.userchange",

    width: 650,

    items:[ {
        xtype:"form",
        bodyPadding: 55,
        defaultType: 'textfield',
        layout:"anchor",
        defaults: {
            anchor: '90%',

        },

        items:[
            {xtype:"textfield",id:"query_userName", fieldLabel:"用户名",name:"name",allowBanks:false},
            {xtype:"textfield",id:"query_userPassword",fieldLabel:"密码",name:"password",allowBanks:false},


        ],

    },

    ]
})
