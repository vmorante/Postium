import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';

@Injectable()
export class PostsSearchResolve {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {
console.log(route.queryParams);
    
   return this._postService.searchPost(route.queryParams.q);
   
  }
}