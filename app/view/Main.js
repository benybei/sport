Ext.define('sport.view.Main', {
	extend : 'Ext.tab.Panel',

	requires : [ 'Ext.TitleBar',

	],
	config : {
		tabBarPosition : 'bottom',
		/* pour laffichage du panneau welcom et get star */
		items : [ {
			xtype : 'france',
		}, {
			xtype : 'allemagne',
			style : 'border: none',
		}, {
			xtype : 'espagne',
		}, {
			xtype : 'help',
		}/*,{
			xtype : 'ligue',
		}*/

		]
	}
});
