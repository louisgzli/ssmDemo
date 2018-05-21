/**
 * Created by Administrator on 2018/5/14 0014.
 */
requires:[
    "Ext.ux.data.PagingMemoryProxy",
    'Ext.grid.plugin.BufferedRenderer',
]
Ext.define("ssmDemo.store.Commodity", {
    extend: "Ext.data.Store",
    model: "ssmDemo.model.Commodity",
    autoLoad: true,
    proxy: {

        type: "ajax",
        url: "commodity/loadCommodity.action",

        reader: {
            type: "json",
            root: "commodity",
        },


    },

})