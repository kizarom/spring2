import { Component, OnInit } from '@angular/core';
import { Membre } from '../../models/Membre';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from '../../_services/membre.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-membre-details',
  templateUrl: './membre-details.component.html',
  styleUrls: ['./membre-details.component.css']
})
export class MembreDetailsComponent implements OnInit {

  id: number
  membre: Membre
  content: any;
  constructor(private route: ActivatedRoute,private userService:UserService,
    private router: Router, private membreService: MembreService) { }

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
    this.id = this.route.snapshot.params['id'];

    this.membre = new Membre();
    this.membreService.getMembreById(this.id).subscribe( data => {
      this.membre = data;
    });
  }

}
