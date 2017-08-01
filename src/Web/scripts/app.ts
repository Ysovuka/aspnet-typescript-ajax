import { Ajax } from "./ajax"

export function getValues()
{
    var _ajax = new Ajax();

    _ajax.get("/api/values/getitems", (status: number, response: string) =>
    {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function getValue(id: string)
{
    var _ajax = new Ajax();

    _ajax.get("/api/values/getitem/" + id, (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function postValue(data: any, contentType: string)
{
    var _ajax = new Ajax();

    _ajax.post("/api/values/postItem/", data, contentType,
        (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function putValue(data: any, contentType: string)
{
    var _ajax = new Ajax();

    _ajax.put("/api/values/putItem/", data, contentType,
        (status: number, response: string) => {
            document.getElementById('response').innerHTML = response;
    }, true);
}

export function patchValue(data: any, contentType: string) {
    var _ajax = new Ajax();

    _ajax.patch("/api/values/patchItem/", data, contentType,
        (status: number, response: string) => {
            document.getElementById('response').innerHTML = response;
        }, true);
}

export function deleteValue(id: string)
{
    var _ajax = new Ajax();

    _ajax.delete("/api/values/deleteItem/" + id, (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}