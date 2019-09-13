import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class contactCardComponent implements OnInit {
  @Input() contacts: any[] = [];

  constructor() { }

  ngOnInit() { }

}
