import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'form-field',
    standalone: true,
    imports: [ReactiveFormsModule, NgClass],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
    @Input() label: string = '';
    @Input() control!: FormControl;
    @Input() fieldId: string = '';
    @Input() type: FieldType = 'input';
}

type FieldType = 'input' | 'textarea';
