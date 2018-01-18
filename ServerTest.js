"use strict";
// Node-Http-Modul importieren
var Http = require("http");
// Node-Url-Modul importieren
var Url = require("url");
var ServerTest;
(function (ServerTest) {
    // Port vom Process-Objekt erfragen 
    var port = process.env.PORT;
    // Port nicht definiert -> lokale Maschine, Port selbst definieren
    if (port == undefined)
        port = 5000;
    // Server-Objekt kreieren
    var server = Http.createServer();
    // Event-Handler installieren
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    // Auf dem Port horchen
    server.listen(port);
    // Listening-Event: Rückmeldung wenn horchen läuft
    function handleListen() {
        console.log("Server listening on port " + port);
    }
    // Request-Event: Verarbeiten der Request und erstellen der Response
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmmmen!!");
        // Header: Antwort kommt im HTML-Format mit uft-8
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // Header: ?
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Response-Body
        _response.write("Danke für Ihre Bestellung<br>");
        _response.write("");
        _response.write("");
        _response.write("");
        //_response.write("Headers: " + _request.headers + "<br>");
        // ?
        var query = Url.parse(_request.url, true).query;
        // ?
        for (var key in query)
            _response.write("<p>" + key + ": " + query[key] + "</p>");
        // Antwort abschließen und abschicken
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map