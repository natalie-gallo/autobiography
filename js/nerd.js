window.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('nextBtn');
    const revealButtons = Array.from(document.querySelectorAll('.reveal-btn'));

    function checkReveal() {
        const total = revealButtons.length;
        const done = revealButtons.filter(b => b.disabled).length;
        if (total > 0 && done === total) {
            nextButton.style.visibility = 'visible';
        }
    }

    revealButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = btn.dataset.name || 'Revealed';
            btn.disabled = true;
            checkReveal();
        });
    });
});