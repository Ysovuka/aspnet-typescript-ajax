import { Ajax } from "./ajax"

export function getValues()
{
    var _ajax = new Ajax();

    _ajax.get("/api/items", (status: number, response: string) =>
    {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function getValue(id: string)
{
    var _ajax = new Ajax();

    _ajax.get("/api/item/" + id, (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function postValue(data: any, contentType: string)
{
    var _ajax = new Ajax();

    _ajax.post("/api/item/", data, contentType,
        (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}

export function putValue(data: any, contentType: string)
{
    var _ajax = new Ajax();

    _ajax.put("/api/item/", data, contentType,
        (status: number, response: string) => {
            document.getElementById('response').innerHTML = response;
    }, true);
}

export function patchValue(data: any, contentType: string) {
    var _ajax = new Ajax();

    _ajax.patch("/api/item/", data, contentType,
        (status: number, response: string) => {
            document.getElementById('response').innerHTML = response;
        }, true);
}

export function deleteValue(id: string)
{
    var _ajax = new Ajax();

    _ajax.delete("/api/item/" + id, (status: number, response: string) => {
        document.getElementById('response').innerHTML = response;
    }, true);
}