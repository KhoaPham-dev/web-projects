const renderWordResponse = (res)=>{
    let wordList = '';
    console.log(res);
    for(let i = 0; i < Math.min(res.length, 10); i++){
        wordList += `<li>${res[i].word}</li>`;
    }
    responseField.innerHTML = `<ol> ${wordList} </ol>`;
}
const renderShortenUrl=(res)=>{
    if(!res){
        responseField.innerHTML = "Invalid Url!";
    }
    responseField.innerHTML = `<p> ${res.shortUrl} </p>`;
}