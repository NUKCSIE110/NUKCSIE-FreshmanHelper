$(function () {
    var data;
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
            header: {
                left: 'prev today next',
                center: 'title',
                right: 'month,listMonth'
            },
            defaultView: (window.innerWidth>=420 ? 'month' : 'listMonth'),
            events: data
        });
    };
});
