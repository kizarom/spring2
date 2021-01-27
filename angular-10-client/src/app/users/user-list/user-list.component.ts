import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  content: any;
  searchValue: string;
  dataSource= new MatTableDataSource(this.users)

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        this.router.navigate(['admin/users']);
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.router.navigate(['login']);
      }
    );
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['admin/user-details', id]);
  }
/*
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
*/
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

  applyFilter(event: Event) {
    const filterValue=(event.target as HTMLInputElement).value; 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
