import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'experience-card',
    standalone: true,
    imports: [NgClass],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
    @Input() pretitle: string = '';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() expanded: boolean = false;
}
