var Articles = function (props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.publishedOn = props.publishedOn;
  this.daysAgo = props.daysAgo;
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
  this.daysAgo = Math.ceil(dateDiff);

  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

//create a new article for each object in blog.rawData
blog.newArticleLoop = function() {
  for (var i = 0; i < blog.rawData.length; i += 1) {
    var newArticle = new Articles(this.rawData[i]);
    $('main').append(newArticle.toHTML());
    newArticle.searchArticles();
  };
};
