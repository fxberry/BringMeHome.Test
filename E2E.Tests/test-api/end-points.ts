/// <reference path="../typings/tsd.d.ts"/>
"use strict";
import config = require('../config');

class EndPoints {
    private host: string;

    constructor() {
        this.host = config().webApiBaseUrl;
    }

    public getTestUser(): string {
        return this.host + 'api/E2E/GetTestUser';
    }

    public getUserByName(): string {
        return this.host + 'api/E2E/GetUserByName';
    }
}

export = EndPoints