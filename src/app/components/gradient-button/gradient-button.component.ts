import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'gradient-button',
    standalone: true,
    imports: [
        NgClass,
        LoaderComponent
    ],
    templateUrl: './gradient-button.component.html',
    styleUrl: './gradient-button.component.scss'
})
export class GradientButtonComponent {
    @Input() color: 'primary' | 'secondary' = 'primary'
    @Input() loading: boolean = false;

    @Output() onClick: EventEmitter<null> = new EventEmitter;

    click() {
        if (!this.loading) {
            this.onClick.emit();
        }
    }
}
