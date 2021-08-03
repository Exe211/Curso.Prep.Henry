var btnOpenPopup = document.getElementById('btnOpen'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnClosePopup = document.getElementById('btnClose');

btnOpenPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnClosePopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});