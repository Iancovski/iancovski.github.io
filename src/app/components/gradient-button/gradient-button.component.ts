import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'gradient-button',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './gradient-button.component.html',
    styleUrl: './gradient-button.component.scss'
})
export class GradientButtonComponent {
    @Input() color: 'primary' | 'secondary' = 'primary'

    @Output() click: EventEmitter<null> = new EventEmitter;

    onClick() {
        this.click.emit();
    }
}
