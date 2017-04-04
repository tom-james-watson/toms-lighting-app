function setColor(color) {
    color = color.substr(1, 6);

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.0.163:5000?color=' + color, true);
    xhr.send();
}

function turnOff() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.0.163:5000/off', true);
    xhr.send();
}

export { setColor, turnOff };
