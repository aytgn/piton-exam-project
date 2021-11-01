import { Component, Input } from '@angular/core';
import { Section } from 'src/app/core/models/section.model';

@Component({
  selector: 'app-section-bar',
  templateUrl: './section-bar.component.html',
  styleUrls: ['./section-bar.component.css'],
})
export class SectionBarComponent {
  @Input() section: Section = { id: 0, name: '', videoPath: '' };
  @Input() i: number = 0;
}
