// Обновление времени в панели macOS
function updateMacOSTime() {
    const timeElement = document.getElementById('macos-time');
    if (timeElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// Обновление времени каждую минуту
setInterval(updateMacOSTime, 60000);
updateMacOSTime(); // Инициализация времени сразу