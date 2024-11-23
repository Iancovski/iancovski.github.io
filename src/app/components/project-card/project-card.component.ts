import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'project-card',
    standalone: true,
    imports: [NgClass],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    @Input() banner: string = '';
    @Input() title: string = '';
    @Input() category: string = '';
    @Input() expanded: boolean = false;
}
