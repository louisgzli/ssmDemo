/**
 * Created by Administrator on 2018/5/14 0014.
 */
Ext.define("ssmDemo.model.User", {
    extend: "Ext.data.Model",
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "password", type: "string"},
    ]
})