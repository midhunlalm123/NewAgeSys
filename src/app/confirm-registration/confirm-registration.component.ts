import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {
  address: any;
  country: any;
  email: any;
  Image: any;
  phone: any;
  state: any;
  age: any;
  stringConcat: any;
  @Output() DataEmitterback: EventEmitter<any> = new EventEmitter;
  @Input() regUserData: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.regUserData)
    let chipsetValueArray = this.regUserData.chipsetValue;
    if (chipsetValueArray.length > 0) {
      let stringConcat = '';
      let arraychipValue: any[] = [];
      for (let index = 0; index < chipsetValueArray.length; index++) {
        if (index == chipsetValueArray.length - 2) {
          stringConcat = stringConcat + chipsetValueArray[index].name + " and ";
        } else {
          stringConcat = stringConcat + chipsetValueArray[index].name + ", ";
        }
      }
      this.stringConcat = stringConcat
      console.log(stringConcat)
    }
  }
  confirmAllData() {
    this.router.navigate(['/sucess'])
  }
  backtoEdit() {
    this.DataEmitterback.emit(this.regUserData)
  }

}
