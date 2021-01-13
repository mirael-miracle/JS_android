var groups = localStorage.getItem("groups_data");
if(localStorage.getItem("groups_data")==null){
	groups = [
	{
		number: 'BMTH',
		faculty: 'Metal'
	},
	{
		number:'Wildways',
		faculty:'Metal'
	}
	];
}else{
	groups=JSON.parse(groups);
}
function saveGroups (groups) {
	localStorage.setItem("groups_data",JSON.stringify(groups));
}
