import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  /*
  CRUD - Create, Ready, Update e Delete

  Ready utiliza-se o método >> get
  Create utiliza-se o método >> post
  Update utiliza-se o método >> put
  Delete utiliza-se o método >> delete

  */

  // ready
  getAllPostagens() {
    return this.http.get('http://31.220.57.14:8080/postagens')
  } // getAllPostagens >> lista todas as postagens no servidor

}
