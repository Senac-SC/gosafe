import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {

  public nome = "";
  public cidade = "";

  constructor() { }

  ngOnInit() {
  }

}
