/* To Disable Inspect and Right-Menu Element */
$(document).addEventListener('contextmenu',(e)=>{
    e.preventDefault();
  }
  );
$(document).onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

$(".scroll").click(function(event){
   event.preventDefault();
   //calculate destination place
   var dest=0;
   if($(this.hash).offset().top > $(document).height()-$(window).height()){
        dest=$(document).height()-$(window).height();
   }else{
        dest=$(this.hash).offset().top;
   }
   //go to destination
   $('html,body').animate({scrollTop:dest}, 1500,'swing');
});
