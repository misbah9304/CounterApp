var count = 0;

function clickme(action) {
    if (action === "less" && count > 0) {
        count -= 2;
    } else if (action === "more" && count < 10) {
        count += 2;
    }
    document.getElementById("num").innerHTML = count;
    document.getElementById("num").style.color = 'green';
    if (count === 0) {
        document.getElementById("num").style.color = 'red';
    } else if (count === 10) {
        document.getElementById("num").style.color = 'yellow';
    }
}


function resetme() {
    count = 0;
    document.getElementById("num").innerHTML = count;
    document.getElementById("num").style.color = 'red';
}