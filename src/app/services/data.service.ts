import { Injectable } from '@angular/core';
import {Questions} from '../models/Questions'
@Injectable()
export class DataService {
questions:Questions[];
  constructor() { 
  /*this.questions=[{
    q:'what is your name?',
    a:'my name is rishabh',
    hide:true
  },
{
  q:'what is your age?',
  a:'my age is 22',
  hide:true
},
{
q:'what is your fav cartoon?',
a:'my fav cartoon is dbz',
hide:true
}]; */
  }

getQuestion(){
  if(localStorage.getItem('abcd')===null){
    this.questions=[];
  }
  else{
    this.questions=JSON.parse(localStorage.getItem('abcd'));
  }
  return this.questions;
}
addQuestion(question:Questions){
  this.questions.unshift(question);
  let questions;
  if(localStorage.getItem('abcd')===null){
    questions=[];
    questions.unshift(question);
    localStorage.setItem('abcd',JSON.stringify(questions));
  }
  else{
    questions = JSON.parse(localStorage.getItem('abcd'));
    questions.unshift(question);
    localStorage.setItem('abcd',JSON.stringify(questions));
  }
  
}
removeQuestion(question:Questions){
  for(let i=0;i<this.questions.length;i++){
    if(question==this.questions[i]){
      this.questions.splice(i,1);
      localStorage.setItem('abcd',JSON.stringify(this.questions));
    }}}
  
  }
