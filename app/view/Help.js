Ext.define('sport.view.Help',{
	extend:'Ext.navigation.View',
	xtype:'help',
	  requires:[
	              'Ext.dataview.List',
	              'Ext.data.proxy.JsonP',
	              'Ext.data.Store'
	              ],
	//requires: ['sport.view.LoremIpsum'],
	config:{
		title:'Commande',
		iconCls:'shop1',

    	//title:'Soccer',
    	//iconCls:'soccer',
        /* pour la parti avec contacte*/
    	
       items: [
                {
                	xtype:'list',
                	itemTpl:'{title}',
                	title:'Nos Produit',
                	fullscreen: true, 
                	
                	 store: {
                	    	 /* pour la parti avec contacte*/
                	    	               	       
                	        data: [
                	            {title: 'maillot',id:'1'},
                	            { title: 'chaussure', id:'2'},
                	            { title: 'ballon', id:'3'},
                	            
                	        ]
                	        
                	    },
               // itemTpl: '<img src="{title}1.png" />'
                }
                ]
    }
})


   