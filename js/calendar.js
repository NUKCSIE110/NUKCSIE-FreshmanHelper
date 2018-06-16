var data;
var xhr = new XMLHttpRequest();
xhr.open('get', 'http://code.csie.nuk.edu.tw/freshman/json/calendar.json');
xhr.send();

$(function() {
  xhr.onload = function() {
    data = JSON.parse(xhr.responseText);
    $('#calendar').fullCalendar({
      eventRender: function(eventObj, $el) {
        $el.popover({
          title: eventObj.title,
          content: eventObj.description,
          trigger: 'hover',
          placement: 'top',
          container: 'body'
        });
      },
      themeSystem: 'bootstrap4',
      header: {
        left: 'prev next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data,
    })
  };
});