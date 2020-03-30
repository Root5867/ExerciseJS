var gio = null;
var phut = null;
var giay = null;
var timeout = null;

function start() {
    if (gio == null) {
        gio = parseInt(document.getElementById('h_val').value);
        phut = parseInt(document.getElementById('m_val').value);
        giay = parseInt(document.getElementById('s_val').value);

    }
    if (giay == -1) {
        phut -= 1;
        giay = 59;
    }
    if (phut == -1) {
        gio -= 1;
        phut = 59;
    }
    if (gio == -1) {
        clearTimeout(timeout);
        alert('Hết giờ');
        return false;
    }

    document.getElementById('h').innerText = gio.toString();
    document.getElementById('m').innerText = phut.toString();
    document.getElementById('s').innerText = giay.toString();

    timeout = setTimeout(() => {
        giay--;
        start();
    }, 1000);
}

function stop() {
    clearTimeout(timeout);
}