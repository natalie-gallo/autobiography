window.addEventListener('DOMContentLoaded', async () => {
    const audio = document.getElementById('page-audio');
    const playBtn = document.getElementById('audio-play-btn');
    if (!audio) return;

    try {
        await audio.play();
    } catch (err) {
        // Autoplay blocked — show a small play button
        playBtn.style.display = 'inline-block';
        playBtn.addEventListener('click', () => {
            audio.play();
            playBtn.style.display = 'none';
        });
    }
});