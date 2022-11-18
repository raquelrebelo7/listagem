
fetch("http://localhost:3000/produtos")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.categoria}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});

	fetch('http://localhost:3000/produtos').then(function(response){ console.log(response.data)})
