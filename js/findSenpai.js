var list;
let re = /(a|A{1})(10655|10755{1})([0-9]{2})/;
var data = new XMLHttpRequest();
data.open('get', 'https://freshman.csie.nuk.edu.tw/json/senior.json');
data.send();
data.onload = function() {
  list = JSON.parse(data.responseText);
}
function find() {
  let found = false;
  let id = document.querySelector('#user').value;
  let freshman = document.querySelector('#user').value.substr(6);
  let year = document.querySelector('#user').value[3];
  if (re.test(id)) {
    for (let i = 0; i < list.length; i++) {
      if (year == 6 && list[i].schoolid == 'A10755' + freshman) {
        document.querySelector('.response div h3').textContent = list[i].senior;
        document.querySelector('.response').style.visibility = 'visible';
        found = true;
        break;
      }
      if (year == 7 && list[i].schoolid == 'A10655' + freshman) {
        document.querySelector('.response div h3').textContent = list[i].name;
        document.querySelector('.response').style.visibility = 'visible';
        found = true;
        break;
      }
      // console.log(list[i].schoolid.substr(6));
    }
  }
  else {
      alert('輸入資料有誤!')
  }
  if (!found) {
    document.querySelector('.response div h3').textContent =
        '找不到直屬，請洽系學會';
    document.querySelector('.response').style.visibility = 'visible';
  }
}
