const main = document.querySelector(".movies");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66b51bd952mshb2449545a26ed30p1b36b5jsn0a53fb604eed',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', options)
	.then(response => response.json())
	.then(response => {
        const list = response.d;

        list.forEach((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}" <h2>${name}</h2></li>`;

            main.innerHTML += movie;
        })
    })
	.catch(err => console.error(err));