import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Your daily Task Tracker!';
  list: any[] = [];
  count: number = 0;
  error: boolean = false;
  emptyFieldMsg = 'Please enter a task!';
  noTaskMsg = 'List is empty. Please add tasks for today!';

  @ViewChild('task') inputTask;

  addTask(item) {
    if (item == '') {
      this.error = true;
    } else {
      this.count = this.list.length + 1;
      this.list.push({ id: this.list.length, task: item });
      this.inputTask.nativeElement.value = '';
      this.error = false;
    }
  }

  onUserSelection(event: any, index) {
    if (event.isSelected) {
      this.count -= 1;
    } else {
      this.count += 1;
    }
  }
}
