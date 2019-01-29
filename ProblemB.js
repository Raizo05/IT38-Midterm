let doc = document.getElementById('list')

let y = '[{"userId":1,"id":1,"title":"delectus aut autem","completed": true},{"userId":1,"id":2,"title":"quis ut nam","completed": false},{"userId":1,"id":3,"title":"delectus aut autem","completed": false}]'
//test data
function doAjax(){
	let x = new XMLHttpRequest();
	if (x.status == 200 && x.readystate == 4){
	//if(true){ //test
		let data = JSON.parse(x.response);
		//let data = JSON.parse(y);//test
		let html = "<table><tbody><tr><td>Task</td> <td>Status</td></tr>";
		for (let i = 0; i <data.length; i++){
			html += "<tr><td><li>" + data[i].title + "</td>";
			if (data[i].completed) html += "<td> Completed</td>";
			else html += "<td>Not completed</td>";
			html+= "</li></tr>";
		}
		html += "</tbody></table>";
		doc.innerHTML = html;
	}
	else if (x.status != 200){
		doc.innerHTML = "Service unavailabe";
	}
	x.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
	x.send();
}