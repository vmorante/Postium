import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent implements OnInit {
 posts: Post[];
  constructor(
    private _activatedRoute: ActivatedRoute,
        private _postService: PostService,
        private _router: Router) { }
    

  ngOnInit() {
    this._activatedRoute.data.forEach((data: { posts: Post[] }) => this.posts = data.posts);
       
        window.scrollTo(0, 0);
    
  }
// mostrarPostsBuscados(post: Post){
//        this._activatedRoute.queryParams.subscribe(params =>      
//         this._postService.searchPost(params.q)
//                             .subscribe()
//                             })


//     }
     




}
