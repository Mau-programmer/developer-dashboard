let timeText = document.getElementById('time')
setInterval(() => {
    let date = new Date();
    let dateString = date.toTimeString();
    let dateArr = dateString.split(" ");
    timeText.innerText = dateArr[0];
}, 1000);