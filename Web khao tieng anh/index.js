let addMemberButton = document.getElementById('add-member-button');
let row = document.getElementById("row");
let loginUrl = "http://localhost:4000/login/";
let logout = document.getElementById('log-out');
let editMemberButton = document.getElementById('edit-member-button');
let wait = document.getElementsByClassName("wait");
let username = '';

// ---------------initial webpage----------------------------------------------------
const setupUI = (user) => {
    if (user) {  
        // toggle user UI elements
        let user = firebase.auth().currentUser;
        useremail = user.email;
        if(user != null){
            //show information in dashboard
            db.collection(useremail).doc("init").get().then((doc) => {
                username = doc.data().username;
                document.getElementById("school-name").innerHTML = `Chào bạn ${username} <3<3`;

            });           
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
    logout.addEventListener("click", async function(){
        await firebase.auth().signOut();
    })
    renderCurrentMember(user);
    addMemberButton.addEventListener('click',function(event){
        event.preventDefault();
        addMemberDbByClickingButton(user);
    });
    editMemberButton.addEventListener("click", function(event){
        event.preventDefault();
        editImformationMemberDbByClickingButton(user);
    })
   
});

//Render current members
function renderCurrentMember(user){
    db.collection(user.email).get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
            if(doc.data().name) addingCardMem(doc.data(), user);
        })
    })
    
}


//Modify Card Render

function addingCardMem(data, user){
    let newCard = 
    `
        <!-- Card content -->
        <div class="card-body" id="btn-${data.id}" data-toggle="modal" data-target="#modalEditForm">
            <!-- Text -->
                <div class="word">${data.name}: </div> 
                <div class="mean">${data.major}</div>
        </div>`;
    //create new div container card
    let divContainerNewCard = document.createElement('div');
    divContainerNewCard.classList.add("card");
    divContainerNewCard.classList.add("col-sm-3");
    divContainerNewCard.innerHTML = newCard;
    row.appendChild(divContainerNewCard); 
    //create removing button
    let removeButton = document.createElement('button');
    removeButton.classList.add("remove-member");
    removeButton.classList.add(data.id);
    removeButton.innerText = "X";
    divContainerNewCard.insertBefore(removeButton, divContainerNewCard.firstChild);
    removeButton.addEventListener("click", function(event){
        if(confirm("Chắc xóa chứ?") == true)
        removeMemberDbByClickingButton(user, event);
    })
    //add event edit button
    let editButton = document.getElementById(`btn-${data.id}`);
        editButton.addEventListener("click", function(){
            showInfoToEditMember(user, data.id);
        })
    
}

// ----------------------------Modify Member on DB------------------------------------------------------------
function formValidation(formName){
    
    let major = document.forms[formName]["major"].value;
    let name = document.forms[formName]["name"].value;
    if (!name || !major ) {
      return false;
    }
    return true;
}
function clearInputField(){
    let name = document.getElementById("name");
    let major = document.getElementById("major");
    name.value = "";
    major.value = "";
}
function GenerateRandomId(){
    let max = 99;
    let min = 10;
    return `${Date.now()%10000}${Math.floor(Math.random()*(max-min)+min)}`;
}
function uploadInforMem(user, dataInput){
    return db.collection(user.email).doc(dataInput.id).set({
        name : dataInput.name,
        major: dataInput.major,
        id: dataInput.id
    })
}

function addMemberDbByClickingButton(user){
    //kiểm tra điền thông tin đầy đủ
    let checkValidation = formValidation("add-mem-form");
    if(checkValidation){
        //upload vào cloudinary trước
        wait[0].style.display = "block";
        
        let name = document.getElementById("name");
        let major = document.getElementById("major");
        let id = GenerateRandomId();
        let dataInput = {
            id: id,
            name: name.value,
            major: major.value,
        }
        uploadInforMem(user, dataInput)
        .then(function(){
            console.log("Okie đã thêm!");
            //clear input field
            clearInputField();
            row.innerHTML = '';
            renderCurrentMember(user);
            wait[0].style.display = "none";
            window.alert("Okie đã thêm!");
        })
        .catch(function(err){
            console.log(err);
            wait[0].style.display = "none";
            window.alert("Lỗi rồi :(((")
        });
    }
    else {
        window.alert("Điền đầy đủ nhaa bạn :v");
    }
}



//Removing Member
function removeMemberDbByClickingButton(user, event){
    let documentId = event.currentTarget.classList[1];
    db.collection(user.email).doc(documentId).delete().then(function() {
        console.log("Xóa thành công!");
        window.alert("Xóa mất tiêu hêy!");
        row.innerHTML = '';
        renderCurrentMember(user);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
        window.alert("Lỗi roy thử lại xem nèo...");
    });
}
//edit member
function showInfoToEditMember(user, docId){
    let name = document.getElementById("edit-name");
    let major = document.getElementById("edit-major");
    let id = document.getElementById("edit-id");

    db.collection(user.email).doc(docId).get().then((doc)=>{
        name.value = doc.data().name;
        major.value = doc.data().major;
        id.value = doc.data().id;
    })
}
function editImformationMemberDbByClickingButton(user){
    let name = document.getElementById("edit-name");
    let major = document.getElementById("edit-major");
    let id = document.getElementById("edit-id");
    let checkValidation = formValidation("edit-mem-form");
    if(checkValidation){
        wait[1].style.display = "block";
        db.collection(user.email).doc(id.value).set({
                name: name.value,
                major: major.value,
                id: id.value,
            })
            .then(function() {
                console.log("Edit Document successfully updated!");
                row.innerHTML = '';
                renderCurrentMember(user);
                wait[1].style.display = "none";
                window.alert("Sửa rồi nghen ^^!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                wait[1].style.display = "none";
                window.alert("Lỗi roài thử lại xem nàoo")
                console.error("Error updating document: ", error);
            });

        }
        else {
            window.alert("Nhớ điền đủ nha");
        }
       
}



//------------------------------ Responsive---------------------------------------------------------------------
