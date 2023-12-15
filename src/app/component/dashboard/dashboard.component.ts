import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Task } from '../../model/task';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  taskObj : Task = new Task();

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService : CrudService) { }
  taskArr : string[] = [];

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    // this.getAllTask();
  }
  // getAllTask() {
  //   this.crudService.getAllTask().subscribe(res => {
  //     this.taskArr = res;
  //   }, err => {
  //     alert("Unable to get list of tasks");
  //   });
  // }

  addTask(e:any) {
    console.log(e)
    this.taskObj.task_name =  this.addTaskValue;
    this.taskArr.push(this.addTaskValue)
    console.log(this.taskArr)
    // this.crudService.addTask(this.taskObj).subscribe(res => {
    //   this.ngOnInit();
    //   this.addTaskValue = '';
    // }, err => {
    //   alert(err);
    // })
    console.log()
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteTask(e:any) {
    console.log("hii",e)
    // this.crudService.deleteTask(etask).subscribe(res => {
    //   this.ngOnInit();
    // }, err=> {
    //   alert("Failed to delete task");
    // });
    this.taskArr.splice(e, 1);

  }

  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }



}

