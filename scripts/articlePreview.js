// $('#articles').html(marked('I am using __markdown__.'));

$('#article-body').keypress(function(){
  var $articlePreview = $('#article-body').val();
  $('#articles').html(marked($articlePreview));
});
