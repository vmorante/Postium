import { Component, Input } from "@angular/core";

import { Post } from "../../models/post";
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user';

@Component({
    selector: "posts-list",
    templateUrl: "posts-list.component.html"
})
export class PostsListComponent {

    @Input() posts: Post[];
    @Input() users:User[];
    
constructor(
    private _postService: PostService,
    private _router: Router,
     
  
  ) {}

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
     | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
     | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
     |------------------------------------------------------------------------------------------------------------------*/
      mostrarAutor(post:Post){
        //console.log(user.id);
        this._postService.getUserPosts(post.author.id)
                            .subscribe(user =>{
                                this._router.navigate([`posts/users/${post.author.id}`])
                            })


    }
     




    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~                                                                                              |
     |-----------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
     | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
     | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
     |-----------------------------------------------------------------------------------------------------------------*/

    mostrarDetalles(post: Post){
        console.log(post.id);
        this._postService.getPostDetails(post.id)
                            .subscribe(post =>{
                                this._router.navigate([`posts/${post.id}`])
                            })


    }
     


}
