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
  });
};

$(function() {
  blog.dropDown();
  blog.tabNav();
});
