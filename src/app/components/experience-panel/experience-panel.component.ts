import { Component, Input, OnInit } from '@angular/core';
import { MonthYearPipe } from '../../pipes/month-year.pipe';
import { DurationPipe } from '../../pipes/duration.pipe';
import { NgClass } from '@angular/common';

@Component({
    selector: 'experience-panel',
    standalone: true,
    imports: [MonthYearPipe, DurationPipe, NgClass],
    templateUrl: './experience-panel.component.html',
    styleUrl: './experience-panel.component.scss'
})
export class ExperiencePanelComponent implements OnInit {
    @Input() startDate: string = '';
    @Input() endDate: string = '';
    @Input() title: string = '';
    @Input() company: string = '';
    @Input() expanded: boolean = false;

    monthsBetween: number = 0;

    ngOnInit(): void {
        const startDate = new Date(this.startDate);
        let endDate: Date;

        if (this.endDate) {
            endDate = new Date(this.endDate);
        } else {
            endDate = new Date();
        }

        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();
        const endYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();

        const yearDiff = endYear - startYear;
        const monthDiff = endMonth - startMonth;

        this.monthsBetween = yearDiff * 12 + monthDiff;
    }
}
