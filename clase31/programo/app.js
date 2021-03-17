let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('searchBtn');
let result = document.getElementById('result');
const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather?appid=1c67ae33adc312d33476ae4d68a09beb&q=';


async function search() {
    try {
        const url = URL_BASE + searchInput.value;
        const response = await fetch(url);
        const info = await response.json();

        result.innerHTML = `
            Ciudad ${info.name} esta ${info.weather[0].description}
            y la temperatura es: ${info.main.temp} °K
        `;
    } catch (error) {
        console.log(error);
    }
}

function searchThen() {
    const url = URL_BASE + searchInput.value;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(info => {
            result.innerHTML = `
                Ciudad ${info.name} esta ${info.weather[0].description}
                y la temperatura es: ${info.main.temp} °K
            `;
        })
        .catch(error => {
            console.log(error);
        });
}

searchBtn.addEventListener('click', searchThen);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        search();
    }
});