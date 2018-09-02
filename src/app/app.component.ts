import { Component } from '@angular/core';

const EFFECTS_EXAMPLE = `@Effect() search$ = this.actions$.pipe(
  ofType<SearchAction>(BookActions.Types.Search),
  map(action => action.query),
  switchMap(query =>
    this.googleBooksService.search(query)
  ),
);
`;

const SCHEMATICS_EXAMPLE = `$ ng g store State --root --module app.module.ts
    create src/app/reducers/index.ts
    update src/app/app.module.ts`;

@Component({
  selector: 'ngrx-root',
  template: `
    <header>
      <img src="/assets/badge.svg"/>
      <h1>NgRx</h1>
      <h2>Reactive State for Angular</h2>
      <button mat-raised-button color="accent" class="cta">
        Get Started
      </button>
    </header>

    <div class="callout">
      <div class="callout-description">
        <h3>Manage State</h3>
        <p>
          NgRx Store provides reactive state management for
          Angular apps inspired by Redux. Unify the events in your
          application and derive state using RxJS.
        </p>
      </div>

      <ngrx-store-animation class="callout-figure"></ngrx-store-animation>
    </div>

    <div class="callout">
      <div class="callout-description">
        <h3>Isolate Side Effects</h3>
        <p>
          NgRx Effects gives you a framework for isolating side effects
          from your components by connecting observables of
          actions to your store.
        </p>
      </div>

      <ngrx-code-block class="callout-figure" [code]="effectsExample"></ngrx-code-block>
    </div>

    <div class="callout">
      <div class="callout-description">
        <h3>Unlock Productivity</h3>
        <p>
          NgRx Schematics helps you avoid writing common boilerplate 
          and instead focus on building your application
        </p>
      </div>
      <ngrx-code-block class="callout-figure" [code]="schematicsExample"></ngrx-code-block>
    </div>

    <div class="sponsors">
      <h3>Supported by the Community</h3>
      <button mat-raised-button color="primary" class="cta">
        Sponsor NgRx
      </button>
    </div>

    <div class="final-callout">
      <div class="content">
        <h3>Start building Reactive Angular applications today</h3>
        <button mat-raised-button color="accent" class="cta">
          Get Started
        </button>
      </div>
    </div>

    <footer>
      <nav>
        <a href="#">Get Started</a>
        <a href="#">Docs</a>
        <a href="#">GitHub</a>
        <a href="#">Donate</a>
      </nav>

      <span class="copyright">
        ©2018. Code licensed under the MIT License. Documentation licensed under CC BY 4.0.
      </span>
    </footer>
    
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  effectsExample = EFFECTS_EXAMPLE;
  schematicsExample = SCHEMATICS_EXAMPLE;
}
