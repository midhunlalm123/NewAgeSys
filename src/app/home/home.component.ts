import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Index: any = 1;
  allData: any;
  Name: any;
  LastName: any;
  Age: any;
  Email: any;
  image: any;
  Phone: any;
  State: any;
  getallData: any;

  constructor() { }

  ngOnInit(): void {
    this.Index = 0;
  }
  getValue(event: any, stepper: any) {
    this.allData = event;
    console.log(this.allData)
    this.Name = this.allData.Name;
    this.LastName = this.allData.LastName
    this.Age = this.allData.age
    this.Email = this.allData.Email
    this.image = this.allData.Image
    this.Phone = this.allData.Phone
    this.State = this.allData.State
    stepper.next();
    this.Index = stepper.selectedIndex;

  }
  getValueback(event: any, stepper: any) {
    this.getallData = event;
    stepper.previous();
    this.Index = stepper.selectedIndex;
  }

}
