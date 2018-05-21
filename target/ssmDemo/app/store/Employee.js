/**
 * Created by Administrator on 2018/5/14 0014.
 */
requires:[
    "Ext.ux.data.PagingMemoryProxy",
    'Ext.grid.plugin.BufferedRenderer',
]
Ext.define("ssmDemo.store.Employee", {
    extend: "Ext.data.Store",
    model: "ssmDemo.model.Employee",
    autoLoad: true,
    proxy: {

        type: "ajax",
        url: "employee/loadEmployee.action",

        reader: {
            type: "json",
            root: "employeeList",
        },


    },

})