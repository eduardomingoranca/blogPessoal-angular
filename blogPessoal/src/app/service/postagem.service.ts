import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  /*
  CRUD - Create(post), Read(get), Update(put) e Delete(delete)

  Read utiliza-se o método >> get
  Create utiliza-se o método >> post
  Update utiliza-se o método >> put
  Delete utiliza-se o método >> delete

  */

  // read
  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens');
  } // getAllPostagens >> lista todas as postagens no servidor

  // create
  postPostagem(postagem: Postagem) {
    return this.http.post('http://31.220.57.14:8080/postagens', postagem);
  }

  // update
  putPostagem(postagem: Postagem) {
    return this.http.put('http://31.220.57.14:8080/postagens', postagem);
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://31.220.57.14:8080/postagens/${id}`);
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://31.220.57.14:8080/postagens/${id}`);
  }

  findByTitulo(titulo: string) {
    return this.http.get(`http://31.220.57.14:8080/postagens/titulo/${titulo}`);
  }

}
