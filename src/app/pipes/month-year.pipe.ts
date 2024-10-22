import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'monthYear',
    standalone: true
})
export class MonthYearPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) return 'Today';

        const date = new Date(value);
        const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
}
