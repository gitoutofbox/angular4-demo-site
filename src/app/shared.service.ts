import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
    constructor (private _http: Http) {}
  
    get(url: string) {
      return this._http.get(url)
      .map((res:Response) => res.json());
    }
  
    post(url: string,data: Object) {
      return this._http.post(url, data)
      .map((res:Response) => res.json());
    }

    put(url: string,data: Object) {
      return this._http.put(url, data)
      .map((res:Response) => res.json());
    }

    delete(url: string,data: Object) {
      return this._http.delete(url, data)
      .map((res:Response) => res.json());
    }
  }