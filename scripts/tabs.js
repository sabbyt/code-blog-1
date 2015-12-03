blog.dropDown = function() {
  $('.hamburger').on('click', function() {
    $('nav').toggle(100);
  });
};

blog.tabNav = function() {
  $('.tab').on('click', function(){
    $('section').removeClass('active');
    var $tabIndex = $(this).index();
    $('.mainBody').find('section:nth-child(' + ($tabIndex + 1) + ')').addClass('active');
    if ($('.burger').css('display') !== 'none') {
      $('nav').slideUp(100);
    };
  });
};

blog.resized = function() {
  $(window).resize(function() {
    if (window.innerWidth >= 600) {
      $('nav.navigation').css('display', 'block');
    };
    if (window.innerWidth <= 600) {
      $('nav.navigation').css('display', 'none');
    };
  });
};

$(function() {
  blog.dropDown();
  blog.tabNav();
  blog.resized();
});
