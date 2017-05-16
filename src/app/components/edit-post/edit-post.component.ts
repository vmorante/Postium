import { Component, OnDestroy, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

import { Post } from "../../models/post";
import { PostService } from "../../services/post.service";


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})


export class EditPostComponent implements OnDestroy,OnInit {

 post:Post
 @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();
private _postSubscription: Subscription;

    constructor(
         private _activatedRoute: ActivatedRoute,
        private _postService: PostService,
        private _router: Router) { 

        }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }
    ngOnInit() {
    this._activatedRoute.data.forEach((data: any) => {
    
      return this.post = data.posts;
  });
    }

    editPost(post: Post): void {
        this._unsubscribePostCreation();
        this.post=post;
        console.log(post)
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate([`/posts/${post.id}`]));
    }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }
 
}
