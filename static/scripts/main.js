var domain = 'http://lab.Innovecs.local/';
var Service = function( name, options ){
  options = options || {}
  this.name = name
  this.url = options.url
};
var services = [];

var hello_world = new Service( 'hello_world' );
hello_world.url = 'hello_world';

var pizzr = new Service( 'pizzr', {url: 'pizzr'} );

services.push(hello_world);
services.push(pizzr)

var json;
$.each(services, function(index, service){
	  var service_elem = $('#' + service.name)
	  if (!service_elem.length) {
	      service_elem = $('<div>', {id: service.name}).appendTo('body')
	  }

    json = $.getJSON(domain + service.url), function(json){
        service_elem.html(json.data);
    }
});
