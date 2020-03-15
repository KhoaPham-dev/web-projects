$(document).ready(() => {
	$('.menu').hover(()=>{
    $('.nav-menu').show();
  }, ()=>{
    $('.nav-menu').hide();
  });
  $('.btn').on('mouseover',function(){
    $(this).addClass('btn-hover');
  }).on('mouseleave',function(){
    $(this).removeClass('btn-hover');
  });
  $('.postText').focus();
  let post;
  let remaining;
  let userName;
  $('.postText').on('keyup',function(event){
   	post = $(event.currentTarget).val();
    remaining = 140 - post.length;
    $('.characters').html(remaining);
    if(remaining <= 0){
      $('.wordcount').addClass('red');
    }
    else{$('.wordcount').removeClass('red')}
  });
  $('.btn-post').on('click',function(){
      if(remaining >0 && remaining < 140){
        let avatar = $('#user').attr('src');
        $('.posts .container').append(
        `<div class="post"><img class="avatar" src="${avatar}"><h3>${userName}</h3><p>${post}</p><button class="btn">+1</button></div>`
        )
      }
  });
  
  $('.name input').on('keyup',function(event){
    userName = $(event.currentTarget).val();

  })
});
