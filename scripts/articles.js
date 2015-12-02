var Articles = function (props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.body = props.body;
};

// Articles.prototype.toHTML = function() {
//   return '<article>' +
//     '<h1>' + this.title + '</h1>' +
//     '<h3>By <a href="' + this.authorUrl + '">' + this.author + '</a> on ' + this.publishedOn + '</h3>' +
//     '<p>' + this.body + '</p>' +
//     '<h5>This article has been posted in the ' + this.category + ' category.</h5>' +
//     '</article>';
// };

// Articles.prototype.toHTML = function () {
//   $('#title').clone().html(this.title).appendTo('main');
//   $('#authorDate').clone().html('This article was written by ' + this.author + ' on ' + this.publishedOn).appendTo('main');
//   $('#bodyText').clone().html(this.body).appendTo('main');
//   $('#category').clone().html('This article was posted in the ' + this.category + ' category.').appendTo('main');
//   $('#authorUrl').clone().html('Learn more about the author: ' + this.authorUrl).appendTo('main');
// };

blog.sortRawData = function() {
  blog.rawData.sort(function(a, b) {
    if (a.publishedOn > b.publishedOn) {return -1;};
    if (a.publishedOn < b.publishedOn) {return 1;};
    return 0;
  });
};

// Articles.prototype.postDate = function() {
//   var dateMath = new Date() - this.publishedOn;
//   dateDiff = dateMath/1000/60/60/24;
// };

Articles.prototype.toHTML = function() {
  var dateMath = new Date() - new Date(this.publishedOn);
  var dateDiff = dateMath/1000/60/60/24;
  var $article = $('article:first-child').clone();
  $article.find('#title').html(this.title);
  $article.find('#authorDate').html('By <a href="' + this.authorUrl + '">' + this.author + '</a>, published about ' + Math.ceil(dateDiff) + ' days ago.');
  $article.find('#bodyText').html(this.body + '<a href="#" class="read-on">Read On</a>');
  $article.find('#category').html('Category(s): <a href="#">' + this.category + '</a>');
  return $article;
};

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
