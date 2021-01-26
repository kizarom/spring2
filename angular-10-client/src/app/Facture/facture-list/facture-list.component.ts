import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { FactureService } from '../../_services/facture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

 
  factures: Facture[];

  constructor(private factureService: FactureService,
    private router: Router) { }

  ngOnInit(): void {
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