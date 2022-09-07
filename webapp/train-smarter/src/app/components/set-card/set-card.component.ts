import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss'],
})
export class SetCardComponent implements OnInit {

  @Input() setArray;
  @Output() newSetArray = new EventEmitter<string>();
  setForm: FormGroup;
  displayForm;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit() {}

  newSet() {
    this.generateSetFormgroup();
    this.displayForm = true;
  }

  abbortSet() {
    this.displayForm = false;
    this.newSetArray.emit(JSON.stringify(this.setArray));
    this.generateSetFormgroup();
  }

  generateSetFormgroup() {
    this.setForm = this.setForm = this.formbuilder.group({
      setnumber: new FormControl(`${this.setArray.length + 1}`, []),
      repetition: new FormControl('', [Validators.required, Validators.pattern('[0-9]{2}')]),
      weight: new FormControl('', [])
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
}
