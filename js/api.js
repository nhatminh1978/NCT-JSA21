fetch('https://643bb2a070ea0e660298d52b.mockapi.io/api/v1/ingredients')
	.then(response => response.json())
	.then((data) => {
		for (let i = 0; i < Array.from(data).length; i++) {

			document.getElementById(`p-${i}`).innerHTML = data[i].ingredients
			document.getElementById(`h-${i}`).innerHTML = data[i].name
			document.getElementById(`img-${i}`).src = data[i].image
		}

	})
fetch('https://643bb2a070ea0e660298d52b.mockapi.io/api/v1/menu')
	.then(response => response.json())
	.then((data) => {

		for (let i = 0; i < Array.from(data).length; i++) {
			document.getElementById(`name-${i}`).innerHTML = data[i].name
			document.getElementById(`description-${i}`).innerHTML = data[i].descriptions
			document.getElementById(`price-${i}`).innerHTML = data[i].price
			document.getElementById(`image-${i}`).src = data[i].img
		}
		// const menu = Array.from(data)
		// const searchInput = document.querySelector('.data-search')
		// searchInput.addEventListener("input", (e) => {
		// 	const value = e.target.value.toLowerCase()
		// 	menu.forEach(item => {
		// 		const isVisible = item.name.toLowerCase().includes(value)
		// 		item.element.classList.toggle("hide", !isVisible)
		// 	})
			
			


		// })

	})
