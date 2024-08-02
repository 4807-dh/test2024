const sunTimes = {
    1: {sunrise: "4:27", sunset: "18:59"},
    2: {sunrise: "4:28", sunset: "18:59"},
    3: {sunrise: "4:28", sunset: "18:59"},
    4: {sunrise: "4:29", sunset: "18:59"},
    5: {sunrise: "4:29", sunset: "18:59"},
    6: {sunrise: "4:30", sunset: "18:59"},
    7: {sunrise: "4:30", sunset: "18:58"},
    8: {sunrise: "4:31", sunset: "18:58"},
    9: {sunrise: "4:32", sunset: "18:58"},
    10: {sunrise: "4:32", sunset: "18:57"},
    11: {sunrise: "4:33", sunset: "18:57"},
    12: {sunrise: "4:33", sunset: "18:57"},
    13: {sunrise: "4:34", sunset: "18:56"},
    14: {sunrise: "4:35", sunset: "18:56"},
    15: {sunrise: "4:35", sunset: "18:55"},
    16: {sunrise: "4:36", sunset: "18:55"},
    17: {sunrise: "4:37", sunset: "18:54"},
    18: {sunrise: "4:37", sunset: "18:54"},
    19: {sunrise: "4:38", sunset: "18:53"},
    20: {sunrise: "4:39", sunset: "18:53"},
    21: {sunrise: "4:39", sunset: "18:52"},
    22: {sunrise: "4:40", sunset: "18:52"},
    23: {sunrise: "4:41", sunset: "18:51"},
    24: {sunrise: "4:42", sunset: "18:50"},
    25: {sunrise: "4:42", sunset: "18:49"},
    26: {sunrise: "4:43", sunset: "18:49"},
    27: {sunrise: "4:44", sunset: "18:48"},
    28: {sunrise: "4:45", sunset: "18:47"},
    29: {sunrise: "4:45", sunset: "18:46"},
    30: {sunrise: "4:46", sunset: "18:45"},
    31: {sunrise: "4:47", sunset: "18:45"}
};

function showSunTimes() {
    const date = parseInt(document.getElementById('dateInput').value);
    const resultDiv = document.getElementById('result');
    
    if (sunTimes[date]) {
        const sunrise = sunTimes[date].sunrise;
        const sunset = sunTimes[date].sunset;
        resultDiv.innerHTML = `日の出: ${sunrise}<br>日の入り: ${sunset}`;
        showNotification(`2024年7月${date}日の日の出と日の入り`, `日の出: ${sunrise}\n日の入り: ${sunset}`);
    } else {
        resultDiv.innerHTML = "無効な日付です。1から31の範囲で入力してください。";
    }
}

function showNotification(title, message) {
    if (Notification.permission === "granted") {
        new Notification(title, { body: message });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, { body: message });
            }
        });
    }
}

// ページが読み込まれたときに通知の許可をリクエスト
document.addEventListener('DOMContentLoaded', (event) => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
});
