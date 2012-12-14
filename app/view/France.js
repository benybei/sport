Ext.define('sport.view.France', {
    extend: 'Ext.navigation.View',
    xtype:'france',
    requires:[
              'Ext.dataview.List',
              'Ext.data.proxy.JsonP',
              'Ext.data.Store'
              ],
    config: {
    	title:'Soccer',
    	iconCls:'soccer',
        /* pour la parti avec contacte*/
    	
       items: [
               {
               	xtype:'list',
               	itemTpl:'{location}',
               	title:'Recent Post',
               	 store: {                       
               		 autoLoad:true,

                        fields: ['location','id'],
                       
                        proxy: {
                            type: 'jsonp',
                            url: 'http://api.espn.com/v1/sports/soccer/fra.1/teams/news/?apikey=jcsjfv8gj7mf34hnm6qzxt72',
                            reader: {
                           	 type: 'json',
                           	 /* sa marche amene la liste des equipe*/
                           	 rootProperty:'sports[0].leagues[0].teams',
                            }
                        }
                    }
               }
               ]
    }
});