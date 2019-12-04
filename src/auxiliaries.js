export const renderCountryName = (countryName) => {
  const countryNameContainer = document.querySelector('.country-name');
  countryNameContainer.innerHTML = countryName;
}


export const renderData = (longitude, latitude, icon, isDay, tempCelcius, tempFaherneit, weather, region, feelsLikeC, feelsLikeF) => {
  const img = document.querySelector('.weather-icon');
  const longitudeContainer = document.querySelector('.longitude'); 
  const latitudeContainer = document.querySelector('.latitude'); 
  const regionContainer = document.querySelector('.region');
  const weatherContainer = document.querySelector('.weather');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const main = document.querySelector('main');
  img.src = "../src/images/" + icon;
  changeBackground(isDay, main);

  longitudeContainer.innerHTML = `Longitude: ${longitude}`;
  latitudeContainer.innerHTML = `Latitude: ${latitude}`;
  regionContainer.innerHTML = `Region: ${region}`;
  weatherContainer.innerHTML = `It's ${weather}`;
  temperature.innerHTML = `${tempCelcius} &#8451;/ ${tempFaherneit}	&#8457;`; 
  feelsLike.innerHTML = `Feels like <br> ${feelsLikeC} &#8451;/ ${feelsLikeF}	&#8457;`
}

export const changeBackground = (isDay, main) => {
  if (!isDay) {
    if (main.classList.contains('day')){
      main.classList.toggle('day');
    } 
    
    document.querySelector('.sun-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"

    if (!main.classList.contains('night')){
      main.classList.toggle('night');
      document.querySelector('.moon-gif').style.animation = "moon 1s ease-in-out 0s 1 forwards normal"
    } 
  } else {
    if (main.classList.contains('night')){
      main.classList.toggle('night');
      document.querySelector('.moon-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"
    } 

    document.querySelector('.moon-gif').style.animation = "reverselightsource .5s ease-in-out 0s 1 forwards normal"

    if (!main.classList.contains('day')){
      main.classList.toggle('day')
      document.querySelector('.sun-gif').style.animation = "sun 1s ease-in-out 0s 1 forwards normal"
    } 
  }
}


export const capitalizeString = (string) => {
  string = string.split(' ');
  string = string.map((word) => capitalizeWord(word));
  string = string.join(' ');
  return string;
}

export const capitalizeWord = (word) => {
  word = word.split('');
  word[0] = word[0].toUpperCase();
  word = word.join('')
  return word;
}