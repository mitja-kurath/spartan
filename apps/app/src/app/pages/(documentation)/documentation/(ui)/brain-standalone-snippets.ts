export const brainInstallNpm = `npm install @spartan-ng/brain`;

export const brainInstallYarn = `yarn add @spartan-ng/brain`;

export const brainInstallPnpm = `pnpm add @spartan-ng/brain`;

export const brainInstallBun = `bun add @spartan-ng/brain`;

export const brainSelectComponent = `import { Component, effect, model } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';

@Component({
  selector: 'app-root',
  imports: [BrnSelectImports],
  template: \`
    <brn-select [(value)]="selectValue" placeholder="Select an option">
      <button brnSelectTrigger>
        <brn-select-value />
      </button>
      <brn-select-content>
        <div brnOption value="foo">Hello</div>
        <div brnOption value="bar">World</div>
      </brn-select-content>
    </brn-select>
  \`,
})
export class AppComponent {
  protected selectValue = model<string>();

  constructor() {
    effect(() => console.log(this.selectValue()));
  }
}`;

export const brainSelectCss = `/* Style the trigger */
button[brnSelectTrigger] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  background: white;
  cursor: pointer;
}

button[brnSelectTrigger][data-state="open"] {
  outline: 2px solid #3b82f6;
}

/* Style the dropdown */
brn-select-content {
  display: block;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  background: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 0.25rem;
  min-width: 8rem;
}

/* Style options */
[brnOption] {
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

[brnOption]:hover,
[brnOption][data-highlighted] {
  background: #f3f4f6;
}

/* Show checkmark on selected option */
[brnOption][aria-selected="true"]::after {
  content: "✓";
}`;

export const brainDialogComponent = `import { Component } from '@angular/core';
import { BrnDialogImports } from '@spartan-ng/brain/dialog';

@Component({
  selector: 'app-dialog-demo',
  imports: [BrnDialogImports],
  template: \`
    <brn-dialog>
      <button brnDialogTrigger>Open dialog</button>
      <brn-dialog-overlay />
      <brn-dialog-content>
        <h2 brnDialogTitle>Are you sure?</h2>
        <p brnDialogDescription>This action cannot be undone.</p>
        <button brnDialogClose>Cancel</button>
        <button brnDialogClose>Confirm</button>
      </brn-dialog-content>
    </brn-dialog>
  \`,
})
export class DialogDemoComponent {}`;

export const brainCheckboxComponent = `import { Component, model } from '@angular/core';
import { BrnCheckboxImports } from '@spartan-ng/brain/checkbox';

@Component({
  selector: 'app-checkbox-demo',
  imports: [BrnCheckboxImports],
  template: \`
    <brn-checkbox [(ngModel)]="checked" id="agree">
      <button brnCheckboxButton aria-label="Agree to terms">
        <brn-checkbox-checkicon />
      </button>
    </brn-checkbox>
    <label for="agree">I agree to the terms</label>
  \`,
})
export class CheckboxDemoComponent {
  protected checked = model(false);
}`;

export const brainDataAttributes = `/* data-state */
[data-state="open"]   { /* open panels, dropdowns, dialogs */ }
[data-state="closed"] { /* closed state */ }
[data-state="checked"]   { /* checked checkboxes */ }
[data-state="unchecked"] { /* unchecked checkboxes */ }

/* ARIA attributes */
[aria-selected="true"]  { /* selected options in listboxes */ }
[aria-disabled="true"]  { /* disabled items */ }
[aria-expanded="true"]  { /* expanded triggers */ }
[aria-checked="true"]   { /* checked toggle/checkbox */ }

/* data-highlighted */
[data-highlighted] { /* keyboard-focused option in select/combobox */ }`;
