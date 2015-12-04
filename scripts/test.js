var source   = $('#entry-template').html();
var template = Handlebars.compile(source);
var sampleData = {
  title: 'The Title',
  category: 'Something Weird',
  author: 'Seth Moore',
  authorUrl: 'http://www.google.com',
  daysAgo: '30',
  body: '<p>Blah Blah Blah<p>'
};
var html = template(sampleData);
$('.test').html(html);
