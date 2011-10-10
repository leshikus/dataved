function esc(str) {
  if (str && str.replace) return str.replace(/>/g, '&gt;').replace(/</g, '&lt;');
  return str;
}

function trim(str) {
  return str.replace(/\s*$/, '').replace(/^\s*/, '');
}

function clean_tree(o, must_clean) {
  var c = o.children
  
  if (c) {
    var i
    for (i = 0; i < c.length; i++) clean_tree(c[i], true)
  }
  if (must_clean) clean_object(o)
}

function monitor() {
  var content = doc.body.innerHTML;
  if (content.match(/^\s*$/) || doc.designMode != 'on') return;

  var e = doc.getElementById('cleanit-spandots');
  if (e) {
    e.innerHTML += '.';
    if (e.innerHTML.length > 3) e.innerHTML = '';
    doc.execCommand('selectall', false, null);
    return;
  }

  if (content == result) {
    doc.execCommand('selectall', false, null);
    doc.execCommand('copy', false, null);
    return;
  }

  doc.designMode = 'off';
  result = '<pre>' + esc(clean_tree(doc.body)) + '</pre>';
  //result = '<pre>' + esc(doc.body.innerHTML) + '</pre>'; // used to check the initial HTML
  doc.body.innerHTML = result;
}

function clean_onload(iframe, allowed_tags) {
  var win = iframe.contentWindow

  // Globals
  doc = win.document
  result = ''
  attr = new Array()

  var allowed_tags = allowed_tags.innerHTML
  var re_tag = /&lt;(\w+(?:\s+\w+)*)&gt;/g
  var element
  while ((element = re_tag.exec(allowed_tags)) != null) {
    element = element[1].split(/\s+/)
    var tag = element.shift()
    attr[tag] = element
  }

  doc.open()
  spandots = '<span id="cleanit-spandots"></span>'
  doc.write('<html><head><meta http-equiv="Content-type" content="text/html; charset=utf-8"></head>'
    + '<body>Чтобы очистить текст в HTML от лишних тэгов и атрибутов, cкопируйте его в эту форму'
    + spandots + '</body></html>')
  doc.close()
  doc.designMode = 'on'

  setInterval(monitor, 1000);
}

//-------------
// хорошие теги

goodTags0=["a","p","br","strong","b","em","i","tt","code","pre","ul","ol","li","img","table","tbody","thead","tfoot","caption","tr","td","th","col","colgroup","h1","h2","h3","h4","h5","h6","small","big","sub","sup","div"]


// inline теги, которые удалять, если они пустые внутри

emptyInlineTags0=["strong","b","em","i","tt","code","small","big","sub","sup","span"];

// block теги, которые удалять, если они пустые внутри

emptyBlockTags0=["p","strong","pre","div"];


// теги, которые canHaveHTML() и могут быть пустыми.

canEmptyTags0=["td","th"]


goodAttributes0=[]

// хорошие атрибуты (допустимы у всех тегов)

goodAttributes0[""] = ["href", "target", "name", "title", "alt", "src", "id", "bgColor", "color"]


// дополнительные допустимые атрибуты для отдельных тегов

goodAttributes0["img"] = ["width", "height", "border", "align"]

goodAttributes0["table"] = ["cellSpacing", "cellPadding", "border", "width %"] // width % - на будущее - сделаю, чтоб только процентные меры принимать, остальные посылать...

goodAttributes0["td"] = ["colSpan", "rowSpan"]

goodAttributes0["tr td col colgroup"] = ["noWrap", "align", "vAlign", "width %"]

goodAttributes0["a area"] = ["href", "name"]

goodAttributes0["br"] = ["clear"]


// однозначно убиваемые псевдо-атрибуты (отсутствуют в коллекции attributes)

mustDieAttributes=["x:str","x:num","x:fmla"] // внимание - в 6-ом MSIE убийство несуществующих атрибутов у тега TABLE ведет к краху браузера


// хорошие классы (не убиваем)

goodClasses0=["important","noindent","note","h1","h2","h3","h4","h5","h6"]


goodTags=[]

for(i in goodTags0){

 goodTags[goodTags0[i]]=true

}

canEmptyTags=[]

for(i in canEmptyTags0){

 canEmptyTags[canEmptyTags0[i]]=true

}


emptyInlineTags=[]

for(i in emptyInlineTags0){

 emptyInlineTags[emptyInlineTags0[i]]=true

}

emptyBlockTags=[]

for(i in emptyBlockTags0){

 emptyBlockTags[emptyBlockTags0[i]]=true

}


goodAttributes=[]

for(i in goodAttributes0){

 var splitted=i.split(" ")

 for(ii in splitted){

  if(!goodAttributes[splitted[ii]]) goodAttributes[splitted[ii]]=[]  

  for(j in goodAttributes0[i]){

   goodAttributes[splitted[ii]][goodAttributes0[i][j]]=true

  }  

 }

}


goodClasses=[]

for(i in goodClasses0){

 goodClasses[goodClasses0[i]]=true

}

function clean_object(o) {

 var s=""

 var myAttributes=[]

 var i

 
if (o.outerHTML != null)
{

 if(o.outerHTML.substr(0,2)=="<?"){

  o.removeNode(false)

  //o.parentNode.replaceChild(o.firstChild, o)

  return

 }
}
 var tag=o.tagName.toLowerCase()


 // удаляем пустые строчные теги

 


 // удаляем плохие, заказные и пустые теги

 if(!goodTags[tag] || (self.clean_a && tag=="a") ||

  (self.clean_img && tag=="img") ||

  (o.canHaveHTML && o.innerHTML=="" && !canEmptyTags[tag])

 ){

  try{

   o.removeNode(false)

  // o.parentNode.replaceChild(o.firstChild, o)

  }catch(e){

   return

  }

 }


//emptyInlineTags


 // удаляем пустые инлайны

 if(self.clean_emptytags && emptyInlineTags[tag] && o.innerHTML==''){

  o.removeNode(true)

  return

 }

 // удаляем пустые блоки

 if(self.clean_emptytags && emptyBlockTags[tag] && (o.innerHTML=='&nbsp;' || o.innerHTML=='')){

  o.removeNode(true)

  return

 }


 var a=o.attributes

 if(!a) return


 for(i in a){ // хм...

  if(""+a[i]!="null"){ // странно, но просто if(a[i]) не прокатывает

   myAttributes[i]=a[i]

  }

 }

 // киляем плохие атрибуты и плохие классы

 for(i in myAttributes){

  //i=i.toLowerCase()

  if( 

   (

    !goodAttributes[""][i] &&

    (

     !goodAttributes[tag] || !goodAttributes[tag][i] || i=="class" || i=="className"

    )

   )

   ||

   (

    self.clean_colors &&

    (

     i=="bgColor" || i=="color"

    )

   )

   ||

   (

    self.clean_aligns &&

    (

     i=="align" || i=="vAlign"

    )

   )

  ){

   

   if(i=="class"){

    i="className"

   }

   if(i!="className" || !goodClasses[o.className]){

    o.removeAttribute(i)

   }

  } 

 }

 // в 6-ом MSIE не киляем непонятных атрибутов у таблиц. см. выше.

 if(o.tagName.toLowerCase()!="table"){

  for(i in mustDieAttributes){

   o.removeAttribute(mustDieAttributes[i])

  }

 }

 o.style.cssText=""

}



