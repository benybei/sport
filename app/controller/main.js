Ext.define('sport.controller.main', {
    extend: 'Ext.app.Controller',
    views: [
            'france.ligue1',
            'france.liga',
            'allemagne.bull',
            'Help',
            'Espagne'
            
            
            
             
        ],
    config: {
        refs: {
        	france:'france',
        	allemagne:'allemagne',
        	espagne:'espagne',
        	help:'help',
        },
        control: {
            'france list':{
            	itemtap:'showpost'
            },
            'espagne list':{
            	itemtap:'showpostesp'
            },
            'allemagne list':{
            	itemtap:'basketlist'
            },
            'help list':{
            	itemtap:'helplist'
            }
        }
        
    },
    
showpost:function(list, index, element, record){
	/*fait reference a la liste du fichier blog la partie record du fichier json*/
	if (record.get('location')===undefined){
		if ((record.get('images')[0])!==undefined){	
		this.getFrance().push({
			scrollable:true,
			xtype:'panel',
			title:record.get('title'),
			html:['<h1>'+record.get('description')+'</h1>',
			      '<img src="'+record.get('images')[0].url+'"alt="'+record.get('images')[0].alt+'"height="'+record.get('images')[0].height+'"width="'+record.get('images')[0].width+'">' ].join(""),
			    
	 	
		})
	}
	}
	if (record.get('location')!==undefined){	
		
	
	this.getFrance().push({
		
		
		 requires:[
		           		//'Ext.navigation.View',
		              'Ext.data.proxy.JsonP',
		              'Ext.data.Store'
		              ],
		          	title:record.get('location'),
	     //  items: [ {
		          	xtype:'list',
	               	itemTpl:'{linkText},{images[0].alt}',
	               
	               
	               	 store: {                       
	               		 autoLoad:true,

	                        fields: ['linkText','images','title','description'],
	                       
	                        proxy: {
	                            type: 'jsonp',
	                           url: "http://api.espn.com/v1/sports/soccer/fra.1/teams/"+record.get('id')+"/news/?apikey=jcsjfv8gj7mf34hnm6qzxt72",
	                            reader: {
	                           	 type: 'json',
	                           	 /* sa marche amene la liste des equipe*/
	                           	 rootProperty:'headlines',
	                            }
	                        }
	                    }
	               //}  ]
	})
}
	},
	showpostesp:function(list, index, element, record){
		/*fait reference a la liste du fichier blog la partie record du fichier json*/
		if (record.get('location')===undefined){
			if ((record.get('images')[0])!==undefined){	
				this.getEspagne().push({
					scrollable:true,
					xtype:'panel',
					title:record.get('title'),
					html:['<h1>'+record.get('description')+'</h1>',
					      '<img src="'+record.get('images')[0].url+'"alt="'+record.get('images')[0].alt+'"height="'+record.get('images')[0].height+'"width="'+record.get('images')[0].width+'">' ].join(""),
				})
			}
			}
		if (record.get('location')!==undefined){
			this.getEspagne().push({
			 requires:[
			           		'Ext.navigation.View',
			              'Ext.data.proxy.JsonP',
			              'Ext.data.Store'
			              ],
			          	title:record.get('location'),
		     //  items: [ {
			          	xtype:'list',
		               	itemTpl:'{linkText},{images[0].alt}',
		               
		               
		               	 store: {                       
		               		 autoLoad:true,

		                        fields: ['linkText','images','title','description'],
		                       
		                        proxy: {
		                            type: 'jsonp',
		                           url: "http://api.espn.com/v1/sports/football/nfl/teams/"+record.get('id')+"/news/?apikey=jcsjfv8gj7mf34hnm6qzxt72",
		                            reader: {
		                           	 type: 'json',
		                           	 /* sa marche amene la liste des equipe*/
		                           	 rootProperty:'headlines',
		                            }
		                        }
		                    }
		               
		})
	}
		},
    
    /*basket affiche les liste*/
   basketlist:function(list, index, element, record){
    	//fait reference a la liste du fichier blog la partie record du fichier json
    	//if (record.get('id') === 3){
    	this.getAllemagne().push({	
    	
    		xtype:'bull',		
    		
    }) 
    //};
    
    	},
	helplist:function(list, index, element, record){
	    	/* la liste des commande*/
	    	this.getHelp().push({
	    		    layout: {
	                type: 'vbox',
	                pack: 'middle',
	                
	            },
	            
	           title:record.get('title'),
	            items: [
	                {
	                    //give it an xtype of list for the list component
	                    xtype: 'dataview',
	                    //fullscreen: true,
	                    height:550,
	                    scrollable: 'vertical',	                    
	                    //set the itemtpl to show the fields for the store
	                    html :['<img src=resources/vente/'+record.get('title')+'/1.jpg> <br/>',
	                           '<img src=resources/vente/'+record.get('title')+'/2.jpg> <br/>',
	                           '<img src=resources/vente/'+record.get('title')+'/3.jpg> <br/>',
	                           '<img src=resources/vente/'+record.get('title')+'/4.jpg> <br/>',
	                           '<img src=resources/vente/'+record.get('title')+'/5.jpg> <br/>',
	                           ]
	                
	                }
	            ]
	        
	    		
	    		}) 
	    
	    
	    	}
        
        
    
    
});
