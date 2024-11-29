import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'form-field',
    standalone: true,
    imports: [ReactiveFormsModule, NgClass],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.scss'
})
export class FormFieldComponent implements OnInit {
    @Input() label: string = '';
    @Input() control!: FormControl;
    @Input() fieldId: string = '';
    @Input() type: FieldType = 'input';
    @Input() maxLength!: number;

    protected required: boolean = false;

    ngOnInit(): void {
        this.required = this.control.hasValidator(Validators.required);
    }
}

type FieldType = 'input' | 'textarea';
