document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(function (link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    document.querySelectorAll('a[href="mailto:info@meslimited.com"]').forEach(function (link) {
        link.href = 'mailto:aksina2012@gmail.com';
        link.textContent = 'Aksina2012@gmail.com';
    });
    document.querySelectorAll('a[href="https://wa.me/2340000000000"]').forEach(function (link) {
        link.href = 'https://wa.me/2348050501375';
    });
});
