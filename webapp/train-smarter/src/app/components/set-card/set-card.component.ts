import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {set} from "@angular/fire/database";

@Component({
  selector: 'app-set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss'],
})
export class SetCardComponent implements OnInit {

  @Input() setArray;
  //Damit am Ende die Exercise und die Satzangaben im Trainingsplan gesetzt werden können
  @Output() newSetArray = new EventEmitter<string>();
  setForm: FormGroup;
  setEditForm: FormGroup;
  displayAddForm;
  displayEditForm = [];
  editSet = false;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.displayAddForm = false;
    for(const index of this.setArray) {
      this.displayEditForm.push(false);
    }
  }

  newSet() {
    this.generateSetFormgroup();
    this.displayAddForm = true;
  }

  abbortSet() {
    this.displayAddForm = false;
    this.newSetArray.emit(JSON.stringify(this.setArray));
    this.generateSetFormgroup();
  }

  generateSetFormgroup() {
    this.setForm = this.formbuilder.group({
      setnumber: new FormControl({value: `${this.setArray.length + 1}`, disabled: true}, []),
      repetition: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}')]),
      weight: new FormControl('', [])
    });
  }

  generateEditSetFormgroup(index) {
    this.setEditForm = this.formbuilder.group({
      setnumber: new FormControl({value: `${this.setArray[index-1].setnumber}`, disabled: true}, []),
      repetition: new FormControl(`${this.setArray[index-1].repetition}`, [Validators.required, Validators.pattern('[0-9]{2}')]),
      weight: new FormControl(`${this.setArray[index-1].weight}`, [])
    });
  }

  addSet() {
    const data = this.setForm.getRawValue();
    this.setArray.push({
      setnumber: data.setnumber,
      repetition: data.repetition,
      weight: data.weight
    });
    this.abbortSet();
  }

  deleteSetClick(setNumber) {
    this.setArray = this.setArray.filter(item => item.setnumber !== setNumber);
    this.newSetArray.emit(JSON.stringify(this.setArray));
  }

  editSetClick(setNumber) {
    this.generateEditSetFormgroup(setNumber);
    this.displayEditForm[setNumber-1] = true;
    this.editSet = true;
  }

  safeChanges(setNumber) {
    const data = this.setEditForm.getRawValue();
    this.setArray[setNumber-1] = data;
    this.newSetArray.emit(JSON.stringify(this.setArray));
    this.displayEditForm[setNumber-1] = false;
    this.editSet = false;
  }

  abortChanges(setNumber) {
    this.displayEditForm[setNumber-1] = false;
    this.editSet = false;
  }
}
