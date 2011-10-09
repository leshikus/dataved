alert('hrtr')

function esc(str) {
  if (str && str.replace) return str.replace(/>/g, '&gt;').replace(/</g, '&lt;');
  return str;
}

function trim(str) {
  return str.replace(/\s*$/, '').replace(/^\s*/, '');
}

function cleanit(node) {
  var out = '';
  var n = node.childNodes;

  for (var i = 0; i < n.length; i++) {
    switch (n[i].nodeType) {
      case node.ELEMENT_NODE:
        var tag = node.tagName.toLowerCase();
//alert(tag);
        var a = attr[tag];
//alert(a);
        if (!a) {
          // remove tag
          out += cleanit(n[i]);
          break;
        }

        if (!n[i].hasChildNodes()) {
          out += '<' + tag + '/>';
          break;
        }

        var content = '<' + tag + '>' + trim(cleanit(n[i])) + '</' + tag + '>';

        if (node.style.display = 'block')
          content = '\n' + content + '\n';

        out += content;
        break;

      case node.TEXT_NODE:
        out += n[i].textContent.replace(/\s+/g, ' ');
        break;

      case node.COMMENT_NODE:
        // skip comments
        break;

      default:
        out += "#" + n[i].nodeType + ": " + esc(n[i]) + '\n';
        break;
    }
  }
  return out;
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
  //alert("pasted");
  //var preclean = trim(cleanit(doc.body));
  //alert(preclean);
  //var sekondClean = clean();
  //alert(sekondClean);
  //alert(doc.body.innerHTML);
  //result = '<pre>' + trim(cleanit(doc.body)) + '</pre>';
  result = '<pre>' + trim(esc(doc.body.innerHTML)) + '</pre>'; // used to check the initial HTML
  doc.body.innerHTML = result;
//  clean();
//  doc.designMode = 'on';
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
    + '<body>Чтобы перевести текст в HTML без лишних тэгов и атрибутов, cкопируйте текст в эту форму'
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

function cleanObject(o){

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



function cleanTree(o,mustClean){

 var c=o.children
//var c=o.childNodes
 var i

 if(c){

  for(i=c.length-1;i>=0;i--){

   cleanTree(c[i],true)

  }

 }

 

 if(mustClean) cleanObject(o)

}


if(!self.editor) var editor=document.getElementById("editor")

if(!self.buffer) var buffer=document.getElementById("buffer")

if(!self.output) var output=document.getElementById("output")


function clean(){

 

 clean_emptytags=true; //document.getElementById("delete_emptytags").checked

 clean_a=true; //document.getElementById("delete_a").checked

 clean_img=true; //document.getElementById("delete_img").checked

 clean_colors=true; //document.getElementById("delete_colors").checked

 clean_aligns=true; //document.getElementById("delete_aligns").checked

 

 if(editor.innerHTML==""){

  buffer.innerHTML=output.value

 }else{

  buffer.innerHTML=editor.innerHTML

 }
buffer.innerHTML = doc.body.innerHTML;
 cleanTree(doc.body,false)

 

 if(buffer.innerHTML.substr(0,6)=="&nbsp;"){

  buffer.innerHTML=buffer.innerHTML.substr(6)

 }

 

 editor.innerHTML=buffer.innerHTML

 viewSource()

}


function viewSource(){

 output.value=editor.innerHTML

}


function fromSource(){

 editor.innerHTML=output.value

}


function copyDocument(){

}


function copySource(){

}


function reset(){

 editor.innerHTML=""

 output.value=""
}