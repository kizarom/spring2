import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from '../../_services/facture.service';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {

  id: number
  facture: Facture
  constructor(private route: ActivatedRoute, private factureService: FactureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.facture = new Facture();
    this.factureService.getFactureById(this.id).subscribe( data => {
      this.facture = data;
    });
  }

}