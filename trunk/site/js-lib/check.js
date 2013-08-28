var _MASK = 18071973; // this is my birthday

function checkProblem(form, result) {
  if (form.elements[0].value ^ result == _MASK) {
	document.getElementById('hidden').style.display = 'block';
  } else {
	alert('sorry, incorrect');
  }
  return false;
}
