function myFunction(){
    let a = document.getElementsByClassName("toggle-element");
    for(let i = 0; i < a.length ; i++){
        a[i].classList.toggle('active');
    }
    console.log('a')
}