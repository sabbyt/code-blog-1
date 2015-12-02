blog.minimizeArticles = function() {
  $('main p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').show(); //.fadeIn();
    $(this).hide();
  });
};

$(function(){
  blog.minimizeArticles();
});
