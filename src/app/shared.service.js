"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
    }
    SharedService.prototype.get = function (url) {
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    SharedService.prototype.post = function (url, data) {
        return this._http.post(url, data)
            .map(function (res) { return res.json(); });
    };
    SharedService.prototype.put = function (url, data) {
        return this._http.put(url, data)
            .map(function (res) { return res.json(); });
    };
    SharedService.prototype.delete = function (url, data) {
        return this._http.delete(url, data)
            .map(function (res) { return res.json(); });
    };
    return SharedService;
}());
SharedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map