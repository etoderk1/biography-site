// Пример интерактивности (можно добавить больше функционала)
document.querySelectorAll('.windows-xp-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.windows-xp-window').style.display = 'none';
    });
});

document.querySelectorAll('.windows-xp-minimize').forEach(button => {
    button.addEventListener('click', () => {
        const windowContent = button.closest('.windows-xp-window').querySelector('.windows-xp-window-content');
        windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.windows-xp-maximize').forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.windows-xp-window');
        window.style.width = window.style.width === '90%' ? '300px' : '90%';
    });
});