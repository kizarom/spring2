import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/Membre';
import { Router } from '@angular/router';
import { MembreService } from '../_services/membre.service';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
  membres: Membre[];

  constructor(private membreService: MembreService,
    private router: Router) { }

  ngOnInit(): void {
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
}