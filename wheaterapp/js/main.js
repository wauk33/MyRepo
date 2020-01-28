const input = document.querySelector('input');
const btn = document.querySelector('button');

const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');

const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');

const apiLink = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&APPID=e167323c23eee5dfa78fe95b29bf631d";
const units = "&units=metric";
let url;
let $city;

const getWeather = () => {

    $city = (!input.value) ? 'Warszawa' : input.value;

    url = apiLink + $city + apiKey + units;

    axios.get(url)
    .then(res => {
            const status = Object.assign({}, ...res.data.weather);

            cityName.textContent = res.data.name;
            temp.textContent = Math.floor(res.data.main.temp) + "℃";
            humidity.textContent = res.data.main.humidity + "%";
            weather.textContent = status.main;
            warning.textContent = "";
            input.value = '';

            if(status.id >= 200 && status.id <300){
                photo.setAttribute('src', "../images/thunderstorm.png");weather.textContent = "Burza";
            }
            else if(status.id >= 300 && status.id <500){
                photo.setAttribute('src', "../images/drizzle.png");
                weather.textContent = "Mżawka";
            }
            else if(status.id >= 500 && status.id <600){
                photo.setAttribute('src', "../images/rain.png");
                weather.textContent = "Opady deszczu";
            }
            else if(status.id >= 600 && status.id <700){
                photo.setAttribute('src', "../images/ice.png");
                weather.textContent = "Mróz i opady śniegu";
            }
            else if(status.id >= 701 && status.id <800){
                photo.setAttribute('src', "../images/fog.png");
                weather.textContent = "Mgła";
            }
            else if(status.id === 800){
                photo.setAttribute('src', "../images/sun.png");
                weather.textContent = "Słonecznie";
            }
            else if(status.id > 800 && status.id <900){
                photo.setAttribute('src', "../images/cloud.png");
                weather.textContent = "Zachmurzenie";
            }
            console.log(res)
    })
    .catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta.')
};



const enterCheck = () => {
    if(event.keyCode === 13) {getWeather();}
}

getWeather();
btn.addEventListener("click", getWeather);
input.addEventListener('keyup', enterCheck)