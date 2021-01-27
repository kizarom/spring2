import { Component, OnInit } from '@angular/core';
import { Facture } from '../../models/Facture';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from '../../_services/facture.service';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

  id: number;
  facture: Facture = new Facture();
  content: any;
  constructor(private factureService: FactureService,
    private route: ActivatedRoute,private userService:UserService,
    private router: Router) { }

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