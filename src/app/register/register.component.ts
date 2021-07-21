import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Interests {
  name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FormValues: any;
  constructor(private fb: FormBuilder) { }
  public country: any[] = [];
  public stateIndia: any[] = [];
  public imageArray: any[] = [];
  public stateUS: any[] = [];
  public state: any[] = [];
  image: any;
  stepsArray: any;
  registerForm!: FormGroup;
  age = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  interests: Interests[] = [];
  @Output() DataEmitter: EventEmitter<any> = new EventEmitter();
  @Input() data: any;
  ngOnInit(): void {
    this.validateForms();
    Image
    if (this.data) {
      this.registerForm.patchValue(
        {
          name: this.data.Name,
          lastname: this.data.LastName,
          age: this.data.age,
          email: this.data.Email,
          phone: this.data.Phone,
          address: this.data.Address,
          country: this.data.Country,
          state: this.data.State,
          companyaddress1: this.data,
        }
      )
      this.interests = this.data.chipsetValue;
      this.image = this.data.Image
    }
    this.country = [
      { viewValue: '--select Country--' },
      { viewValue: 'India' },
      { viewValue: 'US' },
    ]
    this.stateIndia = [
      { viewValue: '--select State--' },
      { viewValue: 'Kerala' },
      { viewValue: 'Tamil Nadu' },
    ]
    this.stateUS = [
      { viewValue: '--select State--' },
      { viewValue: 'California' },
      { viewValue: 'American Jun' },
    ]
  }

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1, legend: '15-20' },
      { value: 2, legend: '21-25' },
      { value: 3, legend: '26-30' },
      { value: 4, legend: '31 & Above' }

    ]
  };

  changeListener($event: any): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  getStates() {
    if (this.registerForm.value.country == 'India') {
      this.state = this.stateIndia
    } else {
      this.state = this.stateUS
    }
  }

  onSubmit() {
    if(this.registerForm.invalid){
      return ;
    }
    else{
      let currentAge = this.registerForm.value.age;
      if (currentAge == 0) {
        this.age = "15-20";
      }
      else if (currentAge == 2) {
        this.age = "21-25";
      }
      else if (currentAge == 3) {
        this.age = "26-30";
      }
      else if (currentAge == 4) {
        this.age = "31 & Above";
      }
  
      this.FormValues = {
        Name: this.registerForm.value.name,
        LastName: this.registerForm.value.lastname,
        Image: this.image,
        Email: this.registerForm.value.email,
        Phone: this.registerForm.value.phone,
        age: this.age,
        Address: this.registerForm.value.address,
        Country: this.registerForm.value.country,
        State: this.registerForm.value.state,
        chipsetValue: this.interests,
      }
      this.DataEmitter.emit(this.FormValues)
    }

  }
  validateForms() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      chipsetValue: ['']
    })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  get f() { return this.registerForm.controls; }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our interests
    if (value) {
      this.interests.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(interests: Interests): void {
    const index = this.interests.indexOf(interests);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }


}
