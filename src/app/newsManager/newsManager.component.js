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
var forms_1 = require("@angular/forms");
var NewsManagerComponent = (function () {
    function NewsManagerComponent(_sharedService, _fb) {
        this._sharedService = _sharedService;
        this._fb = _fb;
        this.submitted = false;
    }
    NewsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupNewsForm();
        this._sharedService.get('http://localhost:8081/newsList')
            .subscribe(function (data) { return _this.newsList = data; });
        this.apiResponse = { 'status': '', 'message': '' };
    };
    NewsManagerComponent.prototype.setupNewsForm = function () {
        this.newsForm = this._fb.group({
            headline: ['', forms_1.Validators.required],
            content: ['', forms_1.Validators.required],
            id: ['']
        });
    };
    NewsManagerComponent.prototype.editNews = function (newsObj) {
        this.editNewsObj = newsObj;
        this.newsForm.setValue(this.editNewsObj);
        return false;
    };
    NewsManagerComponent.prototype.deleteNews = function (newsObj) {
        var _this = this;
        if (confirm('Are your sure wnat to delete?')) {
            this._sharedService.delete('http://localhost:8081/deleteNews', newsObj).subscribe(function (data) { _this.apiDone(data); });
        }
        return false;
    };
    NewsManagerComponent.prototype.cancelEditNews = function () {
        this.resetForm();
        return false;
    };
    NewsManagerComponent.prototype.resetForm = function () {
        this.newsForm.reset();
        this.submitted = false;
    };
    NewsManagerComponent.prototype.apiDone = function (data) {
        var _this = this;
        this.apiResponse = data;
        this.resetForm();
        this._sharedService.get('http://localhost:8081/newsList')
            .subscribe(function (data) { return _this.newsList = data; });
    };
    NewsManagerComponent.prototype.onSubmit = function (newsObj) {
        var _this = this;
        this.submitted = true;
        if (this.newsForm.valid) {
            if (!this.newsForm.value.id) {
                this.newsForm.value.id = new Date().valueOf();
                this._sharedService.post('http://localhost:8081/saveNews', this.newsForm.value).subscribe(function (data) { _this.apiDone(data); });
            }
            else {
                this._sharedService.put('http://localhost:8081/saveNews/' + this.newsForm.value.id, this.newsForm.value).subscribe(function (data) { _this.apiDone(data); });
            }
        }
    };
    return NewsManagerComponent;
}());
NewsManagerComponent = __decorate([
    core_1.Component({
        selector: 'news-manager',
        templateUrl: './newsManager.template.html',
        styleUrls: ['./newsManager.style.css']
    }),
    __metadata("design:paramtypes", [shared_service_1.SharedService, forms_1.FormBuilder])
], NewsManagerComponent);
exports.NewsManagerComponent = NewsManagerComponent;
//# sourceMappingURL=newsManager.component.js.map