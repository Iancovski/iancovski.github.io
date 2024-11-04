import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'projects-page',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
