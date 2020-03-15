$(document).ready(() => {
    let font = $('#font').val();
    let weight = $('#weight').val();
    let size;
    $('#font').on('click',()=>{
      font = $('#font').val();
      $('.preview').css({
        fontFamily: font
        })
      change();
     })
    $('#weight').on('click',()=>{
      weight = $('#weight').val();
      $('.preview').css({
      fontWeight: weight
        })
      change();
    })
      $('#size').on('keyup',function(event){
      size = $(event.currentTarget).val();
      size += 'px';
      $('.preview').css({
      fontSize: size
        })
      change();
    })
    function change(){
       $('#text').css({
        fontFamily: font,
        fontWeight: weight,
        fontSize: size
               })
    }
    $('#text').keyup(function(event){
       $('#text').css({
        fontFamily: font,
        fontWeight: weight,
        fontSize: size
            })
           })
  })