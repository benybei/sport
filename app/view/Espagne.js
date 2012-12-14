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
                	itemTpl:'{name}',
                	title:'Recent Post',
                	 store: {                       
                		 autoLoad:true,

                         fields: ['name'],
                        
                         proxy: {
                             type: 'jsonp',
                             url: 'http://api.espn.com/v1/sports/soccer/fra.1/teams/news/?apikey=jcsjfv8gj7mf34hnm6qzxt72',
                             reader: {
                            	 type: 'json',
                            	  // record: 'leagues',
                            	    //rootProperty: 'users'
                            	 
                            	// rootProperty:Ext.encode('sports')+'.'+'leagues',
                                //callbackKey: 'callback',
                            	 //rootProperty:'sports[0].leagues',
                             }
                         }
                     }
                }
                ]
	}
})
