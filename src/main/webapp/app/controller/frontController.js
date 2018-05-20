Ext.define("ssmDemo.controller.frontController",{

    extend: 'Ext.app.Controller',

    views: [


        "ssmDemo.view.ModifyList",
        "ssmDemo.view.ArrayGrid",
        "ssmDemo.view.ShowTab",
        "ssmDemo.view.User",
        "ssmDemo.view.collapseList",
        "ssmDemo.view.Employee",
        "ssmDemo.view.ShowTab",
        "ssmDemo.view.Commodity",
        "ssmDemo.view.collapseList",
        "ssmDemo.view.RootPanel"

    ],
    stores:["Company","Commodity","Employee","User"],
    models:["Company","Commodity","Employee","User"],
    init: function() {
        this.control({


        });

    },
})