"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = require("./ajax");
function getValues() {
    var _ajax = new ajax_1.Ajax();
    _ajax.get("/api/values/getitems", function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.getValues = getValues;
function getValue(id) {
    var _ajax = new ajax_1.Ajax();
    _ajax.get("/api/values/getitem/" + id, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.getValue = getValue;
function postValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.post("/api/values/postItem/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.postValue = postValue;
function putValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.put("/api/values/putItem/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.putValue = putValue;
function patchValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.patch("/api/values/patchItem/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.patchValue = patchValue;
function deleteValue(id) {
    var _ajax = new ajax_1.Ajax();
    _ajax.delete("/api/values/deleteItem/" + id, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.deleteValue = deleteValue;
//# sourceMappingURL=app.js.map