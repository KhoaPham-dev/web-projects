let form = document.getElementById("form");
function displayResponse(res){
    if(!res){
        responseField.innerText = "ID doesn't exist!";
    }
    else {
        res = JSON.parse(res);
        responseField.innerText = "Checking in successfully!";
        let infor=
        `Tên:   ${res["Họ và tên"]}<br>
        MSSV:   ${res["MSSV"]}<br>
        SĐT:    ${res["Số điện thoại"]}<br>
        <img src="${res["Avatar"]}">`;
        displayInformationField.innerHTML = `<ul>${infor}</ul>`;
    }
    form.reset();
    console.log(res);
}