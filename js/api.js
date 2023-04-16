fetch('https://643bb2a070ea0e660298d52b.mockapi.io/api/v1/pizza')
      .then(response => response.json())
      .then((data) => {
		console.log(data)
		document.getElementById('h1-1').innerHTML = data[0].name
		document.getElementById('h1-2').innerHTML = data[1].name
		document.getElementById('h1-3').innerHTML = data[2].name
		document.getElementById('p-1').innerHTML = data[0].ingredients
		document.getElementById('p-2').innerHTML = data[1].ingredients
		document.getElementById('p-3').innerHTML = data[2].ingredients

	})