// component-window-cookie
// ---------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function () {
    const formCookie = document.getElementById('component-window-cookie');
    const status = window.localStorage.getItem('status-accept-cookie');
    if (!status) {
        formCookie.classList.remove('component-window-cookie--not-active');
    }
    formCookie.addEventListener('submit', function (event) {
        event.preventDefault();
        window.localStorage.setItem('status-accept-cookie', 'ok');
        formCookie.classList.add('component-window-cookie--not-active');
    });
});