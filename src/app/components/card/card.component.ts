import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'card',
    standalone: true,
    imports: [NgClass],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() banner: string = '';
    @Input() pretitle: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() expanded: boolean = false;
}
