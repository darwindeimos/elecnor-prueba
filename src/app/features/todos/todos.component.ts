import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/core/services/todos.service';
import { Todo } from 'src/app/shared/models/todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private todos: Todo[];
  public todosFiltered: Todo[];
  
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.getTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  public search(text: string): void {
    if (text) {
      this.todosFiltered = this.todos.filter(todo => todo.title.includes(text));
    } else {
      this.todosFiltered = this.todos;
    }
  }

}
