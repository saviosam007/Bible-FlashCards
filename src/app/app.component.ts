import { Component, OnInit } from '@angular/core';
import { VerseService } from './verse.service';
import { verses } from './verse.constants';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private verses = verses;
  public flashcardData: any;

  constructor(private verseService: VerseService) {}
  ngOnInit() {
    let front = {};
    let back = {};
    let flashcardsData = [];

    this.verseService.getVerses().subscribe((data) => {
      console.log(data);
      this.flashcardData = this.verseService.transformDataToCards(
        data['verses']
      );
    });
  }
  shuffle() {
    this.flashcardData = this.flashcardData.sort((a, b) => 0.5 - Math.random());
  }
}
