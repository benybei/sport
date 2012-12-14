Ext.define('sport.view.Espagne',{
	extend:'Ext.navigation.View',
	xtype:'espagne',
	  requires:[
	              'Ext.dataview.List',
	              'Ext.data.proxy.JsonP',
	              'Ext.data.Store',
	              'Ext.data.reader.Json',
	              'Ext.data.reader.Array',
	              ],
	config:{
		title:'Football',
		iconCls:'americain',
		/*pour le css possition */
		//cls:'home',
		//scrollable:true,
		styleHtmlContent:true,
		
		
        items: [
                {
                	xtype:'list',
                	itemTpl:'{location}',
                	title:'Recent Post',
                	 store: {                       
                		 autoLoad:true,

                         fields: ['location'],
                        
                         proxy: {
                             type: 'jsonp',
                             url: 'http://api.espn.com/v1/sports/football/nfl/teams/news/?apikey=jcsjfv8gj7mf34hnm6qzxt72',
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
})
