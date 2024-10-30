import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'experience-page',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    getPeriod(start: string, end?: string) {
        const startDate = new Date(start);
        const endDate = end ? new Date(end) : new Date();

        const startYear = startDate.getFullYear();
        const startMonth = startDate.getMonth();

        const endYear = endDate.getFullYear();
        const endMonth = endDate.getMonth();

        const yearDiff = endYear - startYear;
        const monthDiff = endMonth - startMonth;

        const monthsBetween = yearDiff * 12 + monthDiff;

        return `${this.formatDate(startDate)} - ${this.formatDate(end ? endDate : undefined)} (${this.getDuration(monthsBetween)})`
    }

    private formatDate(date?: Date) {
        if (!date) return 'Today';

        const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    private getDuration(months: number) {
        const years = Math.floor(months / 12);
        months = months % 12;

        let result = '';

        if (years > 0) {
            result += years === 1 ? `${years} year` : `${years} years`;
        }

        if (months > 0) {
            if (result) result += ' ';
            result += months === 1 ? `${months} month` : `${months} months`;
        }

        return result || '0 months';

    }
}
