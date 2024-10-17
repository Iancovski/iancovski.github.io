import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
    selector: 'skill-card',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './skill-card.component.html',
    styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {
    @Input() icon: string = "";
    @Input() title: string = "";
}
