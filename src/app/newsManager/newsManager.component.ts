import { Component, OnInit } from '@angular/core';
import { SharedService }  from '../shared.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'news-manager',
    templateUrl: './newsManager.template.html',
    styleUrls: ['./newsManager.style.css']
})

export class NewsManagerComponent{
    constructor(private _sharedService: SharedService, private _fb: FormBuilder) {}
    private newsList: Array<any>;
    private editNewsObj: Object;
    private newsForm: any;
    private submitted: boolean = false;
    private apiResponse: any;
    ngOnInit() {
        this.setupNewsForm();        
        this._sharedService.get('http://localhost:8081/newsList')
        .subscribe(data => this.newsList = data);
       this.apiResponse = {'status':'', 'message':''};
        
    }
    setupNewsForm() {
        this.newsForm = this._fb.group({
            headline: ['',Validators.required],
            content: ['',Validators.required],
            id: ['']
        })
    }    
    
    editNews(newsObj: Object) {
        this.editNewsObj = newsObj;
        this.newsForm.setValue(this.editNewsObj);
        return false;
    }
    deleteNews(newsObj: Object) {
        if(confirm('Are your sure wnat to delete?')) {
            this._sharedService.delete('http://localhost:8081/deleteNews', newsObj).subscribe(data => {this.apiDone(data)});
           
        }
        return false;
    }
    cancelEditNews() {
        this.resetForm();
        return false;
    }
    resetForm() {
        this.newsForm.reset();
        this.submitted = false;
    }
    apiDone(data:any) {
        this.apiResponse = data;
        this.resetForm();
        this._sharedService.get('http://localhost:8081/newsList')
        .subscribe(data => this.newsList = data);
    }
    onSubmit(newsObj: Object) {
        this.submitted = true;
        if(this.newsForm.valid) {
            if(!this.newsForm.value.id) {
                this.newsForm.value.id = new Date().valueOf();
                this._sharedService.post('http://localhost:8081/saveNews', this.newsForm.value).subscribe(data => {this.apiDone(data)});
            } else {
                this._sharedService.put('http://localhost:8081/saveNews/'+this.newsForm.value.id, this.newsForm.value).subscribe(data => {this.apiDone(data)});
            }
            
        }
    }
}