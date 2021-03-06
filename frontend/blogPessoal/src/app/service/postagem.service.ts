import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  /*
  CRUD - Create(post), Read(get), Update(put) e Delete(delete)

  Read utiliza-se o método >> get
  Create utiliza-se o método >> post
  Update utiliza-se o método >> put
  Delete utiliza-se o método >> delete

  */

  // read
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token);
  } // getAllPostagens >> lista todas as postagens no servidor

  // create
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token);
  }

  // update
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagens', postagem, this.token);
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token);
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token);
  }

  findByTitulo(titulo: string) {
    return this.http.get(`http://localhost:8080/postagens/titulo/${titulo}`, this.token);
  }

}
