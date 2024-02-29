import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MemoryProfileSummary} from './memory_profile_summary';

@NgModule({
  declarations: [MemoryProfileSummary],
  imports: [CommonModule, MatCardModule, MatTooltipModule, MatIconModule],
  exports: [MemoryProfileSummary]
})
export class MemoryProfileSummaryModule {
}
