let displayInformationField = document.getElementById('information-field');
let form = document.getElementById("form");
let buttonGetQrcode = document.getElementById('get-qrcode');
const url = 'http://localhost:3000/editStatus'; 
const urlGetQrCode = 'http://localhost:3000/getQrCode' //and insert ID if it doesn't exist
// Some page elements 
const responseField = document.querySelector('#status'); 
// AJAX functions 
const checkingIn = (id)=>{
    const idInputValue = id; 
    const diemDanhInputValue = '1';
    const data = JSON.stringify({id: idInputValue, 
                                status: diemDanhInputValue });
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            displayResponse(xhr.response);
            
        }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);
}
const getQrcode = ()=>{
    console.log("execute!");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', urlGetQrCode, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();
}

buttonGetQrcode.addEventListener('click', getQrcode);