import { Component, Input } from '@angular/core';
import { Notice } from '../notices.component';

@Component({
  selector: 'card-notices',
  templateUrl: './card-notices.component.html',
  styleUrls: ['./card-notices.component.scss']
})
export class CardNoticesComponent {
  @Input() notice:Notice | undefined;

  isHovered: boolean = false;

  constructor() {}

  expandContainer(): void {
    this.isHovered = true;
  }

  shrinkContainer(): void {
    this.isHovered = false;
  }

  truncateSummary(summary: string | undefined): string {
  
    if (summary) {
      const words = summary.split(' ');
  
      if (words.length > 38) {
        const truncatedSummary = words.slice(0, 38).join(' ');
        return truncatedSummary + (truncatedSummary.length < summary.length ? '...' : '');
      }
    }
    return summary || '';
  }
  
  
}
