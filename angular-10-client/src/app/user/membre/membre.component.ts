import { Component, OnInit } from '@angular/core';
import { Membre } from '../../models/Membre';
import { MembreService } from '../../_services/membre.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  membre: Membre = new Membre();
  message:string;
  constructor(private membreService: MembreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.membreService.createMembre(this.membre).subscribe( data =>{
      console.log(data);
      this.showinfoAlert();
    },
    error => console.log(error));
  }

  goToMembreList(){
    window.location.reload();
  }
  
  onSubmit(){
    console.log(this.membre);
    this.saveEmployee();
    
  }

  showinfoAlert(){
    if (this.membre.modepayement === 'PP') {
        this.message = 'Welcome to ACMDH.A PayPal window is opened where you can pay your annual adhesion.Thank you. ';
        if (this.membre.categorie === 'S') {
            window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V97NTJKKPAF6J");
        } else {
            window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KU5HEZU6ASKEC");
        }
    }
    if (this.membre.modepayement=== 'DD') {
        this.message = 'Welcome to ACMDH.The full account number that you can use for your transfer to pay your annual adhesion is 00931 010 23 05917.Thank you. ';
    }
    if (this.membre.modepayement=== 'CA') {
        this.message = "visit our association";
    }
  Swal.fire({
    text:this.message,
    icon:"info",
    confirmButtonText:"ok",
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire({
        text:"vous êtes maintenant un membre temporaire jusqu'à ce que l'administrateur accepte votre demande",
        icon:"success",
        confirmButtonText:"ok",
      }).then((result)=>{
        if(result.isConfirmed){
          window.location.reload();
        }
      })
      }
  })
  }
}
