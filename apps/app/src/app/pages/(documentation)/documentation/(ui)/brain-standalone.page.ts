import type { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { PackageInstallerTabs } from '@spartan-ng/app/app/shared/layout/package-installer-tabs';
import { HlmAlert, HlmAlertDescription, HlmAlertTitle } from '@spartan-ng/helm/alert';
import { hlmCode, hlmP } from '@spartan-ng/helm/typography';
import { Code } from '../../../../shared/code/code';
import { MainSection } from '../../../../shared/layout/main-section';
import { PageBottomNav } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav';
import { PageBottomNavLink } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link';
import { PageNav } from '../../../../shared/layout/page-nav/page-nav';
import { SectionIntro } from '../../../../shared/layout/section-intro';
import { SectionSubHeading } from '../../../../shared/layout/section-sub-heading';
import { SectionSubSubHeading } from '../../../../shared/layout/section-sub-sub-heading';
import { metaWith } from '../../../../shared/meta/meta.util';
import {
	brainCheckboxComponent,
	brainDataAttributes,
	brainDialogComponent,
	brainSelectComponent,
	brainSelectCss,
} from './brain-standalone-snippets';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Brain Only' },
	meta: metaWith(
		'spartan - Brain Only',
		'Use @spartan-ng/brain without Tailwind or Helm for a fully custom styling approach.',
	),
	title: 'spartan - Brain Only',
};

@Component({
	selector: 'spartan-brain-standalone',
	imports: [
		MainSection,
		SectionIntro,
		SectionSubHeading,
		SectionSubSubHeading,
		PageNav,
		PageBottomNav,
		PageBottomNavLink,
		Code,
		PackageInstallerTabs,
		HlmAlert,
		HlmAlertDescription,
		HlmAlertTitle,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Brain Only"
				lead="Use accessible primitives without Tailwind, Nx, or Helm."
			/>

			<p class="${hlmP}">
				<code class="${hlmCode}">&#64;spartan-ng/brain</code>
				is a standalone npm package that provides the accessible behavior layer of spartan/ui. You can use it
				independently — without Tailwind CSS, without the CLI, and without copying any helm styles into your project.
			</p>

			<p class="${hlmP}">
				This makes brain suitable for any Angular project: those using other CSS frameworks, plain CSS, CSS Modules, or
				custom design systems.
			</p>

			<div hlmAlert class="mt-6">
				<h4 hlmAlertTitle>No Tailwind required</h4>
				<div hlmAlertDescription>
					<p>
						All
						<code class="${hlmCode}">brn-*</code>
						components ship completely unstyled. You bring your own CSS.
					</p>
				</div>
			</div>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>

			<p class="${hlmP}">Install the brain package directly — no CLI setup or init step required:</p>

			<spartan-package-installer-tab class="mt-4" package="brn" />

			<p class="${hlmP}">
				If any component uses overlays (select, dialog, popover, tooltip, dropdown), also install Angular CDK:
			</p>

			<spartan-package-installer-tab class="mt-4" package="cdk" />

			<spartan-section-sub-heading id="usage">Basic usage</spartan-section-sub-heading>

			<p class="${hlmP}">
				Import the barrel export for the component you want to use and add it to your
				<code class="${hlmCode}">imports</code>
				array. All
				<code class="${hlmCode}">brn-*</code>
				elements and directives are included.
			</p>

			<h3 spartanH4 id="select-example">Select</h3>

			<spartan-code class="mt-4" [code]="_brainSelectComponent" language="ts" fileName="app.ts" />

			<p class="${hlmP}">Style it with plain CSS using data attributes and ARIA attributes that brain applies automatically:</p>

			<spartan-code class="mt-4" [code]="_brainSelectCss" language="css" fileName="app.css" />

			<h3 spartanH4 id="dialog-example" class="mt-8">Dialog</h3>

			<spartan-code class="mt-4" [code]="_brainDialogComponent" language="ts" fileName="dialog-demo.ts" />

			<h3 spartanH4 id="checkbox-example" class="mt-8">Checkbox</h3>

			<spartan-code class="mt-4" [code]="_brainCheckboxComponent" language="ts" fileName="checkbox-demo.ts" />

			<spartan-section-sub-heading id="styling">Styling with data attributes</spartan-section-sub-heading>

			<p class="${hlmP}">
				Brain primitives communicate state through
				<code class="${hlmCode}">data-*</code>
				attributes and ARIA attributes on the host element. Target these in your CSS to style each state:
			</p>

			<spartan-code class="mt-4" [code]="_brainDataAttributes" language="css" />

			<p class="${hlmP}">
				This approach works with any styling solution — plain CSS, CSS Modules, SCSS, Tailwind, UnoCSS, or any other
				utility framework.
			</p>

			<spartan-section-sub-heading id="available-components">Available components</spartan-section-sub-heading>

			<p class="${hlmP}">
				Every component in spartan/ui has a corresponding brain primitive. The import path follows the pattern
				<code class="${hlmCode}">&#64;spartan-ng/brain/&lt;component-name&gt;</code>
				and the barrel export is named
				<code class="${hlmCode}">Brn&lt;ComponentName&gt;Imports</code>
				.
			</p>

			<p class="${hlmP}">Examples:</p>

			<ul class="my-4 ml-6 list-disc [&>li]:mt-2">
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/select</code>
					→
					<code class="${hlmCode}">BrnSelectImports</code>
				</li>
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/dialog</code>
					→
					<code class="${hlmCode}">BrnDialogImports</code>
				</li>
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/checkbox</code>
					→
					<code class="${hlmCode}">BrnCheckboxImports</code>
				</li>
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/accordion</code>
					→
					<code class="${hlmCode}">BrnAccordionImports</code>
				</li>
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/tabs</code>
					→
					<code class="${hlmCode}">BrnTabsImports</code>
				</li>
				<li>
					<code class="${hlmCode}">&#64;spartan-ng/brain/tooltip</code>
					→
					<code class="${hlmCode}">BrnTooltipImports</code>
				</li>
			</ul>

			<p class="${hlmP}">
				See the
				<a
					class="${hlmCode} underline"
					href="https://github.com/spartan-ng/spartan/tree/main/libs/brain"
					target="_blank"
					rel="noopener noreferrer"
				>
					brain source on GitHub
				</a>
				for the full list of available primitives.
			</p>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="update-guide" label="Update Guide" />
				<spartan-page-bottom-nav-link direction="previous" href="health-checks" label="Health Checks" />
			</spartan-page-bottom-nav>
		</section>

		<spartan-page-nav />
	`,
})
export default class BrainStandalonePage {
	protected readonly _brainSelectComponent = brainSelectComponent;
	protected readonly _brainSelectCss = brainSelectCss;
	protected readonly _brainDialogComponent = brainDialogComponent;
	protected readonly _brainCheckboxComponent = brainCheckboxComponent;
	protected readonly _brainDataAttributes = brainDataAttributes;
}
