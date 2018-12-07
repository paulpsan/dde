import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit, AfterViewInit {
  constructor() {
    ContentTools.StylePalette.add([
      new ContentTools.Style('Author', 'author', ['h1'])
    ]);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');
  }
}
