import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit {
  statusList: string[] = ['All', 'Active', 'Completed'];
  selectedTab : string;
  titleModel: String;
  statusModel: String;
  notes: Notes[];

  constructor() {
    this.titleModel = '';
    this.statusModel = '';
 
    const defaultQuicknotes: Notes = {
      title: 'MyTitle',
      status: 'MyStatus'
    };
 
    this.notes = [defaultQuicknotes];
  }

  ngOnInit(): void {
  }

  createQuicknotes() {
 
    const newNotes: Notes = {
      title: this.titleModel,
      status: this.statusModel
    };
 
    this.notes.push(newNotes);
 
    // set the model values to '' again
    this.titleModel = this.statusModel = '';
  }
}

export interface Notes {
  title: String;
  status: String
}
