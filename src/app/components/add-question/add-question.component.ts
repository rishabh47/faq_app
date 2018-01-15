import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import {Questions} from '../../models/Questions';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
@Output() questionAdded = new EventEmitter<Questions>();
  q:string;
a:string;

  constructor() { }

  ngOnInit() {
  }
addQuestion(){
this.questionAdded.emit({q:this.q, a:this.a,hide:true});
}
}
