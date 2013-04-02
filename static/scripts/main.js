var domain = 'http://lab.Innovecs.local/';
var Service = function(){};
var services = [];

var hello_world = new Service();
hello_world.url = 'hello_world';

services.push(hello_world);

var json;
$.each(services, function(index, service_id){
    json = $.getJSON(domain + service_id.url, function(json){
        $('#first_service').html(json.data);
    });
});
