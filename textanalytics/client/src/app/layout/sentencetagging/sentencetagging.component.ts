import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sentencetagging',
    templateUrl: './sentencetagging.component.html',
    styleUrls: ['./sentencetagging.component.scss']
})

export class SentenceTaggingComponent implements OnInit {
   texts: String;
   
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
            		 console.log(text.postags);
                 this.texts = text.postags;				 
				},
                error => this.errorMessage = <any>error
                );
   }   

  
   

   private reset() {
       this.texts = null;
       this.text.postags =null;	 
	     this.errorMessage =null;
   }   
}
