import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Questions} from '../../models/Questions' 
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
questions:Questions[];
  constructor(public data:DataService) { 
    
  }

  ngOnInit() {
    this.questions=this.data.getQuestion();
  }
addQuestion(question:Questions){
  this.data.addQuestion(question);
}
}
 