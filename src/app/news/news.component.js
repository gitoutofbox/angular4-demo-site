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
var shared_service_1 = require("../shared.service");
var NewsComponent = (function () {
    function NewsComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.noOfRecords = 3;
        this.showModal = false;
        this.selectedNews = { 'header': '', 'content': '' };
    }
    NewsComponent.prototype.openNewsModal = function (news) {
        this.selectedNews.header = news.headline;
        this.selectedNews.content = news.content;
        this.showModal = true;
    };
    NewsComponent.prototype.hideModalEvent = function (event) {
        this.showModal = event;
    };
    NewsComponent.prototype.loadNewsList = function () {
        var _this = this;
        this._sharedService.get('http://localhost:8081/newsList').subscribe(function (data) { return _this.newsList = data; });
    };
    NewsComponent.prototype.ngOnInit = function () {
        this.loadNewsList();
    };
    return NewsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewsComponent.prototype, "borderColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NewsComponent.prototype, "headlineOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NewsComponent.prototype, "noOfRecords", void 0);
NewsComponent = __decorate([
    core_1.Component({
        selector: 'news',
        templateUrl: './news.template.html',
        styles: ["    \n        .news-header{\n            color: #337ab7;\n            margin: 0;\n            margin-bottom: 15px;\n            text-decoration:none;\n            cursor:pointer; \n            display:block;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map