import { Component, VERSION } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Match Update ';
  matchListUrl = 'https://feed-uat.decimalcricket.com/api/match/list';
  matchListData;
  matchListData2;
  displayedColumns;
  currentClicked;
  getMatchData() {
    return this.http.get(this.matchListUrl, {
      headers: {
        'X-API-KEY': 'sZruQ2DOlsBDy8zaQxXQ6mAzCZ856LpdEnO2IxuLNuM-UAT',
      },
    });
  }
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getMatchData().subscribe((res) => {
      console.log(res);
      this.matchListData = res['matches'].map((row) => {
        return {
          id: row['id'],
          name: row.name,
          competition: row.competition,
          status: row.status,
        };
      });
      this.matchListData2 = res['matches'];
    });
    this.displayedColumns = ['name', 'competition', 'status'];
  }
  hanldleClick(data) {
    this.currentClicked = data;
  }
}
