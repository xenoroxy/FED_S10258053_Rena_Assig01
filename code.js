window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

/*button down*/
window.onscroll = function () {
    var height = $(window).height();
    var scrollTop = $(window).scrollTop();
    var obj = $('#scroll');
    var pos = obj.position();
    if (height + scrollTop < pos.top) {
       $('.button').fadeIn();
    }
    else {
       $('.button').fadeOut(); 
    }
}

/*product img*/
function hoverImage(imageId) {
   document.getElementById(imageId).src = imageId + '-hover.jpg';
}

function resetImage(imageId) {
   document.getElementById(imageId).src = imageId + '.jpeg';
}