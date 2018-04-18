import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SharedService }  from '../shared.service';

@Component({
    selector: 'news',
    templateUrl: './news.template.html',
    styles: [`    
        .news-header{
            color: #337ab7;
            margin: 0;
            margin-bottom: 15px;
            text-decoration:none;
            cursor:pointer; 
            display:block;
        }
    `]
})

export class NewsComponent{
    @Input() borderColor: string;
    @Input() headlineOnly: boolean;
    @Input() noOfRecords: number = 3;
    constructor(private _sharedService: SharedService){}
    private newsList: Array<any>;
    private showModal: boolean =false;
    private selectedNews: any = {'header':'', 'content':''};

    openNewsModal(news: any) {
        this.selectedNews.header = news.headline;
        this.selectedNews.content = news.content;
        this.showModal = true;
    }
    hideModalEvent(event: boolean) {
        this.showModal = event;
    }
    loadNewsList() {
        this._sharedService.get('http://localhost:8081/newsList').subscribe(data => this.newsList = data);
    }
    ngOnInit() {
        this.loadNewsList()
    }

}