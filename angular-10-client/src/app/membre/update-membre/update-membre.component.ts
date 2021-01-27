import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-membre',
  templateUrl: './update-membre.component.html',
  styleUrls: ['./update-membre.component.css']
})
export class UpdateMembreComponent implements OnInit {
  content: any;

  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.router.navigate(['login']);
      }
    );
  }

}
