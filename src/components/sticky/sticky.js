const sticky = document.querySelector("[data-sticky]");

if(sticky){
    window.onscroll = function() {myFunction()};

    var stickystart = sticky.getBoundingClientRect().top;
    
    function myFunction() {
      if (window.pageYOffset >= stickystart) {
        sticky.classList.add("sticky")
      } else {
        sticky.classList.remove("sticky");
      }
    }
}
