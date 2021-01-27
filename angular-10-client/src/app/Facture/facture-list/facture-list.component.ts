import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { FactureService } from '../../_services/facture.service';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

 
  factures: Facture[];
  content: any;

  constructor(private factureService: FactureService,
    private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        this.router.navigate(['admin/factures']);
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.router.navigate(['login']);
      }
    );
    this.getFactures();
  }

  private getFactures(){
    this.factureService.getFacturesList().subscribe(data => {
      this.factures = data;
    });
  }

  FactureDetails(id: number){
    this.router.navigate(['admin/facture-details', id]);
  }

  updateFacture(id: number){
    this.router.navigate(['admin/update-facture', id]);
  }

  deleteFacture(id: number){
    this.factureService.deletefacture(id).subscribe( data => {
      console.log(data);
      this.getFactures();
    })
  }
}