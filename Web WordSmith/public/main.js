let submit = document.querySelector('#submit');
let input = document.querySelector('#input');
let responseField = document.querySelector('#responseField');
let shorten = document.querySelector('#shorten');
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
//AJAX functions
const getSuggestions = ()=>{
    const endPoint = url + queryParams + input.value;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            renderWordResponse(xhr.response);
        }
    }
    xhr.open('GET', endPoint, true);
    //xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}
const displaySuggestions = event => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
}
const rebrandlyUrl = 'https://api.rebrandly.com/v1/links';
const apiKey = '148b584bcad4475a8b387e6e6297fc38';
const shortenUrl = ()=>{
    const data = JSON.stringify({destination: input.value});
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            renderShortenUrl(xhr.response);
            console.log(xhr.response);
        }
    }
    xhr.open('POST', rebrandlyUrl, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
}
const displayShortenUrl = event=>{
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}
submit.addEventListener('click', displaySuggestions);
shorten.addEventListener('click', displayShortenUrl);