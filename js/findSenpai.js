var list;
var data = new XMLHttpRequest();
data.open('get', 'http://code.csie.nuk.edu.tw/freshman/json/senior.json');
data.send();
data.onload = function () {
    list = JSON.parse(data.responseText);
}
function find() {
    let found = false;
    for (let i = 0; i < list.length; i++){
        let freshman = document.querySelector('#user').value.substr(6);
        if (list[i].schoolid.substr(6) == freshman) {
            document.querySelector('.response div h3').textContent = list[i].name ;
            document.querySelector('.response div a').href = list[i].facebookurl;
            document.querySelector('.response div a').textContent = list[i].facebookurl;
            document.querySelector('.response').style.visibility = 'visible';
            found = true;
            break;
        }
        if (!found) {
            document.querySelector('.response div h3').textContent = '找不到' ;
            document.querySelector('.response div a').href = '/404.html';
            document.querySelector('.response div a').textContent = '測試用學號 A1065501';
            document.querySelector('.response').style.visibility = 'visible';
        }
        //console.log(list[i].schoolid.substr(6));
    }
}
