// information to reach API 
const apiKey = '148b584bcad4475a8b387e6e6297fc38'; 
const url = 'https://api.rebrandly.com/v1/links'; 
// Some page elements 
const inputField = document.querySelector('#input'); const shortenButton = document.querySelector('#shorten'); const responseField = document.querySelector('#responseField'); 
// AJAX functions 
// Code goes here 
const shortenUrl = async ()=>{ 
  try{ 
    const urlToShorten = inputField.value; 
    const response = await fetch(url, { 
      method: "POST", 
      body: JSON.stringify({ destination: urlToShorten }), 
      headers:{ "Content-type": "application/json", 
               apikey: apiKey
              } 
    }) 
    if(response.ok){ 
      const jsonResponse = await response.json(); 
      renderResponse(jsonResponse); 
      return; 
    } 
    throw new Error("Request failed!"); }catch(error){ console.log(error); } } 
// Clear page and call AJAX functions 
const displayShortUrl = (event) => { event.preventDefault(); while(responseField.firstChild){ responseField.removeChild(responseField.firstChild); } 
                                    shortenUrl(); } 
                                    shortenButton.addEventListener('click', displayShortUrl);