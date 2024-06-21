
/**
 * call functions for change textContent of HTML
 * And display information about the current stat of weather 
 * @param {object} data 
 */
function manageWeather(data) {
    document.getElementById("containerWeather").classList.add("active");
    localisation(data);
    temperature(data);
    feelsLike(data);
    wind(data);
    humidity(data);
    lastUpDate(data);
    imgWeather(data)
}

/**
 * change textContent of localisation
 * @param {object} data 
 */
function localisation(data) {
    console.log(data);
    document.getElementById("localisation").textContent = `Météo de : ${data.location.name}`;
    document.getElementById("subLocalisation").textContent = `${data.location.region}, ${data.location.country}`
}

/**
 * change textContent of temperature
 * @param {object} data 
 */
function temperature(data) {
    document.getElementById("temperature").textContent = `température : ${data.current.temp_c}°C`;   
}

/**
 * change textContent of feels like
 * @param {object} data 
 */
function feelsLike(data) {
    document.getElementById("feelsLike").textContent = `resenti : ${data.current.feelslike_c}°C`;   
}

/**
 * change textContent of wind
 * @param {object} data 
 */
function wind(data) {
    document.getElementById("wind").textContent = `vent de ${data.current.wind_kph}km/h provenance de ${data.current.wind_dir} `;   
}

/**
 * change textContent of humidity
 * @param {object} data 
 */
function humidity(data) {
    document.getElementById("humidity").textContent = `humidité de ${data.current.humidity}%`;   
}

/**
 * change textContent of lastUpDate
 * @param {object} data 
 */
function lastUpDate(data) {
    document.getElementById("lastUpDate").textContent = `dernière mise à jour : ${data.current.last_updated}`;   
}

function imgWeather(data) {
    document.getElementById("imgWeather").src = `http:${data.current.condition.icon}`;
}
export {manageWeather}