let input = document.getElementById('input');
let enter = document.getElementById('button');
let ul = document.getElementById('items');
function lenInput(){
    return input.value.length;
}
function creatingAndRemovingElement(){
    //create li
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    //create button
    let buttonForRemoving = document.createElement('button');
    buttonForRemoving.appendChild(document.createTextNode('X'));
    //add button to li
    li.appendChild(buttonForRemoving);
    //add li to ul
    ul.appendChild(li); 
    
    //Re-initialize input
    input.value = "";
    //Removing Elements
    buttonForRemoving.addEventListener("click",function(){
            li.classList.add('delete');
        })
}
function addElementByClickingButton(){
    if(lenInput() > 0){
        input.focus();
        creatingAndRemovingElement();
    }
}
function addElementByPressingEnter(event){
    if(lenInput() > 0 && event.which === 13){
        input.focus();
        creatingAndRemovingElement();
    }
}
enter.addEventListener('click', addElementByClickingButton);
input.addEventListener('keyup', addElementByPressingEnter);