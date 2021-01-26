import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { FactureService } from '../../_services/facture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {
  facture: Facture = new Facture();
  constructor(private factureService: FactureService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFacture(){
    this.factureService.createFacture(this.facture).subscribe( data =>{
      console.log(data);
      this.goToFactureList();
    },
    error => console.log(error));
  }

  goToFactureList(){
    this.router.navigate(['admin/factures']);
  }
  
  onSubmit(){
    console.log(this.facture);
    this.saveFacture();
  }
}