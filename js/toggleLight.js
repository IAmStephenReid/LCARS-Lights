function toggle(number, type, url, query, trigger){
    var http = new XMLHttpRequest;
    var url = config.localIP + '/api/' + config.account + '/'+ type +'/' + number;
    http.open("GET", url, true);
    http.setRequestHeader('Content-Type', 'text/xml');
    http.send(url);
    http.onreadystatechange = function() {
        if(http.readyState == 4) {
            var state = JSON.parse(http.responseText);
            if(type == "lights"){
                trigger = "state";
                query = state.state.on;
            }
            else
            if(type == "groups"){
                trigger = "action";
                query = state.action.on;
            }
            if(query == false || query == false){
                http = new XMLHttpRequest;
                url = config.localIP + '/api/' + config.account + '/'+ type +'/' + number + '/' + trigger;
                var body = '{"on":true}';
                http.open("PUT", url, true);
                http.setRequestHeader('Content-Type', 'text/xml');
                http.send(body);
            }
            else
            if(query == true || query == true){
                http = new XMLHttpRequest;
                url = config.localIP + '/api/' + config.account + '/'+ type +'/' + number + '/' + trigger;
                var body = '{"on":false}';
                http.open("PUT", url, true);
                http.setRequestHeader('Content-Type', 'text/xml');
                http.send(body);            
            }
        }
    }
}