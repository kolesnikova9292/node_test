import { Injectable } from '@angular/core';
import { elementList, categoryList } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<elementList[]> {
    try {
      return this.http.get('/api/products').pipe(
        map((data) => {
          let elementList = data['data'];
          return elementList.map(function (user: any) {
            return user;
          });
        })
      );
    } catch (error) {}
  }

  getCategories(): Observable<categoryList[]> {
    try {
      return this.http.get('/api/categories').pipe(
        map((data) => {
          let elementList = data['data'];
          return elementList.map(function (user: any) {
            return user;
          });
        })
      );
    } catch (error) {}
  }

  getDataById(id: number, list: elementList[]): elementList {
    return list.find((x) => x.id == id);
  }
}
