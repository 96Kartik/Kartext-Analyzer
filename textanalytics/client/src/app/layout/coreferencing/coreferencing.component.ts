import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-coreferencing',
    templateUrl: './coreferencing.component.html',
    styleUrls: ['./coreferencing.component.scss']
})
export class CoreferencingComponent implements OnInit {
   signal: string;
   articles: string;
   coref: string;
   errorMessage: String;
   text = new Text();      
   constructor(private textService: TextService) { }
   ngOnInit(): void {
	    this.addText();
   }
   
   addText(): void {
     this.textService.addTextWithPromise(this.text)
	     .then( text => {
					
                     this.reset();   
            		 this.articles = text.article;
                 this.signal = text.signalSentence;	
                 this.coref = text.corefSentence;				 
				},
                error => this.errorMessage = <any>error);
   }   

  
   

   private reset() {
       this.articles = null;
       this.signal = null;
       this.coref = null;
       this.text.article =null;	 
	   this.errorMessage =null;
   }   
}
