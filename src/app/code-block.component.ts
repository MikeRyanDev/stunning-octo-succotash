import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngrx-code-block',
  template: `
    <pre class="prettyprint">{{ code }}</pre>
  `,
  styleUrls: ['./code-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeBlockComponent {
  @Input()
  code: string;
}
