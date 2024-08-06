const botToken = '6985574089:AAGtQvjXfr-Z6Uvg49nPicTev1Q9a8yh4cA';
const chatId = '6108763026';

function sendComplaint() {
    const complaintText = document.getElementById('complaint').value;
    const responseDiv = document.getElementById('response');

    if (complaintText.trim() === '') {
        responseDiv.textContent = 'Shikoyat matni bo\'sh bo\'lmasligi kerak!';
        responseDiv.style.color = 'red';
        return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: `Shikoyat: ${complaintText}`,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            responseDiv.textContent = 'Shikoyat yuborildi!';
            responseDiv.style.color = 'green';
            document.getElementById('complaint').value = '';
        } else {
            responseDiv.textContent = 'Xatolik yuz berdi!';
            responseDiv.style.color = 'red';
        }
    })
    .catch(error => {
        responseDiv.textContent = 'Xatolik yuz berdi!';
        responseDiv.style.color = 'red';
    });
}
