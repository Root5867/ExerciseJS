function checkprime(n) {
    // var n = document.getElementById("numberCheck").value;
    var flag = true;
    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    } else {
        for (var i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function print_number() {
    // Lấy number
    var number = document.getElementById("number").value;

    // Ép number sang kiểu INT
    number = parseInt(number);

    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++) {
        if (checkprime(i)) {
            html += i + ' <br/>';
        }
    }
    document.getElementById("result").innerHTML = html;
}