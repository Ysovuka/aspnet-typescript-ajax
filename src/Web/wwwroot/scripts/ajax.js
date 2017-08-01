"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ajax = (function () {
    function Ajax() {
    }
    Ajax.prototype.get = function (url, callback, async) {
        var request = new XMLHttpRequest();
        request.open('GET', url, async);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send();
    };
    ;
    Ajax.prototype.post = function (url, data, contentType, callback, async) {
        var request = new XMLHttpRequest();
        request.open('POST', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    };
    Ajax.prototype.put = function (url, data, contentType, callback, async) {
        var request = new XMLHttpRequest();
        request.open('PUT', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    };
    Ajax.prototype.patch = function (url, data, contentType, callback, async) {
        var request = new XMLHttpRequest();
        request.open('PATCH', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    };
    Ajax.prototype.delete = function (url, callback, async) {
        var request = new XMLHttpRequest();
        request.open('DELETE', url, async);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send();
    };
    return Ajax;
}());
exports.Ajax = Ajax;
//# sourceMappingURL=ajax.js.map