import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SkillCardComponent } from "../../components/skill-card/skill-card.component";

@Component({
    selector: 'about-page',
    standalone: true,
    imports: [NgClass, SkillCardComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    protected expanded: boolean = false;
}
