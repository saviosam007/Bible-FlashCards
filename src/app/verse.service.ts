import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerseService {
  constructor(private http: HttpClient) {}
  getVerses() {
    // return this.http.get('https://bible-api.com/' + verse + '?translation=kjv');
    return this.http.get(
      'https://my-json-server.typicode.com/saviosam007/bibleverse/db'
    );
  }
  transformDataToCards(data) {
    let front = {},
      back = {},
      flashcardsData = [];
    for (let i = 0; i < data.length; i++) {
      front['title'] = data[i]['title'];
      back['title'] = data[i]['content'];
      flashcardsData.push({ front: front, back: back });
      (front = {}), (back = {});
    }
    return flashcardsData;
  }
}
