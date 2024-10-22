import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration',
    standalone: true
})
export class DurationPipe implements PipeTransform {
    transform(totalMonths: number): string {
        if (totalMonths === null || totalMonths === undefined || totalMonths < 0) return '';

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

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
