// res = 
var out = [];


function isEnglish(name) {
  return name.replace(/[a-zA-Z\s]*/g, '') == '';
}

var e, eng = [], rus = [], r = [];

console.log(res.length);

while (e = res.shift()) (isEnglish(e[1]) ? eng : rus).push(e);

while (e = rus.shift()) {
  if (!out[e[2]]) r.push(e);
  out[e[2]] = 1;
}

while (e = eng.shift()) {
  if (!out[e[2]]) r.push(e);
  out[e[2]] = 1;
}

console.log(r.length);
JSON.stringify(r);
