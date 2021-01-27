import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number
  user: User
  content: any;
  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router
    ) { }

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
    this.id = this.route.snapshot.params['id'];

    this.user = new User();
    this.userService.getUserById(this.id).subscribe( data => {
      this.user = data;
    });
  }

}
