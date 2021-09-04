import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalRef: any;
  delete = false;
  task = false;
  user = false;
  userForm: any;
  taskForm: any;
  submit = false;
  submitted = false;
  userData:any;
  taskData:any;
  userStatus=false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.required)
    })

    this.userForm = new FormGroup({
      user: new FormControl('', Validators.required)
    })
  }

  openModal(template: TemplateRef<any>, type: any): void {
    this.submit = false;
    this.submitted = false;
    if (type == 'delete') {
      this.delete = true;
      this.task = false;
      this.user = false;
    } if (type == 'task') {
      this.task = true;
      this.delete = false;
      this.user = false;
    } if (type == 'user'){
      this.user = true;
      this.task = false;
      this.delete = false;
    }
    this.modalRef = this.modalService.show(template);
  }

  addUser() {
    this.submit = true;
    if(this.userForm.valid){
      this.userStatus=true;
      // alert(this.userForm.value.user + " user is added");
      this.userData=this.userForm.value.user;
      this.submit=false;
      this.modalRef.hide();
    }

  }

  addTask() {
    this.submitted = true;
    if(this.taskForm.valid){
      // alert(this.taskForm.value.task + " task is added");
      this.taskData=this.taskForm.value.task;
      this.submitted = false;
      this.modalRef.hide();
    }

  }

  deleteUser() {
    this.userStatus=false;
    this.modalRef.hide();
  }

}
