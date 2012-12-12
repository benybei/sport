Ext.define('sport.view.Allemagne',{
	extend:'Ext.navigation.View',
	xtype:'allemagne',
	 requires: [
	            'Ext.form.FieldSet',
	            'Ext.field.Email',
	        ],
	config:{
		title:'Basket',
		iconCls:'basket',
		//itemTpl:'{title}',
		//url:'contact.php',
		/* pour la parti avec form emai nom et message*/
	
	  	
	       items: [
	                {
						xtype:'list',
		        	  itemTpl:'<img src="resources/nba/{id}.png" alt="some_text">{title}',
		        	  title:'Liste des &eacute;quipes - Basketball NBA' ,
		                //src:'resources/nba/{id}.png' ,
		                store: {
               	    	 /* pour la parti avec contacte*/
               	    	               	       
               	        data: [
               	            {title: 'Boston Celtics',id:'1'},
               	            { title: 'Chicago Bulls', id:'5'},
               	           { title: 'Oklahoma City Thunder', id:'29'},
               	            { title: 'Philadelphie 76ers', id:'14'},
               	            { title: 'New York Knicks',id:'12'},
			               	{ title: 'Detroit Piston',id:'7'},
			               	{ title: 'Miami Heat',id:'9'},
			               	{ title: 'an Antonio Spurs',id:'39' },
			               	{ title: 'New Orleans',id:'29' },
			               	{ title: '	Washington Wizards',id:'16' },
			               	{ title: 'Los Angeles Lakers',id:'22' },
			               	{ title: 'Utah Jazz',id:'40' },
			               	{ title: 'Minnesota Timberwolves',id:'17' },
			               	{ title: 'Golden State Warriors',id:'189' },
			               	{ title: 'Brooklyn Nets',id:'3' },
			               	{ title: 'Toronto Raptors',id:'15' },
			               	{ title: 'Phoenix Suns',id:'31'},
               	
               	        ]
               	        
               	    }
		               // flex: 1
	                }] 
		        }
		       
})
/*Denver Nuggets	Golden State Warriors	Dallas Mavericks	Boston Celtics	Chicago Bulls	Atlanta Hawks
Minnesota Timberwolves	Los Angeles Clippers	Houston Rockets	Brooklyn Nets	Cleveland Cavaliers	Charlotte Bobcats
Oklahoma City Thunder	Los Angeles Lakers	Memphis Grizzlies	New York Knicks	Detroit Pistons	Miami Heat
Portland Trail Blazers	Phoenix Suns	New Orleans Hornets	Philadelphie 76ers	Indiana Pacers	Orlando Magic
Utah Jazz	Sacramento Kings	San Antonio Spurs	Toronto Raptors	Milwaukee Bucks	Washington Wizards*/