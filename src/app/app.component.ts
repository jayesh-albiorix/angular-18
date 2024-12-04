import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);

  title = 'angular-latest';
  count = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  book = {
    title: '',
    description: ''
  };

  todoArray: any = []
  show = false;



  ngOnInit(): void {
    console.log('The count is: ' + this.count());

    setTimeout(() => {
      this.book = {
        title: 'Learning Angular',
        description: 'Learning angular routing. forms etc.'
      }
    }, 5000);


    
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (response) => {
        this.todoArray = response;
        setTimeout(() => {
          this.show = true;
        }, 2000);
      }
    })
  }

  incDec(inc: boolean) {
    this.count.update((value) => inc ? value + 1 : value - 1)
  }
}
