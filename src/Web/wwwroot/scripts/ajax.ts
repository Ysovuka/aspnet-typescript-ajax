export class Ajax {
    constructor()
    {

    }

    public get(url: string, callback: (status: number, response: string) => void, async?: boolean): any
    {
        var request = new XMLHttpRequest();
        request.open('GET', url, async);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send();
    };

    public post(url: string, data: any, contentType: string, callback: (status: number, response: string) => void, async?: boolean): any
    {
        var request = new XMLHttpRequest();
        request.open('POST', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    }

    public put(url: string, data: any, contentType: string, callback: (status: number, response: string) => void, async?: boolean): any
    {
        var request = new XMLHttpRequest();
        request.open('PUT', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    }

    public patch(url: string, data: any, contentType: string, callback: (status: number, response: string) => void, async: boolean): any
    {
        var request = new XMLHttpRequest();
        request.open('PATCH', url, async);
        request.setRequestHeader('Content-Type', contentType);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send(data);
    }

    public delete(url: string, callback: (status: number, response: string) => void, async?: boolean): any
    {
        var request = new XMLHttpRequest();
        request.open('DELETE', url, async);
        request.onload = function () {
            callback(request.status, request.responseText);
        };
        request.send();
    }
}