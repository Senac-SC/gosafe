import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';
import { Post } from '../shared/interfaces/post';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {



  public nome = "";
  public cidade = "";

  constructor(public ngFirestore: AngularFirestore, public post: Post, fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  Publica(form){
  }

}
