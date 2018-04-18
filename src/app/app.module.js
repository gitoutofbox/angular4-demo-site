"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
//import { AboutComponent } from './about/about.component'
var contactus_component_1 = require("./contactus/contactus.component");
var register_component_1 = require("./register/register.component");
var news_component_1 = require("./news/news.component");
var modal_component_1 = require("./modal/modal.component");
var box_directive_1 = require("./directives/box.directive");
var shared_service_1 = require("./shared.service");
var newsManager_component_1 = require("./newsManager/newsManager.component");
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        data: { title: 'My Home page' }
    }, {
        path: 'about',
        //component: AboutComponent,
        loadChildren: './about/about.module#AboutModule'
    }, {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'manage-news',
        component: newsManager_component_1.NewsManagerComponent
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true })
        ],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, contactus_component_1.ContactusComponent, register_component_1.RegisterComponent, news_component_1.NewsComponent, modal_component_1.ModalComponent, box_directive_1.BoxDirective, newsManager_component_1.NewsManagerComponent],
        providers: [shared_service_1.SharedService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map