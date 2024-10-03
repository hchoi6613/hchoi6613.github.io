document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', function () {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progressHeight = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = progressHeight + '%';
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
    });
});