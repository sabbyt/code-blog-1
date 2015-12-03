var authorArray = [];
var categoryArray = [];

Articles.prototype.searchArticles = function() {
  if ($.inArray(this.author, authorArray) === -1) {
    $('.artAuth').append('<option>' + this.author + '</option>');
    authorArray.push(this.author);
  };
  if ($.inArray(this.category, categoryArray) === -1) {
    $('.artCat').append('<option>' + this.category + '</option>');
    categoryArray.push(this.category);
  };
};

blog.filterArticles = function() {
  $('.artAuth').change(function(){
    $('.artCat').find('option:first').attr('selected', 'selected');
    $('article:not(:first)').show();
    if (this.value !== 'none') {
      var authArray = $('article').toArray();
      for (var i = 0; i < authArray.length; i++ ) {
        if ($(authArray[i]).data('author') !== this.value ) {
          $(authArray[i]).hide();
        };
      };
    };
    if ($('.burger').css('display') !== 'none') {
      $('nav').slideUp(100);
    };
  });

  $('.artCat').change(function(){
    $('.artAuth').find('option:first').attr('selected', 'selected');
    $('article:not(:first)').show();
    if (this.value !== 'none') {
      var catArray = $('article').toArray();
      for (var i = 0; i < catArray.length; i++ ) {
        if ($(catArray[i]).data('category') !== this.value ) {
          $(catArray[i]).hide();
        };
      };
    };
    if ($('.burger').css('display') !== 'none') {
      $('nav').slideUp(100);
    };
  });
};

//.postCategor:not(:contains())

blog.filterArticles();
