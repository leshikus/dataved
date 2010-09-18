/* APL 2.0 */

blogger_scope = 'http://www.blogger.com/feeds/';
auth_button = document.getElementById('authButton');

function auth_lock() {}
function auth_unlock() {}

/**
 * Manages auth process.
 */
function auth() {
  auth_button.value = 'Авторизоваться';
  auth_button.onclick = function() {
    token = google.accounts.user.login(blogger_scope);
  }

  if (!google.accounts.user.checkLogin(blogger_scope))
    return;

  auth_unlock();  
  auth_button.value = 'Выйти';
  auth_button.onclick = function() {
    auth_lock();
    google.accounts.user.logout(auth);
  }

  postComment();
}
