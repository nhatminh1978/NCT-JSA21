fetch('https://643bb2a070ea0e660298d52b.mockapi.io/api/v1/pizza')
      .then(response => response.json())
      .then((data) => {
		console.log(data)
		for(let i=0;i<4;i++){
			// document.getElementById("h1").innerHTML = data[i].name
			document.getElementById(`p-${i}`).innerHTML = data[i].ingredients
			document.getElementById(`h1-${i}`).innerHTML = data[i].name	
			document.getElementById(`img-${i}`).src = data[i].image
		}
		
	})