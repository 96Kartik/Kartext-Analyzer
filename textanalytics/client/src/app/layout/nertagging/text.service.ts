import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Text } from './text';

@Injectable()
export class TextService {
	
	serviceurl = "http://127.0.0.1:8000/nertag/nertag";
	constructor(private http:Http) { }
	
	
	
    addTextWithPromise(text:Text): Promise<Text> {
    	
	    let headers = new Headers({ 'Content-Type': 'application/json'  });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceurl, text, options).toPromise()
		           .then(this.extractData)
                   .catch(this.handleErrorPromise);
	}

	private extractData(res: Response) {
	    let body = res.json();
	    //console.log(body);
        return body || {};
        
    }

	private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	
   }
   