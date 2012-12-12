Ext.define('sport.controller.main', {
    extend: 'Ext.app.Controller',
    views: [
            'france.ligue1',
            'france.liga',
            'allemagne.bull',
            'Help',
            
             
        ],
    config: {
        refs: {
        	france:'france',
        	allemagne:'allemagne',
        	help:'help',
        },
        control: {
            'france list':{
            	itemtap:'showpost'
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
	if (record.get('id') === '1'){
	this.getFrance().push({	
	
		xtype:'ligue',		
		
}) };
if (record.get('id') === '3'){
	this.getFrance().push({	
	
		xtype:'ligafr',		
		
})}
if (record.get('id') === '2'){
	this.getFrance().push({	
	
		xtype:'ligue',		
		
})};
if (record.get('id') === '4'){
	this.getFrance().push({	
	
		xtype:'ligafr',		
		
})};
if (record.get('id') === '5'){
	this.getFrance().push({	
	
		xtype:'bull',		
		
})}
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
