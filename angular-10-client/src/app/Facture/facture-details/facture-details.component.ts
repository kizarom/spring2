import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../../_services/facture.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {

  id: number
  facture: Facture
  content: any;
  constructor(private route: ActivatedRoute, private userService:UserService,
    private router: Router,private factureService: FactureService) { }

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

    this.facture = new Facture();
    this.factureService.getFactureById(this.id).subscribe( data => {
      this.facture = data;
    });
  }

}