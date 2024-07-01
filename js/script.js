/**
 * listen event on button for submit form
 * And call API with API generated by function createUrl
 * And modified textContent with function manageWeather 
 */
document.getElementById("loupe").addEventListener("click", (e) => {
    e.preventDefault();
    fetch(createUrl())
    .then(res => res.json())
    .then(data => {
    
    manageWeather(data)
    })
})


/**
 * take the value of form
 * And concatenate with the url of API
 * And return url
 * @returns string
 */
function createUrl(){
    let url = `http://api.weatherapi.com/v1/current.json?key=8b9ec9e53f81465aa7c103515242106&q=${document.getElementById("city").value}&aqi=no`;
    console.log(url);
    return url;
}

import {manageWeather} from '/js/ModifyDom.js'