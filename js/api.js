const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a1161f2c11msh5d466b1aee60b35p1cf74ajsn437a3b5e66c8',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
	.then(response => response.json())
	.then((data) => {
        console.log(data)
    })
	.catch(err => console.error(err));