function changecolor() {
    var container = document.getElementById('container');

    if (container.className === 'green') {
        container.className = 'red';
    } else {
        container.className = 'green';
    }
}

