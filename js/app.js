const tg = window.Telegram.WebApp;

// Настройка кнопки внутри самого Telegram (внизу экрана)
tg.MainButton.setText("Заказать накрутку");
tg.MainButton.show();

tg.onEvent('mainButtonClicked', function() {
    const data = {
        link: document.getElementById('link').value,
        count: document.getElementById('count').value
    };
    tg.sendData(JSON.stringify(data));
});
