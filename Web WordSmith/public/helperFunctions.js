function renderWordResponse(res){
    let wordList = '';
    let limitNumResult = Math.min(res.length, 10);
    for(let i = 0; i < limitNumResult; i++){
        wordList+='<li>' + res[i]["word"] + '</li>';
    }
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`; 
}
function renderShortenUrl(res){
    if(!res.errors)
        {responseField.innerHTML = `<text>${res.shortUrl}</text>`;}
    else {responseField.innerHTML = `<p>${res.errors[0].message}</p>`;}
}
