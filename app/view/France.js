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
                	itemTpl:'{title}',
                	title:'Choix du pays',
                	fullscreen: true, 
                	
                	 store: {
                	    	 /* pour la parti avec contacte*/
                	    	               	       
                	        data: [
                	            {title: 'France Ligue 1: AS Saint-Etienne Olympique de Marseille Olympique lyonnais Paris SG..',id:'1'},
                	            { title: 'Angletter Premier League: Manchester United Manchester City Chelsea Arsenal Liverpool', id:'2'},
                	            { title: 'Espagne liga: FC Barcelone Real Madrid Atletico Madrid  Valence FCSeville', id:'3'},
                	            { title: 'Allemagne Bundesliga: Bayern Munich Dortmund  Eintracht Francfort Schalke 04', id:'4'},
                	            { title: 'Italie Calcio: Juventus Turin Inter Milan	AC Milan AS Rome Lazio Rom Fiorentina',id:'5' },
                	        ]
                	        
                	    }
                }
                ]
    }
});