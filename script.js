// Управление окнами
document.querySelectorAll('.windows-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.windows-window').style.display = 'none';
    });
});

document.querySelectorAll('.windows-minimize').forEach(button => {
    button.addEventListener('click', () => {
        const windowContent = button.closest('.windows-window').querySelector('.windows-window-content');
        windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.windows-maximize').forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.windows-window');
        window.style.width = window.style.width === '90%' ? '300px' : '90%';
    });
});

// Фоновая музыка
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.3; // Уменьшаем громкость
backgroundMusic.play().catch(error => {
    console.error('Ошибка воспроизведения аудио:', error);
});