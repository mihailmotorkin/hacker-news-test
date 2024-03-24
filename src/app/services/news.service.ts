import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(index: number, hitsPerPage: number) {

    return this.http.get(`http://hn.algolia.com/api/v1/search?tags=front_page&page=${index}&hitsPerPage=${hitsPerPage}`);
  }

  getNewsById(id: number): Observable<any>{
    return this.http.get(`http://hn.algolia.com/api/v1/items/${id}`);
  }


}
