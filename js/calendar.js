
$(function() {
var data;
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://freshman.csie.nuk.edu.tw/json/calendar.json');
xhr.send();

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
