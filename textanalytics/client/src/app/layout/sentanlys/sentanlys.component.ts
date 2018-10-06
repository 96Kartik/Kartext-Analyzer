import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-sentanlys',
    templateUrl: './sentanlys.component.html',
    styleUrls: ['./sentanlys.component.scss']
})
export class SentanlysComponent implements OnInit {
   texts: string[];
   sentences: String;
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
            		 this.sentences = text.sentence;
                 this.texts = text.Sentanlys;					 
				},
                error => this.errorMessage = <any>error);
   }   

  
   

   private reset() {
       this.sentences = null;
       this.text.sentence =null;	 
	   this.errorMessage =null;
   }   
}
