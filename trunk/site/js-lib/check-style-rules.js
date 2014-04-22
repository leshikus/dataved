var LOWER_CASE = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var UPPER_CASE = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

var MDASH_RE = new RegExp('[' + LOWER_CASE + ']\\s+[-]\\s+', 'g');
var AFTERDOT_RE = new RegExp('(,|[.])[' + LOWER_CASE + UPPER_CASE + ']', 'g');

var entityRe = /&[a-z#0-9]+;/g;

var rules = {
  mdash: function() {
    return getHtml().match(MDASH_RE);
  },
  afterdash: function() {
    return getHtml().match(/&mdash;[^\n &]/g);
  },
  dot: function() {
    return getHtml().match(/\s+(,|[.][^.][^.])/g);
  },
  captiondot: function() {
    return getHtml().match(/\.\s*<\/h\d>/g);
  },
  more: function() {
    return getHtml().cut(/<a name='more'><\/a>[\s\S]*/).match(/<p>.*<p>.*<p>/);
  },
  datavedurl: function() {
    return getHtml().match(/href=["']?https?:\/\/(www\.)?dataved.ru\//gi);
  },
  postblogpost: function() {
    return getHtml().match(/href=["']?\/\d+\/\d+\/blog-post(_\d+)?.html\1/g);
  },
  lspace: function() {
    return getText().match(/\s+(&raquo;|&nbsp;)/g);
  },
  semicolon: function() {
    return getText().cut(entityRe).match(/;[^ "<\n]/g);
  },
  afterdot: function() {
    return getText().match(AFTERDOT_RE);
  },
  quot: function() {
    return getText().match(/“”"/g);
  },
  minus: function() {
    return getText().match(/\s+-\d+\s+/g);
  },
  ndash: function() {
    return getText().match(/\s+\d+-\d+\s+/g);
  }
}
