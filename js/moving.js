window.addEventListener('DOMContentLoaded', () => {
    const girl = document.getElementById('girl-img');

    const step = 50;
    let current_position = 0;

    // get building positions
    const b1 = document.getElementById('building1-img');
    const b2 = document.getElementById('building2-img');

    const start = (b1.offsetLeft) + (b1.offsetWidth / 2) - (girl.offsetWidth / 2);
    const end = (b2.offsetWidth) * 2;

    current_position = start;
    girl.style.left = current_position + 'px';

    // get button element
    const nextButton = document.getElementById('nextBtn');

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && current_position <= end) {
            current_position = current_position + step;
            girl.style.left = current_position + 'px';
            if (current_position >= end) {
                alert("It was just down the block...");
                nextButton.style.visibility = 'visible';
            }
        }
    });
});