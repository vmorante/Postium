import { Component } from "@angular/core";
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "header-bar",
    templateUrl: "header-bar.component.html",
    styleUrls: ["header-bar.component.css"]
})
export class HeaderBarComponent { 
 constructor(   private _postService: PostService, private _router: Router,private _activatedRoute: ActivatedRoute) { }



     search(texto:string){ 
    
               this._router.navigate(['search'], { queryParams: { q: texto } })    



 }
 










}
