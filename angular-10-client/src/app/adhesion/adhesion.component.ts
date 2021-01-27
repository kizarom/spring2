import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/Membre';
import { MembreService } from '../_services/membre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent implements OnInit {
  membres: Membre[];
  membre: Membre;
  status:string;
  content: any;

  constructor(private membreService: MembreService,
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        this.router.navigate(['admin/adhesion']);
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.router.navigate(['login']);
      }
    );
    this.getMembres();
  }

  private getMembres(){
    this.membreService.getMembresList().subscribe(data => {
      this.membres = data;
    });
  }

  MembreDetails(id: number){
    this.router.navigate(['admin/membre-details', id]);
  }
/*
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
*/
  deleteMembre(id: number){
    this.membreService.deleteMembre(id).subscribe( data => {
      console.log(data);
      this.getMembres();
    })
  }
  saves(id:number){
    console.log(id);
    this.membreService.getMembreById(id).subscribe(data => {
      this.membre = data;
      this.membre.status="actif";
      console.log(this.membre);
  },error => console.log(error));
  this.membreService.updateStatus(id,this.membre).subscribe( data =>{
    this.getMembres();
}, error => console.log(error));
}
}
