/* APL 2.0 */

/**
 * Manages auth process. Requires a button element with id="actionButton".
 */
function auth() {
  var b = document.getElementById("authButton");

  b.value = 'Авторизоваться';
  b.onclick = function() {
    token = google.accounts.user.login(scope);
  }

  if (!google.accounts.user.checkLogin(scope))
    return;

  b.value = 'Выйти';
  b.onclick = function() {
    google.accounts.user.logout(auth);
  }

  postComment();
}
