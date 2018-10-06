import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tokenization',
    templateUrl: './tokenization.component.html',
    styleUrls: ['./tokenization.component.scss']
})

export class TokenizationComponent implements OnInit {
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
            		 console.log(text.tokens);
                 this.texts = text.tokens;				 
				},
                error => this.errorMessage = <any>error
                );
   }   

  
   

   private reset() {
       this.texts = null;
       this.text.tokens =null;	 
	     this.errorMessage =null;
   }   
}
