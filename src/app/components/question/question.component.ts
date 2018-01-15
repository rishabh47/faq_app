import { Component, OnInit, Input } from '@angular/core';
import {Questions} from '../../models/Questions'
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html', 
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input('question') question:Questions
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
removeQuestion(question){
  this.dataService.removeQuestion(question);
}
}
