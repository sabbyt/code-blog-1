var authorArray = [];
var categoryArray = [];

Articles.prototype.searchArticles = function() {
  var artAuth = this.author;
  var artCat = this.category;
  if ($.inArray(this.author, authorArray) === -1) {
    $('.artAuth').append('<option>' + this.author + '</option>');
    authorArray.push(artAuth);
  };
  if ($.inArray(this.category, categoryArray) === -1) {
    $('.artCat').append('<option>' + this.category + '</option>');
    categoryArray.push(artCat);
  };
};

blog.filterArticles = function() {
  $('.artAuth').change(function(){
    $('article').show();
    var authArray = $('article').toArray();
    for (var i = 0; i < authArray.length; i++ ) {
      if ($(authArray[i]).data('author') !== this.value ) {
        $(authArray[i]).hide();
      };
    };
  });
  $('.artCat').change(function(){
    $('article').show();
    var catArray = $('article').toArray();
    for (var i = 0; i < catArray.length; i++ ) {
      if ($(catArray[i]).data('category') !== this.value ) {
        $(catArray[i]).hide();
      };
    };
  });
};

blog.filterArticles();
