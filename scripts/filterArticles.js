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
  $('select').change(function(){
    console.log(this.value);
  });
};

blog.filterArticles();
