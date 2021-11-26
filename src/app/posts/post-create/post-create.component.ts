import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html' 
})
export class PostCreateComponent{
    newPost = 'Fake me out taco bell';
    enteredValue ='';
    onAddPost() {
        this.newPost = this.enteredValue;
    }
}