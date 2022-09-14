function megjelenito(elem, nezet) {
    let elemlek = document.getElementsByTagName(elem);
    for (let i = 0; i < elemlek.length; i++) {
        elemlek[i].style.display = 'none';
    }

    document.getElementById(nezet).style.display = 'block';
}