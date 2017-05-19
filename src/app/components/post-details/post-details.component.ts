import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from "../../models/post";
import { PostService } from '../../services/post.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { element } from 'protractor';
import { Subscription } from "rxjs/Subscription";
import { User } from '../../models/user';
import { LocalStorageModule } from 'angular-2-local-storage';

@Component({
    templateUrl: "post-details.component.html",
    styleUrls: ["post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {

    post: Post;
    id:number;
    megusta:boolean;
    @Output() autorSeleccionado: EventEmitter<Post> = new EventEmitter();
    @Output() postSeleccionado: EventEmitter<Post> = new EventEmitter();

    private _postSubscription: Subscription;
    constructor(   private _postService: PostService, private _router: Router, private _categoryService:CategoryService,private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { post: Post}) => this.post = data.post);
        this._activatedRoute.data.forEach((data: { id: number}) => this.id = Number(localStorage.getItem("usuario")));
        var user=Number(localStorage.getItem("usuario"))
       
       
        

        if(this.post.likesUser.indexOf(user)!=-1){
        this.megusta=false;
            console.log("ya le ha dado a me gusta")
     } else{
         this.megusta=true;
     }
        
        window.scrollTo(0, 0);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/
mostrarAutor(post:Post){
        //console.log(user.id);
        this._postService.getUserPosts(post.author.id)
                            .subscribe(user =>{
                                this._router.navigate([`posts/users/${post.author.id}`])
                            })


    }
    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                                                |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/
mostrarCategorias(category:Category){
        
     
                                this._router.navigate([`posts/categories/${category.id}`])
                           


    }
    edit(post:Post){
        this._router.navigate([`edit-post/${post.id}`])
    }

    like(post:Post){
        this.post=post;
        var user=Number(localStorage.getItem("usuario"))
       
        //User.UsuarioActual=User.defaultUser();
        

        if(post.likesUser.indexOf(user)!=-1){
        this.megusta=true;
            console.log("ya le ha dado a me gusta")
     } else{
        post.likesUser.push( user)
        post.likes=post.likes +1;
        this.megusta=false;
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate([`/posts/${post.id}`]));
      }

    }

   
}
