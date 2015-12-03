var Articles = function (props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

blog.sortRawData = function() {
  this.rawData.sort(function(a, b) {
    if (a.publishedOn > b.publishedOn) {return -1;};
    if (a.publishedOn < b.publishedOn) {return 1;};
    return 0;
  });
};

Articles.prototype.toHTML = function() {
  var dateMath = new Date() - new Date(this.publishedOn); //difference between today and the post
  var dateDiff = dateMath/1000/60/60/24; //converts milliseconds to days

  //clones the empty 'article' and populates it with data from blog.rawData
  var $article = $('article:first-child').clone().removeAttr('id').data('author', this.author).data('category', this.category);
  $article.find('#title').html(this.title).removeAttr('id');
  $article.find('#authorDate').data('author', this.author).html('By <a href="' + this.authorUrl + '">' + this.author + '</a><br/>Published about ' + Math.ceil(dateDiff) + ' days ago.').removeAttr('id');
  $article.find('#bodyText').html(this.body + '<a href="#" class="read-on">Read On</a>').removeAttr('id');
  $article.find('#category').data('category', this.category).html('Category(s): <a href="#">' + this.category + '</a>').removeAttr('id');
  return $article;//so we have an output to work with
};

//create a new article for each object in blog.rawData
blog.newArticleLoop = function() {
  for (var i = 0; i < blog.rawData.length; i += 1) {
    var newArticle = new Articles(blog.rawData[i]);
    $('main').append(newArticle.toHTML());
    newArticle.searchArticles();
  };
};

$(function() {
  blog.sortRawData();
  blog.newArticleLoop();
});
