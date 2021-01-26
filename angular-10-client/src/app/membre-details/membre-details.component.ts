import { Component, OnInit } from '@angular/core';
import { Membre } from '../models/Membre';
import { ActivatedRoute } from '@angular/router';
import { MembreService } from '../_services/membre.service';

@Component({
  selector: 'app-membre-details',
  templateUrl: './membre-details.component.html',
  styleUrls: ['./membre-details.component.css']
})
export class MembreDetailsComponent implements OnInit {

  id: number
  membre: Membre
  constructor(private route: ActivatedRoute, private membreService: MembreService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.membre = new Membre();
    this.membreService.getMembreById(this.id).subscribe( data => {
      this.membre = data;
    });
  }

}
