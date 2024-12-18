document.addEventListener('DOMContentLoaded', () => {
    const shortcuts = document.querySelectorAll('.shortcut-item');

    shortcuts.forEach(shortcut => {
        const prevBtn = shortcut.querySelector('.prev');
        const nextBtn = shortcut.querySelector('.next');
        const link = shortcut.querySelector('a').getAttribute('href');

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link;
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = link;
        });
    });
});