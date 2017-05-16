
import { User } from "./user";
export class Like {

    private constructor(
        public id: number,
        public usuarios: User[]
    ) { }

    static fromJson(json: any): Like {
        return new Like(
            json.id,
            json.usuarios
        );
    }

     static fromJsonToList(json: any): Like[] {
        return (json as any[]).reduce((likes: Like[], like: Like) => {
            likes.push(Like.fromJson(like));
            return likes;
        }, []);
    }
}