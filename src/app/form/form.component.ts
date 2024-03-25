import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  student: Student[] = [ 
    {enrolment:1, name:"Gabriel", course:"computer engineer"},
    {enrolment:2, name:"Nina", course:"english"},
    {enrolment:3, name:"Larry the Bird", course:"Seeds"},
  ];

}
