import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { FactureService } from '../../_services/facture.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

  id: number;
  facture: Facture = new Facture();
  constructor(private factureService: FactureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.factureService.getFactureById(this.id).subscribe(data => {
      this.facture = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.factureService.updateFacture(this.id, this.facture).subscribe( data =>{
      this.goToFacturesList();
    }
    , error => console.log(error));
  }

  goToFacturesList(){
    this.router.navigate(['admin/factures']);
  }
}