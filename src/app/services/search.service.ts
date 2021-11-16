import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'https://api.github.com/search/repositories';
  searchResults: any;

  constructor(private httpClient: HttpClient) { }

  //make http call to the Api
  searchEntries(term: string): Observable<any> {
    if (term === "") {
      console.log("not Defined");
      return EMPTY
    }else{
      let params = {q: term};
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          console.log(response);
          // return this.searchResults = response["items"];
          return;
        })
      )
    }
  }

  _searchEntries(term: string) {
    return this.searchEntries(term)
  }

}
