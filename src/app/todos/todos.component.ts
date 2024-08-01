import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  @Input() todoArray: any
  // private http = inject(HttpClient);

  // todoArray: any = [];

  // ngOnInit(): void {

  //   this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
  //     next: (response) => {
  //       this.todoArray = response
  //     }
  //   })

  // }
}
