var meal = [
    {
        'name': '美而美',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=811%E5%8F%B0%E7%81%A3%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%A4%A7%E5%AD%B8%E5%85%AD%E5%8D%81%E8%A1%97%20%E7%BE%8E%E8%80%8C%E7%BE%8E&key=AIzaSyCKt0aH7pnNpnAEbZLM6p23y7ZcGcrDiUg" allowfullscreen></iframe>'
    },
    {
        'name': '臻品營養飯糰',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVV01pRUPbjQRVSqgDWo8ShM&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '三郎(月底好夥伴)',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%E4%B8%89%E9%83%8E%09811%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%A4%A7%E5%AD%B8%E8%A5%BF%E8%B7%AF&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '後昌自助餐(唯一信仰)',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-zUmqwwPbjQRSfnTRvTwUgw&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '丹丹漢堡-右昌店',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%E4%B8%B9%E4%B8%B9%E6%BC%A2%E5%A0%A1-%E5%8F%B3%E6%98%8C%E5%BA%97%20%09811%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E5%8F%B3%E6%98%8C%E8%A1%97255%E8%99%9F&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '仙女鮮魚湯',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%E4%BB%99%E5%A5%B3%E9%AE%AE%E9%AD%9A%E6%B9%AF%20%09811%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E8%BB%8D%E6%A0%A1%E8%B7%AF1013%E8%99%9F&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '軍校四海豆漿',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%20%E8%BB%8D%E6%A0%A1%E5%9B%9B%E6%B5%B7%E8%B1%86%E6%BC%BF%20%09811%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E8%90%AC%E6%98%8C%E8%A1%9751-53%E8%99%9F&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '鮮茶道',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=%E9%AE%AE%E8%8C%B6%E9%81%93%20%09811%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E9%AB%98%E9%9B%84%E5%B8%82%E6%A5%A0%E6%A2%93%E5%8D%80%E8%97%8D%E6%98%8C%E8%B7%AF398%E4%B9%8B16%E8%99%9F&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    },
    {
        'name': '吳家紅茶冰',
        'map': '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJNS7EWAsPbjQRmzNnTC3oZEs&key=AIzaSyCdH7vZdDrflavdFDpreaI-mJrdWBPqbXM" allowfullscreen></iframe>'
    }
];

function find(n) {
    let flag = 0;
    for (var i = 0; i < meal.length; i++){
        if (meal[i].name == n) {
            document.querySelector('.map').innerHTML = meal[i].map;
            document.querySelector('.eathis').innerHTML = '<tr><td>' + meal[i].name + '</td></tr>';
	    flag = 1;
            break;
        }
    }
    if (flag == 0) {
        document.querySelector('.map').textContent = "找不到";
    }
}

function random() {
    var n = Math.floor(Math.random() * 9);
    var restaurant = '';
    var carry = '';
    restaurant = '<tr><td>' + meal[n].name + '</td></tr>';
    document.querySelector('.eathis').innerHTML = restaurant;
    document.querySelector('.map').innerHTML = meal[n].map;
}
// var list;
// var data = new XMLHttpRequest();
// data.open('get', 'https://freshman.csie.nuk.edu.tw/json/meal.json');
// data.send();
// data.onload = function() {
//   list = JSON.parse(data.responseText);
// }
// var output = '';
// for (let i = 0; i < list.length; i++){

// }