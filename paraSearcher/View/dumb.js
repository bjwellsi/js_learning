let name = document.getElementById("name");
let entry = document.getElementById("entry");
let para = document.getElementById("para");
let form = document.getElementById('form');

form.addEventListener("submit", (e) =>{
	e.preventDefault();
	console.log(name.value + ": " + entry.value);
	//sennd the data to the backend
	//send name.value and entry.value
	axios.get('http://localhost:3000/?name='+name.value+"&entry="+entry.value)
		.then((response) =>{
			let resn = response.data.name;
			let rese = response.data.entry;
			para.innerHTML = resn + ' says: ' + rese;
		})
		.catch((err) =>{
			console.log(err);
		})
	//recieve the data from the backend, display it under para

});
