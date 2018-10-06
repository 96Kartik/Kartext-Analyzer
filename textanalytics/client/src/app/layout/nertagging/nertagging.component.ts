import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-nertagging',
    templateUrl: './nertagging.component.html',
    styleUrls: ['./nertagging.component.scss']
})

export class NerTaggingComponent implements OnInit {
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
            		 //console.log(text.nertags);
                 this.texts = text.nertags;				 
				},
                error => this.errorMessage = <any>error
                );
   }   

   private reset() {
       this.texts = null;
       this.text.nertags =null;	 
	     this.errorMessage =null;
   }   
}
