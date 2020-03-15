let useremail="";
let loginUrl = "http://localhost:4000/login/";
let point = 0;
let numberOfQuestions = 0;
let numRan = 0;
const setupUI = (user) => {
    if (user) {  
        // toggle user UI elements
        let user = firebase.auth().currentUser;
        useremail = user.email;
        if(user != null){
            
                    
        }
        else window.location.href = loginUrl;
    }
    else {
    // redirect to login page
    window.location.href = loginUrl;
    }
};
// Show School's name
firebase.auth().onAuthStateChanged(async function(user) {
    setupUI(user);
    //LOG OUT
   
   
});

function random(max){
    let min = 0;
    return Math.floor(Math.random()*(max-min)+min);
}
function getNumberOfWords(){
    let count = 0;
    return new Promise((resolve, reject)=>{
        db.collection(useremail).get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                count++;
            })
            resolve(count);
        })
    })
}
function showInfo(max){
    numberOfQuestions++;
    let numberOfQuestionsElement = document.getElementById("number-of-question");   
    numberOfQuestionsElement.innerHTML = `<strong class="text-uppercase">Câu ${numberOfQuestions}: </strong>`
    let question = document.getElementById("question");
    numRan = random(max);
    let count = 0;
    db.collection(useremail).get().then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
            if(count == numRan){
                question.innerHTML = doc.data().name;
            }
            count++;
        });
        
    })
}
function checkAnswer(answer){
    let count = 0;
    let flag = false;
    return new Promise(async(resolve, reject)=>{
        await db.collection(useremail).get().then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
            if(count == numRan){
                if(answer == doc.data().major) flag = true;
            }
            count++;
        });
    })
    resolve(flag);
})
}
document.getElementById("lookup").addEventListener("click", function(){
    let modal = document.getElementById("modalLookUp");
    modal.classList.add("show");
    modal.style.display = "block";
    modal.setAttribute("aria-modal", "true");
    modal.removeAttribute("aria-hidden");
    document.body.classList.add("modal-open");
    let fadeBackground = document.createElement("div");
    fadeBackground.classList.add("modal-backdrop");
    fadeBackground.classList.add("fade");
    fadeBackground.classList.add("show");
    fadeBackground.setAttribute("id", "fade-background");
    document.body.appendChild(fadeBackground);
        getNumberOfWords()
        .then(function(max){
            showInfo(max-1);
        })

})
document.getElementById("close-modal").addEventListener("click", function(){
    let modal = document.getElementById("modalLookUp");
    modal.classList.remove("show");
    modal.style.display = "none";
    modal.removeAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.getElementById("fade-background").remove();
})
document.getElementById("btn-submit").addEventListener("click", function(e){
    e.preventDefault();
    
    let answer = document.getElementById("answer");
        if(answer.value){
            checkAnswer(answer.value).then(function(res){
                if(res){
                    point++;
                    alert("dung roy");
                }
                else{
                    alert("sai nha");
                }
            })
            getNumberOfWords()
        .then(function(max){
            showInfo(max-1);
        })
        }
        else alert("Điền câu trả lời nào =.=");
})