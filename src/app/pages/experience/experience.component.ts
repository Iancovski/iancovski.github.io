import { Component } from '@angular/core';
import { ExperiencePanelComponent } from "../../components/experience-panel/experience-panel.component";

@Component({
    selector: 'experience-page',
    standalone: true,
    imports: [ExperiencePanelComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
