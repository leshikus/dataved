var _MASK = 18071973; // this is my birthday

function checkProblem(form, result) {
  if (this.elements[0] ^ result == _MASK) {
    document.getElementById('hidden').style.display = 'block';
  } else {
    alert('sorry, incorrect');
  };
  return false;
}
