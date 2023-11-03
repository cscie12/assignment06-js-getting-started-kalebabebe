document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const btn = document.getElementById('btn-mode');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
    });
});
