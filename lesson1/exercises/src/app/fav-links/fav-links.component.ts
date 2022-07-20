import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }
  favLinks = ['https://www.google.com/','https://mail.google.com/mail/u/0/']
  ngOnInit() {
  }

}
