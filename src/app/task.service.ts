import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 4;

  public task = [
   {
     "name" : "Finish SL Assignment",
     "id" : 1,
     "details" : "Deadline : 12 Nov 2021"
   },
   {
     "name" : "Finish OS LAB",
     "id" : 2,
     "details" : "Deadline : 13 Nov 2021"
   },
   {
     "name" : "Submit assignments",
     "id" : 3,
     "details" : "Deadline : 14 Nov 2021"
   },
   {
     "name" : "I will go to the gym",
     "id" : 4,
     "details" : "Deadline : 15 Nov 2021"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
