/// <reference path="../typings/tsd.d.ts"/>
"use strict";
import request = require('request');

class Http {
    private http: any = null;
    private flow: webdriver.promise.ControlFlow;

    constructor() {
        var jar = request.jar();
        this.http = request.defaults({
            jar: jar
        });
        this.flow = protractor.promise.controlFlow();
    }

    public post<T>(url: string, params: any): protractor.promise.Promise<T> {
        return this.flow.execute(() => {
            var deferred = protractor.promise.defer<T>();
            console.log("Calling", url, "with params", params);
            var options = {
                url: url,
                body: params,
                json: true
            }
            this.http.post(options, (error, response, message) => {
                this.onResponse(url, error, response, message, deferred);
            });

            return deferred.promise;
        });
    }

    public get<T>(url: string): protractor.promise.Promise<T> {
        return this.flow.execute(() => {
            var deferred = protractor.promise.defer<T>();
            console.log("Calling", url);
            var options = {
                url: url,
                json: true
            }
            this.http.get(options, (error, response, message) => {
                this.onResponse(url, error, response, message, deferred);
            });

            return deferred.promise;
        });
    }

    private onResponse = (url, error, response, message, deferred) => {
        console.log("Done call to", url, "status code", response.statusCode);
        if (!error && response.statusCode == 200) {
            console.log("Message", message);
            deferred.fulfill(message);
        } else {
            console.log("Response", response);
            console.log("Error", error);
            deferred.reject({error: error, response: response});
        }
    };
}

export = Http 