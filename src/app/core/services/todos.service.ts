import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/shared/models/todos.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  public getTodos = (): Observable<Todo[]> =>
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((todos: any) => todos.map((user) => new Todo(user)))
      )

}


