"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = require("./ajax");
function getValues() {
    var _ajax = new ajax_1.Ajax();
    _ajax.get("/api/items", function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.getValues = getValues;
function getValue(id) {
    var _ajax = new ajax_1.Ajax();
    _ajax.get("/api/item/" + id, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.getValue = getValue;
function postValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.post("/api/item/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.postValue = postValue;
function putValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.put("/api/item/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.putValue = putValue;
function patchValue(data, contentType) {
    var _ajax = new ajax_1.Ajax();
    _ajax.patch("/api/item/", data, contentType, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.patchValue = patchValue;
function deleteValue(id) {
    var _ajax = new ajax_1.Ajax();
    _ajax.delete("/api/item/" + id, function (status, response) {
        document.getElementById('response').innerHTML = response;
    }, true);
}
exports.deleteValue = deleteValue;
//# sourceMappingURL=app.js.map