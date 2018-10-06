import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { Text } from './text';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-conceptextraction',
    templateUrl: './conceptextraction.component.html',
    styleUrls: ['./conceptextraction.component.scss']
})

export class ConceptExtractionComponent implements OnInit {
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
            		 console.log(text.keywordswithscores);
                 this.texts = text.keywordswithscores;				 
				},
                error => this.errorMessage = <any>error
                );
   }   

  
   

   private reset() {
       this.texts = null;
       this.text.keywordswithscores =null;	 
	     this.errorMessage =null;
   }   
}
