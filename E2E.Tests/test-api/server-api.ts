/// <reference path="../typings/tsd.d.ts"/>
"use strict";
import Http = require('./http');
import EndPoints = require('./end-points');

class ServerApi {
    private endPoints: EndPoints;
    private http: Http;

    constructor() {
        this.endPoints = new EndPoints();
        this.http = new Http();
    }
    
    public getTestUser(): protractor.promise.Promise<any> {
        var endpoint = this.endPoints.getTestUser();
        return this.http.get(endpoint);
    }

    public getUserByName(userName:string): protractor.promise.Promise<any> {
        var endpoint = this.endPoints.getUserByName();
        return this.http.post(endpoint, { UserName: userName });
    }
}

export = ServerApi