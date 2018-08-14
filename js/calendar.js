$(function () {
    var data;
    var selectHeader = function(w){
        return {
                left: 'prev next'+(w>=390 ? ' today' : ''),
                center: 'title',
                right: (w>=640 ? 'month,agendaWeek,agendaDay,listMonth' : '')
            };
    };

    var xhr = new XMLHttpRequest();
    xhr.open('get', '/json/calendar.json');
    xhr.send();

    xhr.onload = function () {
        data = JSON.parse(xhr.responseText);
        $('#calendar').fullCalendar({
            eventRender: function (eventObj, $el) {
                $el.popover({
                    title: eventObj.title,
                    content: eventObj.description,
                    trigger: 'hover',
                    placement: 'top',
                    container: 'body'
                });
            },
            themeSystem: 'bootstrap4',
            contentHeight: 'auto',
            header: selectHeader(window.innerWidth),
            events: data
        });
    };
});
