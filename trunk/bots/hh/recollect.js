// res =

var emailRe = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
var e, r = [];

console.log(res.length)

while (e = res.shift()) {
  if (result = emailRe.exec(e[4])) {
    e[2] = result[0];
	r.push(e);
  }
}

console.log(r.length)
JSON.stringify(r);
