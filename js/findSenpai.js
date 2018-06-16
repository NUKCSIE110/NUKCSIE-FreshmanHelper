var data = new XMLHttpRequest();
data.open('get', '../json/senior.json');


function find() {
    document.querySelector('.response').style.visibility = 'visible';
}
