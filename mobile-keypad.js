KeyQueue = new Mongo.Collection('keyqueue');


keyList =  [

	{key:8, label:'←', id:'delete', type:'ascii'},
	{key:'=', label:'=', id:'equal'},
	{key:'/', label:'/', id:'slash'},
	{key:'*', label:'*', id:'star'},

	{key:7, label:'7', id:'seven'},
	{key:8, label:'8', id:'eight'},
	{key:9, label:'9', id:'nine'},
	{key:'-', label:'-', id:'minus'},

	{key:4, label:'4', id:'four'},
	{key:5, label:'5', id:'five'},
	{key:6, label:'6', id:'six'},
	{key:'+', label:'+', id:'plus'},

	{key:1, label:'1', id:'one'},
	{key:2, label:'2', id:'two'},
	{key:3, label:'3', id:'three'},
	{key:13, label:'enter', id:'enter', type:'ascii'},

	{key:',', label:',', id:'comma'},
	{key:0, label:'0', id:'zero'},
	{key:'.', label:'.', id:'dot'}
];

if(Meteor.isClient){
	Template.keypad.helpers(
	  {allkeys : keyList}
	);
}
