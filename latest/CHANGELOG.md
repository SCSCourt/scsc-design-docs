# Changelog

## 0.6.0

### Minor Changes

- 48d8f1e: **New entry point `@scscourt/design/docs` (experimental), and `scsc-markdown` moves into it (#1).** Markdown is now rendered GitHub's way with markdown-it, sanitized with DOMPurify, and slugged with github-slugger. Atlas, the knowledge base and the library now render documents the same way.

  What's new:

  - **GitHub features:** alerts (`> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`) and footnotes.
  - **New `scsc-markdown` inputs:**
    - `dropLeadingH1` and `stripFrontMatter`, for repository documents
    - `resolveLink` / `resolveImage`, to map relative links and images to your routes and files
    - `diagrams`
  - **A `rendered` event** with the document's headings.
  - **Mermaid diagrams**, drawn when the app opts in with `provideScscMermaid(() => import('mermaid').then((m) => m.default))`. The library never imports Mermaid itself. Install `mermaid@^11`: Mermaid 12 depends on `elkjs` (EPL-2.0), which isn't on the court's license allowlist, while 11 keeps ELK optional. The allowlist now also takes PSF-2.0 (Python's license; markdown-it uses `argparse` for its command-line tool) and the Unlicense (`robust-predicates`, in Mermaid's d3).
  - **`scsc-doc-toc`:** "On this page", with the current section marked `aria-current="location"`.
  - **`scscDocLinks`:** routes same-site links in rendered HTML through the router.
  - **Framework-free functions:** `scscRenderMarkdown`, `scscSanitizeHtml`, `scscHeadingText`, `scscCreateSlugger`, `scscIdForFragment` and `scscScrollToFragment`.

  **Migrating (breaking):**

  - **Imports:** `ScscMarkdown` and `ScscMarkdownInput` now come from `@scscourt/design/docs` instead of `@scscourt/design/code`. Their inputs are unchanged.
  - **Peers:**
    - Install `markdown-it` ^15, `markdown-it-footnote` ^4, `github-slugger` ^2 and `dompurify` ^3.4.
    - Keep `highlight.js` for code in documents.
    - `marked` is no longer a peer: remove it unless you use it yourself.
  - **Heading ids:**
    - They follow GitHub and carry the `user-content-` prefix: `## Filing fees` with `headingIds` and `headingIdPrefix="help-"` is now `id="user-content-help-filing-fees"` (was `help-filing-fees`).
    - Slugs keep accents and turn `&` into a double hyphen, as GitHub does.
    - In-document `#links` are rewritten to match. Use `scscIdForFragment()` to map a fragment yourself.
  - **Raw HTML** in the source is now dropped, not passed through a sanitizer. `<b>` and `<br>` in comments render as their text. Use Markdown (`**bold**`, and `breaks` for line breaks).
  - **Task list items** are read-only checkboxes named by the item, no longer images named "Done" / "Not done".
  - **Code highlighting** runs just after the document is in the page, so `@scscourt/design/code` (and highlight.js) loads only for documents with code.
  - **Removed:**
    - `slugify`, from `@scscourt/design/code`. Use `scscCreateSlugger().slug()`, or `scscHeadingText()` first for heading markdown.
    - From `ScscCodeLabels`: `write`, `preview`, `nothingToPreview`, `markdownSupported`, `characterCount`, `taskDone` and `taskOpen`. The markdown strings are in `ScscDocsLabels` (`SCSC_DOCS_LABELS_EN`), with alert, table, diagram and contents strings added.

  **Theme:** the code token colours (highlight.js classes and the JSON / XML tree tokens) and the `pre.scsc-code-surface` panel styles moved from the `/code` components into the theme file, so highlighted HTML is coloured anywhere the theme is loaded. The colours are unchanged.

### Patch Changes

- a618334: The packages' `homepage` now points at the repository (`https://github.com/SCSCourt/scsc-design#readme`).
  There is no hosted docs site: run the showcase (`npm start`, then `/docs`) or serve a release's
  `docs-site` build artifact.
- 77fdb83: `scsc-modal`: initial focus lands in the dialog again when it opens (#2, WCAG 2.4.3). Its fade gave
  `visibility` the same duration as the backdrop, so the dialog started each open `hidden`, and the
  browser ignores `focus()` on hidden content: focus stayed on `<body>`. The dialog now becomes
  visible at once (the fade out on close is unchanged). With reduced motion, or an app style that
  briefly hides the content, the modal waits for it to be visible, for up to about a second, before
  it moves focus. Apps that worked around this, for example by retrying `focus()` each frame, can
  drop the workaround.
- ca481dc: `scscCleanPastedHtml` (`@scscourt/design/editor`): comments in pasted HTML, including Word's
  conditional comments (`<![if !supportLists]>`), are now removed after the HTML is parsed rather
  than with a pattern over the string. Before, a nested or malformed comment such as `<!<!---->--`
  could leave a `<!--` behind that hid the rest of the pasted content. Found by CodeQL.
- fdf494c: `scsc-time-picker` (`@scscourt/design/pickers`): the hour, minute and AM/PM selects no longer clip
  their text. The browser sized each one a few pixels too narrow for "AM" or "00" in tabular
  figures, and WCAG text spacing (1.4.12) clipped it further. Each select now has a minimum width,
  about 75px at the default size, so the picker is roughly 30px wider overall.

## 0.5.0

The library targets **WCAG 2.2 AA** (plus a selected AAA subset). Most components are rebuilt
("v2"), and there are many new ones. Every automated gate passes:

- axe on every demo;
- a 2,400-check browser suite across three themes and two densities;
- contrast for all three themes.

The manual screen-reader and zoom protocol has **not** been run yet, so `compliance.yaml` DS-3 is
`partial`. See the [accessibility conformance report](/docs/foundations/accessibility/conformance).

### Upgrading from 0.4 (action required)

#### 1. Dependencies

- **`@angular/cdk` (^22) is a required peer.**
- **Charts:** if you import `@scscourt/design/charts`, run `npm i d3-scale d3-shape`. The entry
  point imports both, even for the sparkline.
- **Editor:**
  - Move `@tiptap/*` to **^3.30.5 or later**. Earlier `@tiptap/core` versions are affected by
    GHSA-cp6q-959q-f8rh and GHSA-j95f-988m-3j2f.
  - Add `@tiptap/extension-table` and `@tiptap/extension-text-align`.
- **Viewer:** `pdfjs-dist` must be **6.2.108 or later** (the peer floor). Earlier 5.6–6.2 releases allow arbitrary JavaScript execution when a malicious PDF is opened.
- **`theme.css`** now contains only the classes the library uses. Tailwind apps that
  `@source "../node_modules/@scscourt/design"` are unaffected. Apps that relied on `theme.css` for
  other DaisyUI or utility classes (`card-body`, `hero`, …) must add Tailwind.

#### 2. Removed or renamed

- **`scsc-data-table` is removed.** Use `scsc-table`; the full mapping table is under "Unified
  table" below.
  - `ScscColumn.numeric` → `type: 'number'`.
  - `[(sort)]` → `sort="single|multi"` + `defaultSort` + `(sortChange)`.
  - `sticky` → `stickyHeader`.
  - A fake "actions" column → `rowActions`.
  - `[slot=bulk]` → `bulkActions`.
- **`createTableState`** takes a single options object; the v1 signature is removed.
- **`scsc-app-shell` `[slot=mobile-sidebar]` is removed.** Delete the second `scsc-sidebar-nav`
  and your own "Open navigation" button: the shell and masthead handle the mobile drawer.
- **Charts:** `ariaLabel` → `label`.
- **Drawer:** `side="left|right"` → `"start|end"`. The old values still work, but are deprecated.

#### 3. Now required (a missing value fails to compile or logs a dev-mode warning)

| Component                               | Required                                                                   |
| --------------------------------------- | -------------------------------------------------------------------------- |
| `scsc-modal`                            | `title` (or `ariaLabelledby`)                                              |
| `scsc-drawer`                           | `title`                                                                    |
| charts (bar, line, pie, donut, heatmap) | `label`                                                                    |
| `scsc-progress`, `scsc-progress-ring`   | `label`                                                                    |
| `scsc-image-viewer`                     | `alt`                                                                      |
| `scsc-file-viewer`                      | `name`                                                                     |
| icon-only buttons                       | an accessible name. Tooltips are descriptions now and never name a control |

#### 4. Behaviour changes to check in your app and tests

- **Disabled states:**
  - Loading buttons, pagination Previous/Next at the ends, and viewer zoom/page limits use
    `aria-disabled="true"`, not `disabled`, so focus stays put.
  - Drop "Saving…" label swaps on loading buttons.
- **Menus and dropdowns** render their items in an overlay, and only while open. Click the
  trigger, then query the document for `role="menuitem"`.
- **Overlays:**
  - Modal and drawer headings are `<h2>` (`headingLevel` changes the rank).
  - Initial focus is the first control.
  - The dialog service renders through `scsc-modal`, and its dialogs now have a Close button.
- **Wizard** defaults to `linear`. It renders each step's `heading`/`description` and moves focus
  to it; move a heading you put at the top of a step into `heading`.
- **`scsc-steps`** no longer uses DaisyUI `.steps` classes.
- **Pickers:**
  - The date picker shows the formatted date, is an editable combobox, and an empty value is
    `null` (was `''`).
  - An empty time picker is `null`.
  - Label the pickers with `scsc-form-field`: the placeholder is no longer their name.
- **Combobox:** Clear writes `null`, and text that wasn't picked reverts on blur.
- **Tags input:** duplicates show a message.
- **Editor:**
  - Tab never indents (use Ctrl/⌘+] and Ctrl/⌘+[).
  - An empty value is `''`.
  - Only formats with a toolbar tool are allowed.
- **Data grid** is one tab stop; arrow keys move between cells, and cells are formatted by `type`.
- **Avatars:** initials avatars are named images. Mark them `decorative` beside a visible name.
- **Hidden text:** alert, banner and timeline text now includes a hidden tone word ("Error:" …),
  so exact `textContent` assertions need updating.
- **Sidebar:** `ScscNavItem.link` is optional, because groups are buttons.
- **Shells:** `scsc-split-shell` shows one pane at a time below `lg`; bind `[(detailOpen)]`.

### Highlights

- **New components:**
  - Data and forms: the unified `scsc-table` (row actions, bulk bar, filter bar, server mode,
    responsive stack), the Excel-style `scsc-data-grid`, combobox and autocomplete, date range
    picker, `scsc-tag-list` ("+N more"), CSV import.
  - Overlays and actions: `scsc-menu`, `ScscDialogService.open()`.
  - Chrome: nested sidebar, mega menu, mega footer.
  - Charts, viewer and editor: pie and multi-series charts, viewer controller and toolbar API,
    template editor.
  - Legal and session: legal notice (including the electronic-record disclaimer), consent banner,
    session timeout, print with court letterhead.
  - Foundations: breakpoints utilities, preferences store, runtime i18n (6 languages), change
    history, comments.
- **Docs:**
  - Grouped navigation with synonym search.
  - Layout & grid and Responsive foundation pages.
  - Decision guides.
  - `/docs/templates` (26 court page templates).
  - The accessibility conformance report.

### Fixed during release verification

- **Security:** the workspace moves to Angular 22.2.1 and pdf.js 6.3.289.
  - Angular 22.2.1 fixes a sanitization bypass in `@angular/core` (below 22.1), an SSR denial of
    service in `@angular/router` (below 22.2) and an `HttpTransferCache` leak in
    `@angular/common`. Apps should update too.
  - pdf.js 6.3.289 fixes arbitrary JavaScript on opening a malicious PDF (below 6.2.108). The
    viewer's `pdfjs-dist` peer is now `>=6.2.108`.
- **Viewers:** `scsc-document-viewer`, `scsc-image-viewer` and `scsc-file-viewer` never grow wider
  than their grid or flex track, so a wide page scrolls inside the viewer instead of the page
  (1.4.10).
- **Drawer:** the panel scrolls instead of clipping when enlarged text outgrows it (1.4.12).
- **Row actions:** they emit in the same tick when there is no confirm and the handler is synchronous.

### All changes

Each entry below is one changeset, with its own migration notes.

- 15b58fd: Add `scsc-csv-import` to `@scscourt/design/forms`: a four-step wizard (Upload, Map columns, Review, Confirm) that turns a CSV into typed records described by `ScscCsvField[]` (an `ScscField` plus `aliases`, `format`, `example` and `validate`). The delimiter (comma, semicolon, tab, pipe) and header row are detected; columns are matched to fields by name; required fields block Next until mapped; every row is coerced (numbers with separators and `$`, US and ISO dates to ISO, yes/no booleans, select options by value or label, email/phone/ZIP) and shown in a paged preview with per-cell errors, All / Only errors / Only valid filters and an inline Fix form. `(import)` emits `{ rows, skipped }`; the Confirm step downloads an error report CSV. Large files are parsed in slices on the main thread with progress and a Stop button (ng-packagr cannot ship a Web Worker in a library; pass `[parser]` to use your own worker).

  Also exported: an RFC 4180 parser and writer (`parseCsv`, `parseCsvAsync`, `detectDelimiter`, `detectHeader`, `toCsv`) and the mapping helpers (`autoMapColumns`, `coerceCsvValue`, `validateCsvRows`, `csvTemplate`, `csvErrorReport`).

- 15b58fd: Print (roadmap F2). `ScscPrintService.print(target, options)` prints an element, a `scscPrintRegion`
  or a `TemplateRef` without the app chrome, inside the court letterhead (seal, court name, title,
  case details, printed-at time, optional confidential banner, watermark, printed-by and address),
  through a hidden same-origin frame that copies the page styles and always uses the light theme.
  Options cover orientation, paper size (letter, legal, A4), margins and page numbers. "Page x of y"
  and the running title print in the page margins where CSS page margin boxes are supported
  (Chrome and Edge 131+); Firefox and Safari print without page numbers.

  New: the `scscPrint` directive (on a button; no value prints the whole page), `scscPrintRegion`,
  `scscPrintHide` and `scscPrintOnly`; `scsc-print-letterhead`; `scsc-print-preview`, a dialog with
  the printout at paper width and orientation and paper-size choices; and `provideScscPrint()`, so
  Ctrl+P on a dark page prints light.

  The theme gains print rules for Ctrl+P of any page: app chrome (masthead, navigation, sidebar,
  footer, toasts, skip links) is left out, shadows are dropped, table header rows repeat on each page
  and rows do not split, and `scsc-table` loses its scroll frame, sticky header, pinned columns, zebra
  fill, filters and pagination on paper. `[data-scsc-print="only"]` / `.scsc-print-only` are hidden on
  screen.

- 15b58fd: **New: session timeout (`provideScscSessionTimeout`, `ScscSessionTimeoutService`, `<scsc-session-timeout>`)** for WCAG 2.2.1 Timing Adjustable and 2.2.6 Timeouts. Configure `idleTimeout`, `warningBefore` (default 2 minutes, never under 20 s), `keepAlive`, `onTimeout` and an optional `absoluteTimeout`, then place `<scsc-session-timeout />` once in the signed-in shell. Before the limit an `alertdialog` counts down ("Stay signed in", focused first and calling `keepAlive` with a retry on failure, or "Sign out"); Esc and activity behind it do not dismiss or extend it. Screen readers hear the countdown on open and at 60, 30 and 10 seconds. Timers follow the clock and catch up when a throttled background tab returns, and tabs stay in step through `BroadcastChannel` (falling back to `storage` events): extending in one tab closes the warning in the others, and signing out in one signs out all. `pause()` / `resume()` hold the idle timeout during long uploads. Docs: Components → Overlays → Session timeout; `/console` now uses it (30 minutes, 2-minute warning).
- 1c3c738: **Combobox v2: the autocomplete.** `scsc-combobox` (docs: "Combobox & autocomplete") searches an
  options array or a server as you type.

  - `ScscOption<V>` gains `description`, `icon`, `group`, `disabled` and `keywords`; `{ value, label }`
    still works, and `V` defaults to `string`.
  - `options` also takes an async source, `(query, { signal }) => Promise | Observable`. It is debounced
    (`debounce`, 250 ms for sources), a new query aborts the previous request, and late results are
    dropped. `minChars`, `maxResults` and `displayWith` (show a value the results do not include) go
    with it. `createOptionSearch`, `filterOptions` and `highlightParts` are exported for custom widgets.
  - New inputs: `mode: 'select' | 'autocomplete'` (free text is the value), `filter`
    (`contains` | `startsWith` | `fuzzy` | `none` | predicate), `highlightMatches` (`<mark>`, bold),
    `openOnFocus`, `clearable` + `clearLabel`, `recent` + `recentKey` + `recentLabel` (recent picks,
    persisted through `SCSC_STATE_ADAPTER`), `allowCreate` + `createLabel`, `compareWith`,
    `loadingText`, `noResultsText`, `errorText`, `retryLabel`, `class`.
  - New outputs: `queryChange`, `optionSelected`, `create`. New templates: `ng-template[scscOption]`
    (`ScscOptionTemplate`), `[scscNoResults]`, `[scscGroupHeader]`.
  - Loading, "No results" and error rows (with a Retry option) render inside the listbox, which is
    `aria-busy` while loading; the result count is announced politely. Groups are `role="group"`
    with a visible heading; disabled options are `aria-disabled` and skipped by the arrow keys.
  - Keys: Alt+ArrowDown opens without moving the highlight, Alt+ArrowUp picks and closes, Escape
    closes the list and then clears the typed text.
  - The list renders in the top layer, lined up with the field (flipping above it when there is more
    room), so scroll containers and modal dialogs no longer clip it. `scsc-multi-select`'s list does
    too.

  **Multi-select and tags-input chips move onto `scsc-tag-list`**, with `maxVisible` ("+N more") and
  focus-safe, announced removal.

  - `scsc-multi-select`: `searchable` (a combobox over the same listbox), `filter`,
    `highlightMatches`, `noResultsText`, `maxVisible`, `overflow`, `listLabel`, `class`; options show
    `description`, `icon` and `disabled`. It is generic over the value type.
  - `scsc-tags-input`: `suggestions` (strings, options or an async source), `filter`, `minChars`,
    `debounce`, `maxResults`, `highlightMatches`, `maxTags`, `pattern`, `validate`, `maxVisible`,
    `listLabel`, messages (`duplicateMessage`, `maxTagsMessage`, `patternMessage`, `addedMessage`,
    `removedMessage`) and a `(rejected)` output. A pasted comma- or line-separated list adds each
    entry; duplicates are caught ignoring case. A turned-down entry stays in the field with a message
    under it.
  - `scsc-tag-list`: `trailingFocus` (the control after the tags takes focus when the last one is
    removed); the hidden "+N more" button no longer carries a name.

  **Breaking (behaviour)**

  - Combobox Clear (and Escape on a closed list, when `clearable`) writes `null` in select mode.
  - In select mode, typed text that was not picked goes back to the chosen label when focus leaves.
  - `scsc-tags-input` shows a message for duplicates instead of dropping them silently, and its
    Remove buttons are those of `scsc-tag-list` (same names: "Remove Probate").

- 183ba0c: **New: responsive helpers for when the DOM has to change with the screen size.** Styling alone
  still belongs in CSS (`md:` utilities, or `@container` + `@md:` container queries); these are for
  rendering different markup, such as a drawer instead of an inline panel or a menu instead of a row
  of buttons. Docs: Components → Breakpoints & resize, and the new Foundations → Layout & grid and
  Responsive pages.

  - `ScscBreakpoints` (provided in root, built on the CDK `BreakpointObserver`): signals `sm()`,
    `md()`, `lg()`, `xl()` and `xxl()`, each true from that breakpoint up (mobile first), and
    `current()`, the widest one reached (`'base'` below `sm`). `matches(query)` returns a signal for
    any media query and shares one listener per query.
  - `SCSC_BREAKPOINTS`: the breakpoint values (`40rem`, `48rem`, `64rem`, `80rem`, `96rem`), the same
    as Tailwind v4's defaults, so `bp.md()` is true exactly when an `md:` class applies. Types
    `ScscBreakpoint` and `ScscBreakpointName`.
  - `observeSize(elementRef, { injector? })`: an element's content-box size as a
    `Signal<ScscElementSize>` (`{ width, height }`), from a `ResizeObserver`. Updates at most once per
    animation frame, only when the size changes, and the observer disconnects when the component is
    destroyed.
  - `scscResize` directive (`exportAs: 'scscResize'`): the same measurement in a template. Read
    `#box="scscResize"` → `box.size()`, or handle `(scscResize)`.
  - Server-side rendering is safe: on the server every breakpoint is `false`, `current()` is
    `'base'`, sizes stay `0 × 0` and nothing is observed.

- 1c3c738: **Charts v2: a pie chart, multi-series bars and lines, and accessible charts throughout**
  (`@scscourt/design/charts`).

  These are still our own HTML and SVG charts, not a charting library. `d3-scale` and `d3-shape`
  supply the scales, stacks and arcs.

  **Breaking**

  - **New peers:** the charts entry point now imports `d3-scale` (>=4) and `d3-shape` (>=3), which
    are optional peers of `@scscourt/design`. Any app that imports `@scscourt/design/charts` must
    install both (`npm i d3-scale d3-shape`), even if it uses only the sparkline, stat-trend or
    heatmap. An entry point is one bundle, so there is no way to split them out. Apps that don't
    import the charts entry need nothing.
  - **`label` is now required** on `scsc-bar-chart`, `scsc-line-chart`, `scsc-donut-chart`,
    `scsc-pie-chart` and `scsc-calendar-heatmap`, replacing `ariaLabel` (1.1.1, 4.1.2).
    - Rename `ariaLabel` to `label`.
    - The label no longer has to list every value, because the data table and the keyboard
      read-out now carry them.
  - **Charts are figures, not images:**
    - Each chart is a `<figure>` named by `label` (a visually hidden `<figcaption>`) and described by
      the new `description`.
    - The plot is a focusable `role="group"`; it replaces the old `role="img"`.
    - Charts with a plot (bar, line, pie, donut) add one tab stop each.
  - **`scsc-donut-chart` is now a preset of `scsc-pie-chart`.**
    - `size`, `thickness` and `centerLabel` keep working, and the centre label is still `max(14, size/7)` px.
    - The ring now fills its box (it used to be inset by half its thickness), and its segments have
      gaps.
  - **New default palette:** default colours come from six new theme tokens,
    `--color-chart-1` … `--color-chart-6`, replacing the primary/secondary/info/… cycle.
    - The tokens are Okabe–Ito-style hues that alternate dark and mid.
    - `npm run a11y:contrast` checks each one at 3 : 1 against the surfaces and against its neighbour
      in the cycle, in all three themes.
    - A datum's `color` still overrides the palette.

  **New**

  - **`scsc-pie-chart`:**
    - `innerRadius` 0 draws a pie; a value above 0 (a fraction of the radius) draws a donut.
    - Segments have gaps (`padAngle`).
    - Direct labels with leader lines and percentages, where they fit.
    - A legend whose entries toggle segments (`[(hidden)]`).
    - `centerLabel`, `pattern` fills and `size` (the maximum diameter).
    - Fluid width through `ResizeObserver`, drawn at 1:1 so the 12px text never shrinks. It drops
      the direct labels below about 300px.
  - **`scsc-bar-chart`:**
    - `series` plus `labels` for several series, with `layout: 'grouped' | 'stacked'`.
    - `orientation: 'vertical' | 'horizontal'`; horizontal suits long category names, which wrap.
    - `axis`: round tick values from d3 nice ticks, formatted for the locale.
    - Also new: `pattern`, `legend`, `[(hidden)]`, `valueFormat`, `categoryLabel` and `class`.
    - The single-series `data`, `height` and `showValues` API is unchanged: 5 dashed guides, a 2px
      minimum bar, labels that wrap, and `gap-1` below `sm`.
  - **`scsc-line-chart`:**
    - `series` for several lines, `area` fills, and a `stacked` area.
    - `axis`, and `pattern` (a dash per line).
    - Also new: `legend`, `[(hidden)]`, `valueFormat` and `categoryLabel`.
    - A crosshair follows the pointer and the keyboard.
    - `data`, `color`, `height` and `labels` are unchanged: up to seven labels in an `@container`,
      a non-negative series starts at 0, an 8% fill, and HTML dots.
  - **Shared by every chart:**
    - **Keyboard:** the arrow keys (and Home/End) move between categories, points or segments. Each
      one shows its tooltip and is read out through the polite, debounced live region
      (`ScscAnnouncer`); Escape hides it.
    - **Legend:** entries are `aria-pressed` toggle buttons; a hidden entry is struck through and
      has a hollow swatch.
    - **"Show data table":** a disclosure that shows a captioned `<table>` of every value.
    - **Other:** `forced-color-adjust: none` on marks, text at 12px or larger and /70 ink or darker,
      and no movement under reduced motion.
  - **Labels:** `provideScscChartLabels()` and `SCSC_CHART_LABELS` translate the built-in words.
  - **`scsc-stat-trend`:** the delta gets a direction arrow and a spoken direction word ("Up: +8.2%
    vs. prior week"). Direction follows the sign of `delta`, or the new `direction` input. `class`
    is new.
  - **`scsc-calendar-heatmap`:**
    - Values fall into five levels, with a text legend under the grid that gives each level's range
      (`legend`).
    - "Show data table" lists every day.
    - Also new: `description`, `valueFormat` and `class`.
    - `size`, `gap`, the `viewBox` and `max-w-full` are unchanged.
  - **Docs:**
    - A new Pie Chart page.
    - New demos: grouped, stacked and horizontal bars; several series and a stacked area on the
      line chart; pattern fills; a width switch that shows the chart resizing.
    - Chart pages now have keyboard tables.
    - The staff-dashboard template uses a donut `scsc-pie-chart` and a two-series line chart.

- 1c3c738: **Chrome v2: sidebar groups, one navigation projection, mega menu, masthead actions, mega footer.**

  **`scsc-sidebar-nav`**

  - Expandable groups up to three levels deep (`children`). A group without a `link` is a
    disclosure button; a group with a `link` keeps the link and gets a separate chevron ("Show Cases
    pages"). Collapsible sections (`collapsible`, `expanded`).
  - New inputs: `label` (the `<nav>` name, "Main"), `filter` (keeps matches and their ancestors,
    marks the match, opens branches), `expandActive` (default on: opens the branch holding the
    current page), `accordion`, `persistKey` (open groups through `SCSC_STATE_ADAPTER`, key
    `scsc.sidebar.<persistKey>`), `headingLevel`, plus label inputs. `[(expanded)]` (a set of item
    ids) and `(navigate)`.
  - Items gain `id`, `href`/`external`, `status` (`new` | `beta` | `deprecated`), `disabled` and a
    `badge` object (`{ text, tone, srLabel }`).
  - Collapsed rail: icon-only links named by hidden text with tooltips; badge counts are read with
    the name and shown as a dot; groups open a flyout menu. The current page gets a gold accent bar;
    nested lists have a guide line; rows are 36px with 44px hit areas (`scsc-hit`; 24px in compact).
    `(navigate)` fires on every link activation, the current page included. Section titles label their
    lists.

  **Shells**

  - `scsc-app-shell` projects the navigation **once**: `[slot=sidebar]` renders in the sidebar from
    `lg` and in the modal drawer below it. `scsc-masthead` renders the shell's "Open navigation"
    button (`aria-expanded`, `aria-controls`); the shell draws its own when the header is not a
    masthead. The drawer closes on a navigation, on `(navigate)` and when the viewport grows past
    `lg`; the sidebar shows full labels in it even when `collapsed`. New label inputs:
    `openNavLabel`, `closeNavLabel`, `drawerLabel`, `sidebarLabel`.
  - `scsc-page-shell` gets the same drawer for `hasSidebar` (it used to hide the sidebar below `lg`)
    and `[(mobileOpen)]`.
  - `scsc-split-shell`: below `lg` one pane at a time — `[(detailOpen)]` plus a "Back to list"
    button (`backLabel`); focus moves to the pane that appears. Standalone, it renders its own main
    landmark and skip link. `scsc-focused-shell` renders the skip link and a `<main id>`.

  **Header**

  - `scsc-masthead` renders `<header>`. New `actions` (`ScscMastheadAction[]`: 36px icon buttons with
    tooltips and badges) that move into a "More" menu when the bar is narrow, `(action)`,
    `[slot=search]` (inline from `md`, behind a search button below it), `moreLabel`, `searchLabel`.
  - `scsc-primary-nav`: an item with `children` (`ScscMegaMenuColumn[]`, plus an optional
    `featured` card) opens a mega-menu panel — disclosure navigation, arrow keys between columns,
    Escape closes, hover intent for mice. Below `md` the items fold behind a "Menu" button and mega
    menus become an accordion. New `label`, `menuLabel` inputs.

  **`scsc-footer` v2** renders `<footer>`. `variant: 'simple' | 'mega'`; the mega footer has a brand
  block (`logoSrc`, `brand`, `description`, `social`, `[slot=language]`), up to four `columns`
  (`<details>` below `md`), `contact` (address, phone, email, hours, map) and a legal row
  (`scsc-legal-bar` by default with `legalLinks`, or `[slot=legal]`). Both variants take
  `recordDisclaimer`, `backToTop` and `lastUpdated`, and `headingLevel`.

  **Breaking changes and migration**

  - `[slot=mobile-sidebar]` on `scsc-app-shell` is removed. Delete the second `scsc-sidebar-nav`
    and your own "Open navigation" button (and any `NavigationEnd` handler that closed the drawer):
    the shell and masthead do this now. `[(mobileOpen)]` stays, optional.
  - `ScscNavItem.link` and `ScscPrimaryNavItem.link` are optional (a group can be a button); code
    that reads `item.link` must handle `undefined`. `ScscNavItem.badge` may be an object.
  - `scsc-page-shell hasSidebar` now shows its sidebar in a drawer below `lg` instead of hiding it.
  - `scsc-split-shell` shows one pane at a time below `lg`: bind `[(detailOpen)]` and set it when a
    row is chosen, or small screens only see the list.
  - `scsc-masthead` and `scsc-footer` wrap their content in `<header>` / `<footer>`; do not wrap
    them in another `<header>` or `<footer>`.

- 1c3c738: **Court components polished as prebuilt patterns** (feedback M-2j, WCAG 2j).

  - **`scsc-calendar`** gains an agenda view: the month's days with events as a list (time, title
    and the new optional `location` on `ScscCalendarEvent`), each day a button that picks it. New
    inputs: `view` (`month` | `agenda` | `auto`, default `auto`), `agendaBelow` (480px) and
    `emptyAgendaLabel`. With `auto` the calendar switches to the agenda when its own width is below
    `agendaBelow` (measured with `observeSize`), so it reads on phones and in narrow side panels.
    The month grid, its keyboard model and the `today` input are unchanged.
  - **`scsc-docket-table`** and **`scsc-fee-table`** are built on `scsc-table` with
    `responsive="stack"`: below `stackBelow` (`sm` by default, measured on the table) each entry or
    fee becomes a card. Rows get row headers (the event; the description), and the docket's View
    document action is a `scsc-table` row action named for the entry. Public inputs are unchanged;
    new optional inputs: docket `emptyMessage`, `stackBelow`, `density`, `viewDocumentLabel`; fee
    table `label` (default "Fees"), `totalLabel`, `emptyMessage`, `stackBelow`.
  - `observeSize` ignores a `ResizeObserver` callback without entries instead of throwing.

  **Docs:** every Court page now has at least five demos (variants, states, compact and phone
  widths, the dark theme, composed usage), and the tag and avatar-group pages show v2.

  **Templates wave 2** (docs only): Work queue (filter bar, bulk bar, row actions, split-shell
  detail), Audit log (`scsc-audit-log` with old → new values), Users & roles (row actions, a drawer
  edit form, role badges), Bulk edit (the editable `scsc-data-grid`) and Document review (viewer
  v2 with thumbnails, custom tools and a case panel). The remaining public templates use the mega
  footer (`variant="mega"`, legal bar, record disclaimer on pages that show court records). The
  console Reports page uses one `scsc-date-range-picker` instead of separate From/To pickers.

  **Migration**

  - `scsc-fee-table`'s total is a line under the table rather than a `<tfoot>` row; selectors or
    print styles that targeted `scsc-fee-table tfoot` need updating.
  - `scsc-docket-table`'s markup is now `scsc-table`'s: tests that queried its old `<td>` cells
    should query by role (row headers are `th[scope=row]`).

- 1c3c738: `scsc-data-grid` is now an Excel-style editable grid (part 1: roles, navigation, editing, validation, change tracking).

  - **Grid semantics:** `role="grid"` named by `label`, `aria-rowcount` / `aria-colcount` for the whole data set, real `aria-rowindex` on virtualized rows, `columnheader` / `gridcell` with `aria-colindex`, `aria-selected`, `aria-readonly`, `aria-invalid` + described errors, `aria-busy` during async validation.
  - **One tab stop** (the active cell, roving `tabindex`) and 2-D keys: arrows, Home/End, Ctrl+Home/End, PageUp/PageDown, Shift+arrows and pointer drag for ranges, Ctrl+A. Focus survives virtual scrolling.
  - **Editing:** Enter, F2 or typing starts an edit; Escape cancels; Enter / Tab commit and move; Delete clears the selection; Space toggles checkbox cells. Built-in editors `text`, `number`, `currency`, `date` (native), `select`, `combobox` (`scsc-combobox`), `checkbox`, `textarea`, or a custom component using `injectCellEditor()`.
  - **Validation:** `required`, `min`, `max`, `parse`, and `validate` (sync or async).
  - **Change tracking:** the `changes` model (`ScscGridChangeSet`: `updated`, `added`, `removed`, `errors`, keyed by `rowKey`), `(cellChange)`, a status bar ("12 changes · 2 errors · Revert · Save") whose Save emits `(save)`, and `revert()`, `acceptChanges()`, `focusCell()`, `scrollToRow()`, `selectRange()`, `addRow()`, `deleteRows()` via `exportAs: 'scscDataGrid'`. Edits are reversible patches (`applyGridPatches`, `invertGridPatches`), the base for undo.
  - New inputs: `rowKey`, `selectionMode`, `readonly`, `allowAddRows`, `allowDeleteRows`, `newRow`, `text`, `class`.

  **Breaking / migration**

  - `ScscGridColumn` now extends the unified table's `ScscColumn` fields (`key`, `header`, `value`, `type`, `align`, `width`, `format`). `numeric` still works but is deprecated: use `type: 'number'` (or `align: 'end'` for IDs).
  - Cells are formatted by `type` / `format` like `scsc-table` (numbers, currency and dates use the locale), instead of printing the raw value.
  - The body is no longer a focusable `role="region"`: the grid is one tab stop on its active cell, and the arrow keys move between cells instead of scrolling the body.

- 1c3c738: `scsc-data-grid`, Excel-style part 2: undo/redo, clipboard, fill, frozen, resizable and movable columns.

  - **Undo / redo:** `undoLimit` (default 100). Ctrl+Z, and Ctrl+Y or Ctrl+Shift+Z, plus Undo and Redo buttons in the status bar, and the `undo()` / `redo()` methods. Every edit, paste, fill, clear, add and delete is one step, re-validated when replayed.
  - **Clipboard:** Ctrl+C / Ctrl+X copy the selection as TSV plus an HTML table (`copy()`). Ctrl+V pastes quote-aware TSV from Excel or Google Sheets (`paste(text, at?)`):
    - It starts at the selection and is clipped to the grid; with `allowAddRows` it adds rows, and one value fills a whole selection.
    - Cells are parsed by column (currency, dates, options by label or value, TRUE/FALSE) and validated; read-only cells are skipped.
    - The whole paste is one undo step, announced as "Pasted 3 × 4, 2 errors".
    - `parseTsv`, `toTsv` and `toHtmlTable` are exported.
  - **Fill:** Ctrl+D fills down and Ctrl+R fills right from the first row or column of the selection (from the neighbouring cell for a single row or column), also as `fillDown()` / `fillRight()`.
  - **Frozen columns:** `frozenColumns` and `pinned: 'start'`. Sticky offsets come from the column widths, the last frozen column has a shadow edge once the grid is scrolled, and frozen header cells stay over their columns.
  - **Columns:**
    - Headers join the keyboard navigation (ArrowUp from the first row).
    - Resize by dragging the header edge, or with Enter on the header and then the arrows (a `role="separator"` with `aria-valuenow`).
    - Move with Alt+Shift+Arrow on the header (announced), or by dragging the header.
    - `resizable` / `reorderable` per column, `resizeColumn()` and `moveColumn()`; `persistKey` remembers widths and order through `SCSC_STATE_ADAPTER`.
  - Added rows keep the key they were added with, even when their key field is edited.
  - The status bar buttons are native buttons with `scsc-hit` hit areas.

- 1c3c738: **Dependencies.** New optional peers, only needed when you use the matching entry point:

  - `d3-scale` (>=4) and `d3-shape` (>=3) for `@scscourt/design/charts`. They power the upcoming pie,
    multi-series and stacked charts.
  - `@tiptap/extension-table` and `@tiptap/extension-text-align` (>=3.30.5) for
    `@scscourt/design/editor`. They power the upcoming table and alignment tools.

  The workspace moves TipTap to 3.31.4. Versions of `@tiptap/core` up to 3.30.4 are affected by
  [GHSA-cp6q-959q-f8rh](https://github.com/advisories/GHSA-cp6q-959q-f8rh) (a `__proto__` key in
  `mergeAttributes()` can become an executable DOM attribute), and versions below 3.30.5 by
  [GHSA-j95f-988m-3j2f](https://github.com/advisories/GHSA-j95f-988m-3j2f) (ReDoS in Markdown
  attribute parsing). Apps that use the editor should upgrade `@tiptap/*` to 3.30.5 or later.

- 1c3c738: **Rich text editor v2 and a new `scsc-template-editor`** (`@scscourt/design/editor`). Docs:
  Components → Rich Text Editor, Template Editor.

  - **Toolbar:** `toolbar` takes `minimal`, `standard` (the default) or `full`, or your own list of
    built-in tools (`bold`, `italic`, `underline`, `strike`, `code`, `heading` (paragraph and
    headings 2–4), `bulletList`, `orderedList`, `indent`, `outdent`, `blockquote`, `codeBlock`,
    `link`, `table`, `align`, `hr`, `undo`, `redo`, `clearFormatting`), `'|'` separators and custom
    tools (`{ id, label, icon, run(editor), isActive? }`). It is a WAI-ARIA `toolbar` (one Tab stop,
    arrow keys, `aria-pressed`, shortcut tooltips and `aria-keyshortcuts`, 44 px targets), sticks to
    the top of the viewport in a long document, and moves secondary tools into **More** below 40rem.
  - **The toolbar is the schema:** a format without its tool has no shortcut and is dropped on paste.
    Links use a validated link editor (Ctrl/⌘+K; https, http or mailto; web links get
    `rel="noopener noreferrer"` and `target="_blank"`). Tables insert 3 × 3 with a header row and
    add or delete rows and columns from the table menu.
  - **New inputs:** `placeholder`, `readonly` (focusable and selectable, no toolbar; distinct from a
    disabled control), `maxLength` (a "used / max" count, announced near the limit, edits past it
    refused), `minHeight`, `format` (`html` or `json`), `sanitize`, `pasteCleanup` (on: strips Word,
    Outlook and Google Docs markup, keeps semantic tags and converts Word lists), `mergeFields`,
    `extensions`, `labels` and `class`. New methods: `insertMergeField(path, label?)`, `focus()` and
    the `tiptap` getter.
  - **Merge fields** are non-editable chips read as "Merge field: <label>"; the HTML value stores them
    as plain `{{path}}`, and `{{path}}` in a value (or typed) becomes a chip. `scsc-merge-field-menu`
    gains a `pick` output with the token's path and label.
  - **`scsc-template-editor`:** editor, field menu, sample-data JSON (validated) and a live preview
    in a sandboxed `<iframe srcdoc>` (never `allow-scripts`; it grows with its content) with every
    value HTML-escaped; side by side from 64rem,
    Edit / Preview tabs below. `ControlValueAccessor` (template HTML) and `(change)` with
    `{ html, fields }`. Also exported: `scscRenderTemplate()`, `scscTemplateFields()`,
    `scscEscapeHtml()`, `scscResolvePath()`, `scscCleanPastedHtml()` and `scscNormalizeLink()`.
  - **Icons:** `SCSC_ICONS` now includes `underline`, `strikethrough`, `square-code`,
    `text-align-start`, `text-align-center`, `text-align-end`, `remove-formatting`,
    `list-indent-increase` and `list-indent-decrease`.

  **Breaking**

  - **Tab no longer indents** list items (or moves between table cells): Tab and Shift+Tab always
    leave the editor (WCAG 2.1.2). Indent and outdent with Ctrl/⌘ + ] and [ or the toolbar; move
    between table cells with the arrow keys.
  - **Toolbar markup:** the toolbar is `role="toolbar"` (was `role="group"`) with a roving tabindex,
    and its buttons are different; the default `standard` toolbar has more tools than the old six.
    Tests that query toolbar buttons by position need updating.
  - **Formats without a tool are gone:** StarterKit's underline, strike, code, code block, horizontal
    line and headings 1, 5 and 6 were enabled but had no button; now each needs its tool (`full` has
    them all), and headings are levels 2–4 only.
  - **An empty editor's value is `''`** (was `<p></p>`), so `Validators.required` works; drop custom
    "required text" validators. Writing a value no longer emits it back as a change.
  - **Peers:** the editor now needs `@tiptap/extension-table` and `@tiptap/extension-text-align`
    (^3.30.5) besides `@tiptap/core`, `@tiptap/pm` and `@tiptap/starter-kit`.

- 183ba0c: **New: privacy and legal components** (`lib/legal`): standard legal notices, the footer legal
  bar, and cookie consent.

  - `scsc-legal-notice` (`ScscLegalNotice`) shows a standard disclaimer. `preset`:
    `not-legal-advice` (default), `electronic-record` (the online record may be incomplete or wrong;
    cites `ruleCitation`, default "Cal. Rules of Court, rules 2.500–2.507"), `self-help`,
    `translation` or `custom`. `variant`: `callout` (default) or `banner` are regions named by their
    heading (`headingLevel` 2–6); `inline` or `compact` (for footers) are notes with no heading.
    Projected content replaces the preset text. `learnMoreLink` (router) or `learnMoreHref` adds a
    descriptive link.
  - With `acknowledge`, the notice adds a checkbox and becomes a boolean form control, so
    `Validators.requiredTrue` works for e-filing. You can also bind `[(acknowledged)]`. Related
    inputs: `acknowledgeLabel`, `acknowledgeError`, `required` and `disabled`.
  - **The preset copy is a draft that court counsel must approve before production.** It lives in
    `SCSC_LEGAL_COPY`; replace any part of it with `provideScscLegalCopy()`.
  - `scsc-legal-bar` (`ScscLegalBar`) is a `<nav aria-label="Legal">`. It shows `links`
    (`ScscLegalLink[]`, default `SCSC_LEGAL_LINKS`: Privacy, Terms of use, Accessibility, Language
    access), an optional `copyright`, and a "Cookie preferences" button that shows only when
    consent is configured. It fits the default slot of `scsc-footer`.
  - Cookie consent. `provideScscConsent({ version, categories, policyLink, respectGpc, adapter })`
    configures it; the built-in categories are `essential` (always on), `preferences`, `analytics`
    and `marketing`.
    - `ScscConsentService` offers `state`, `decided`, `has(category)`, `whenGranted(category)`,
      `acceptAll()`, `rejectAll()`, `save()`, `open()`, `close()` and `reset()`.
    - The decision is stored through `SCSC_STATE_ADAPTER` under `scsc.consent`. A decision stored
      for a different `version` counts as undecided.
    - Global Privacy Control switches analytics and marketing off by default.
    - Without the provider the service does nothing: only `essential` counts as granted.
  - `*scscIfConsent="'analytics'"` (`ScscIfConsent`) renders its content only while that category
    is granted, with an optional `else` template.
  - `scsc-consent-banner` (`ScscConsentBanner`) is a non-modal region fixed to the `bottom` or
    `top`, in the `bar` or `card` layout. It shows "Accept all" and "Reject all" with equal
    prominence, plus "Manage preferences", which opens an `scsc-modal` with one switch per
    category.
    - While visible, it sets `--scsc-consent-h` and a matching `scroll-padding` on `<html>`, so
      focused elements are not covered (WCAG 2.4.11).
    - It never takes focus on load. After a choice it announces "Cookie preferences saved" and
      returns focus to where the user was.

- 1c3c738: **New: `scsc-menu`** — the shared, data-driven WAI-ARIA menu button, for row-action overflow
  ("More actions for 24CV012345"), column and view menus, and record or toolbar actions.

  - Items are `ScscMenuItem` data: `icon`, `description`, `shortcut` (display only), `type`
    (`item`, `checkbox`, `radio`) with `checked`, `group` (a labelled section; radio items in it are
    mutually exclusive), `disabled` (a string is the reason, shown and read as the description),
    `tone: 'danger'`, `separatorBefore`, `link` (routerLink) or `href` with `external`, and one
    level of `children` (a submenu).
  - Outputs: `select` (the item, after the menu has closed and focus is back on the trigger),
    `checkedChange` (`{ item, checked }`; the menu stays open) and `openChange`. Methods: `open()`,
    `close()`, `toggle()`, `isOpen()`.
  - Inputs: `items`, `label`, `align`, `placement` (`bottom`, `top`, `auto`), `size` (`sm` for table
    rows keeps a 44px hit area), `triggerLabel`, `triggerIcon`, `class` (the panel).
  - Trigger: project a button with `scscMenuTrigger` (a native button or `scsc-button`), or leave the
    menu empty for the built-in "More actions" icon button.
  - Keyboard: arrows with wrap, Home/End, type-ahead, Enter/Space, Escape, Tab, and
    ArrowRight/ArrowLeft for submenus. Disabled items stay focusable with `aria-disabled`.
  - It renders in a CDK overlay as a top-layer popover placed inside `scsc-menu`, so scroll
    containers (tables) never clip it, it flips when there is no room, and it works inside native
    modal dialogs and drawers. Opening uses `scsc-anim-scale-in` (a fade with reduced motion).

  **`scsc-dropdown` is now built on `scsc-menu`**: a WAI-ARIA menu button instead of a disclosure.
  Its inputs and `select` (the item `id`) are unchanged, and it gains `checkedChange`. What changes:

  - Opening moves focus to the first item; the items are reached with the arrow keys, not Tab
    (one Tab stop). The trigger has `aria-haspopup="menu"`.
  - Disabled items are `aria-disabled` and focusable instead of `disabled` buttons.
  - The menu renders outside the dropdown's own element in environments without the Popover API
    (jsdom): tests should find it with `document.querySelector('[role="menu"]')`, and items by
    `role="menuitem"`.

  **`ScscMenuItem` moved** from `lib/dropdown` to `lib/menu` (still exported from
  `@scscourt/design`). `divider` is deprecated in favour of `separatorBefore` (both work), `icon`
  also takes SCSC aliases, and `disabled` widens to `boolean | string`.

  **Labels:** `ScscLabels` gains `moreActions`, `moreActionsFor(item)`, `noActions` and
  `opensInNewTab` (English and Spanish included). A custom pack typed as a full `ScscLabels` must
  add them.

- 1c3c738: **Overlays v2: one modal underneath.** "Modal vs dialog?" now has a one-line answer: a modal is
  markup you declare, the dialog service is code that asks, and a drawer is a side task beside the
  page. Every service dialog renders through `scsc-modal`.

  **`scsc-modal`**

  - Name and role: `title` (required unless the new `ariaLabelledby` names the dialog; a dev-mode
    console error says so), `description` (a line under the title, wired to `aria-describedby`),
    `ariaDescribedby`, `role: 'dialog' | 'alertdialog'` and `headingLevel` (2–6, default 2). The empty
    heading is gone: without a `title` no heading renders.
  - `size: 'sm' | 'md' | 'lg' | 'xl' | 'full'` (default `md`, 32rem as before). Below the `sm`
    breakpoint every size is a sheet from the bottom edge that grows up to the full screen.
  - The header and footer stay in view while a long body scrolls; the body becomes a focusable,
    named region while it overflows. New `[slot=header-actions]` beside the Close button, and a
    `class` passthrough for the panel.
  - Closing: `beforeClose: (reason) => boolean | Promise<boolean>` can keep it open (Esc, backdrop,
    Close button; not your own `open = false`), `(closed)` emits why it closed (`esc`, `backdrop`,
    `button` or `programmatic`), and `close(reason?)` closes it now.
  - Focus: `initialFocus: 'first' | 'none' | <selector>`. `first` (default) is the `scscAutofocus`
    element, else the first control in the body or footer, else the Close button.
  - Motion: DaisyUI's transitions run on the `--scsc-duration-*` / `--scsc-ease-*` tokens, and the
    rise and scale use `--scsc-motion-distance` / `--scsc-motion-scale`, so reduced motion keeps only
    a short fade.
  - `title` and `role` no longer leak onto the `<scsc-modal>` host element (the host `title` showed as
    a tooltip over the whole modal).

  **`ScscDialogService` and `scsc-dialog-host`**

  - `confirm()`, `alert()` and `prompt()` keep their API and queue, and now render in an
    `scsc-modal` (`size="sm"`). Confirm and alert are `role="alertdialog"`, named by the title and
    described by the message. Esc, the backdrop and the modal's Close button cancel. A queued request
    that replaces the answered one is announced. New `headingLevel` input on the host.
  - New `open(Component, { title, description?, data?, size?, dismissable?, injector? })` returns an
    `ScscDialogRef` with `componentInstance`, `afterClosed` (the `close(result)` value, or
    `undefined` when dismissed) and `close(result?)`. The component injects `SCSC_DIALOG_DATA` and
    `SCSC_DIALOG_REF`; the `scscDialogActions` directive moves its buttons into the modal footer.
    `open()` does not queue: a modal opened from another stacks on top (the native top layer) and
    hands focus back to it. It renders next to `<scsc-dialog-host />`, or at the end of `<body>` if
    there is none, and is destroyed after closing.

  **`scsc-drawer`**

  - `side: 'start' | 'end' | 'bottom'` (default `end`; `start`/`end` follow the reading direction),
    `size: 'sm' | 'md' | 'lg' | 'full'`, `modal` (default true; `false` opens with `show()` and
    leaves the page usable), `headingLevel` (default 2), a sticky `[slot=footer]`, `(closed)` with the
    same reasons, `close(reason?)`, a `class` passthrough, and enter motion from the `scsc-anim-slide-*`
    presets.

  **Breaking (migration)**

  - **The modal must be named.** Give every `scsc-modal` a `title`, or `ariaLabelledby` pointing at
    your own heading. Its heading is an `<h2>` now (was `<h3>`): set `headingLevel` where the page
    needs another rank.
  - **Initial focus:** without `scscAutofocus`, focus now starts on the first control in the body or
    footer instead of the Close button. Tests that expected the Close button to have focus should use
    `initialFocus` or check the first control.
  - **Dialog-host markup and classes changed:** it renders an `scsc-modal` (its `dialog.modal` sits
    inside `scsc-dialog-host > scsc-modal`), the title is an `<h2>`, the buttons sit in the modal
    footer (no `.modal-action`), and there is a Close button. Tests that queried the old markup should query `dialog` and the
    buttons by their text. Specs that render the host need the icons provided (`provideScscIcons`).
  - **Drawer API:** `title` is required (`input.required`). `side="left"` / `"right"` still work as
    `start` / `end` but are deprecated: switch to `side="start"` / `"end"`. The heading is an `<h2>`
    (was `<h3>`). Its panel classes changed (logical `start-0` / `end-0` instead of `ml-auto` /
    `mr-auto`).

- 1c3c738: **Pickers v2** (`@scscourt/design/pickers`): an enterprise date picker, a new date range picker, and accessibility fixes for the time picker and masked input.

  - **`scsc-date-picker`** is rebuilt on the WAI-ARIA date picker dialog pattern. The field is editable and reads dates leniently in `inputFormat` (the locale's `MM/DD/YYYY` by default). New inputs: `min`, `max`, `disabledDates`, `weekStartsOn`, `locale`, `inputFormat`, `presets`, `actions` (`today`, `clear`, `cancel`, `apply`), `confirm`, `months`, `inline`, `dateLabel`, `dayClass`, `today`, `clearable`, `required` and `labels`. It adds month and year jump views and a full-screen sheet below `sm`. It is also a validator: `scscDateParse`, `scscDateMin`, `scscDateMax`, `scscDateUnavailable` and `required`.
  - **New `scsc-date-range-picker`**: a `ScscDateRange` (`{ start, end }`) value, typed into Start and End fields inside a fieldset or picked on two months. It has a hover and focus preview, `minSpan`/`maxSpan`, `SCSC_RANGE_PRESETS`, and confirm mode by default.
  - **`scsc-time-picker`**: a `role="group"` named by the enclosing form field (or `label`); blank options, so an empty value no longer shows 9:00 AM; emits `null` until complete; new `step`, `invalid`, `required` and `inputId` inputs.
  - **`scscMask`**: connects to `scsc-form-field` (hint, error, required); the caret stays put when the value is reformatted; digit masks default to `inputmode="numeric"`; and a value written before a re-created input rendered is now shown.

  **Breaking**

  - Date picker semantics and focus: the input is now an editable `role="combobox"` with `aria-haspopup="dialog"`. Enter, Space and ArrowDown open the calendar, so Enter no longer submits the form. Focus moves to the selected day (or today) when the calendar opens, and returns to the field after a pick or Esc. Esc no longer bubbles, so an enclosing modal stays open. The days are `button role="gridcell"` with `aria-selected` instead of `aria-pressed`, and the grid is a single Tab stop. Update tests that query `[aria-pressed]` or that type into or click the old read-only input.
  - The field shows the formatted date (`07/14/2026`), not the ISO string. The value stays ISO, and an empty field is `null` instead of `''`.
  - The placeholder is no longer the accessible name: label the picker with `scsc-form-field`. It now defaults to the format.
  - An empty time picker value is `null`, with blank selects.

- 183ba0c: **New: `ScscStateAdapter` and `SCSC_STATE_ADAPTER`**, the one persistence contract behind every
  "remember this" feature (table views, sidebar groups, consent choices, and the upcoming preferences
  store).

  - `SCSC_STATE_ADAPTER` is provided in root and defaults to `scscLocalStorageAdapter()`. Override it
    with `{ provide: SCSC_STATE_ADAPTER, useValue: myAdapter }`, for example with a server-backed
    store.
  - `scscLocalStorageAdapter(storage?)` stores JSON. It never throws: blocked storage, quota, private
    windows and SSR all degrade to "not stored".
  - `scscMemoryAdapter(initial?)` keeps state for the page's lifetime only, which suits tests and SSR.
  - Keys are passed in full, using the `scsc.<feature>.<id>` convention (for example
    `scsc.table.cases`); adapters add no prefix.

- 183ba0c: **Breaking: `createTableState` v2.** The v1 store (`createTableState(rows, { pageSize, initialSort })`,
  `TableStateOptions`, `TableState`) is removed; nothing in the library or the reference apps used it.
  The new one takes a single options object and is the headless state behind the upcoming unified
  `scsc-table` and filter bar:

  - `createTableState({ mode: 'client', rows, rowKey, … })` searches (debounced, every term,
    accent-insensitive), filters (by `ScscFilterValue` shape: text, list, number range, date range,
    flag, or your `filterFns`), sorts (typed, stable, multi-key, Shift-click via
    `toggleSort(key, { additive: true })`) and pages in memory.
  - `createTableState({ mode: 'server', page: () => resource.value(), rowKey, … })` builds
    `query()` (`ScscTableQuery`: page, pageSize, sort[], search, filters, cursor) for `httpResource`
    and keeps the last page on screen while the next loads.
  - The page resets when the search, filters, sort or page size change, and is clamped when rows
    shrink. Selection (`ScscSelection`) is keyed by `rowKey`, so it survives new data;
    `selectAllMatching()` gives an `all-matching` selection with `except` on server tables.
  - Column layout (`hidden`, `order`, `widths`, `density`), page size, sort and saved views
    (`saveView` / `applyView` / `deleteView`) persist through `SCSC_STATE_ADAPTER` with
    `persist: { key: 'scsc.table.<id>' }`.
  - `toHttpParams(query)` (`page`, `size`, `sort=key,dir`, `q`, `f.<key>`), `toQueryParams(query)` and
    `fromQueryParams(params)` for requests and URL sync.

  Migrating from v1: `createTableState(rows, { pageSize: 10 })` becomes
  `createTableState({ mode: 'client', rows, rowKey: (r) => r.id, pageSize: 10 })`; read `rows()`
  instead of `page()`, `query().page` (zero-based) instead of `pageIndex()` (one-based), call
  `setSearch()` instead of writing `query`, and use `selection()` / `toggle(row)` instead of the
  `Set` of row objects.

  **New: `scsc-tag-list`** — a labelled list of tags with "+N more": `maxVisible`, or
  `overflow="auto"` to fit one or two `lines`; the "+N more" button ("Show N more tags",
  `aria-expanded`) opens a popover of the hidden tags or, with `overflowMode="expand"`, reveals them
  inline. Tones and icons per `ScscTagItem`, removable chips with focus moved to the next tag and a
  polite announcement, links and `itemClick`.

  **New: `createOverflow()`** — the measurer behind `overflow="auto"`, for any wrapping row that
  needs a "+N" control: hides what does not fit with `hidden` (out of layout and the accessibility
  tree), re-measures on resize and content changes, and shows everything on the server.

- 1c3c738: **One table: `scsc-table` absorbs `scsc-data-table`** (feedback M-2h, WCAG 2h). The table is static
  by default and gains features as you opt in; the same component works on `rows` in memory or on a
  `createTableState` store in server mode.

  **New in `scsc-table`**

  - Column model: `type` (`text`, `number`, `currency`, `date`, `datetime`, `boolean`, `status`,
    `custom`) drives alignment, locale formatting (`SCSC_LOCALE`), typed sorting and export; plus
    `align`, `width`/`minWidth`, `comparator`, `searchable`, `filter` (a facet), `format`, `exportable`,
    `hidden`/`hideable`, `pinned: 'start' | 'end'`, `rowHeader`, `priority` and `value`.
  - Data: `rows` (client) or `state` (a `createTableState` store, client or server); `rowKey`;
    `label` or a projected `<caption>`; `rowLabel` names each row's checkbox and actions.
  - Toolbar: `searchable`, a built-in filter bar for columns with a `filter`, Sort menu
    (`sort="multi"`; Shift+click also adds a key), View menu (`columnMenu`: columns and density),
    Export (`exportable`: CSV of all, matching or selected rows, formula-injection safe; server tables
    emit `(exportRequest)`), and `[slot=toolbar-start]` / `[slot=filters]` / `[slot=toolbar-end]`.
  - Row actions (`rowActions`, `inlineActions`): a built-in, end-pinned actions column outside
    `columns` (never in the View menu, search or CSV). The first actions are 32 px ghost icon buttons
    with tooltips, named "Edit {rowLabel}"; the rest go in a "More actions for {rowLabel}" menu (one
    leftover stays inline). `visible`, `disabled` with a reason (stays focusable), `tone: 'danger'`,
    `confirm` (through `ScscDialogService.confirm`) and `link`.
  - Selection (`selectable: 'multi' | 'single'`) is keyed by `rowKey`, so it no longer goes stale when
    rows change. Selecting swaps the toolbar for the bulk bar in place (no layout shift): "3 selected ·
    Select all 1,234 · [bulkActions] · Clear selection"; `bulkBar="floating"` sticks it to the bottom of
    the viewport. Selected rows get a tint and `aria-selected`; the count is announced.
  - `expandable` rows with `*scscRowDetail`; `activeRow` (model) highlight; `paginator: 'pages' | 'more'`
    with `pageSizeOptions` ("1–25 of 1,234", rows per page, "Page 2 of 50"), keyset "Show more" via the
    state's cursor; `loading` (skeleton rows, `aria-busy`, "Loading…" status), `error` with Retry
    (`(retry)`), `*scscEmpty`; `density`, `zebra`, `stickyHeader` + `maxHeight`.
  - Narrow containers, measured on the table's own width: `responsive="scroll"` (focusable region),
    `priority` (drops columns by `priority` into a "Show N more fields" row) or `stack` (cards below
    `stackBelow`: title, `<dl>` fields, actions in the footer).
  - Templates: `*scscCell="'status'; let row; let value"` per column (keyless still templates every
    cell), `scscHeaderCell`, `*scscRowDetail`, `*scscEmpty`. Outputs: `selectionChange`, `sortChange`,
    `action`, `bulkAction`, `retry`, `exportRequest`. Methods: `clearSelection()`, `selectAllMatching()`,
    `exportCsv()`; `exportAs: 'scscTable'`.
  - **`scsc-filter-bar`** (new): text, enum, boolean, date-range and number-range facets bound to a
    `createTableState` store; active filters as removable `scsc-tag-list` chips with "Clear all";
    overflow and range facets in a "More filters" drawer, which is the whole form on narrow bars.
  - **`scsc-pagination`** gains `variant="compact"` (Previous · "Page 2 of 12" live · Next), a `label`,
    chevron icons instead of « », and keeps focus on a usable button when Previous or Next disables.
  - `createTableState` stores gain `mode`, `matchingRows` and `nextCursor`.

  **Breaking (pre-1.0; no shims)**

  - `scsc-data-table` / `ScscDataTable` is **removed**. Migrate as below.
  - `ScscColumn.numeric` is removed: use `type: 'number'` (or `currency`, `date`…).
  - `scsc-table`'s `[(sort)]` model is gone: `sort` is now the mode (`'none' | 'single' | 'multi'`) and
    the table sorts `rows` itself. Use `defaultSort` for the initial order and `(sortChange)` to follow
    it, or a server `state` to sort remotely.
  - `scsc-table`'s `sticky` is renamed `stickyHeader` (with `maxHeight` for the scroll area).
  - The table is now framed (border, rounded) with its toolbar and footer inside; `class` still lands on
    the host.

  | `scsc-data-table`                                                       | `scsc-table`                                                                                                                                           |
  | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `<scsc-data-table [columns] [rows]>`                                    | `<scsc-table [columns] [rows] label="…" searchable paginator="pages" columnMenu exportable>`                                                           |
  | search box (always on)                                                  | `searchable` (+ `searchPlaceholder`)                                                                                                                   |
  | Columns menu (always on)                                                | `columnMenu` (View menu: columns + density)                                                                                                            |
  | `exportable` (default `true`), `exportFilename`                         | `exportable` (default off), `exportFilename`                                                                                                           |
  | `pageSize` (default 10), pager always                                   | `paginator="pages"`, `pageSize` (default 25), `pageSizeOptions`                                                                                        |
  | `selectable` (boolean)                                                  | `selectable="multi"` (the bare attribute still means `multi`) or `single`                                                                              |
  | `(selectionChange)` → `T[]`                                             | `(selectionChange)` → `ScscSelection` (`mode`, `keys`, `except`, `count`) keyed by `rowKey`; rows arrive in `bulkActions` handlers or `selectedRows()` |
  | `[slot=bulk]` buttons                                                   | `[bulkActions]="[{ id, label, icon?, tone?, confirm?, handler(selection, rows) }]"`                                                                    |
  | `[slot=filters]`                                                        | `[slot=filters]` (unchanged), or column `filter` facets                                                                                                |
  | `loading`, `emptyMessage`, `zebra`, `label`                             | unchanged (`loading` now shows skeleton rows)                                                                                                          |
  | a fake `actions` column + `scscCell` switch                             | `rowActions` (and drop the column and the `actions` row field)                                                                                         |
  | `<ng-template scscCell let-row let-col="col">` with `@switch (col.key)` | still works; prefer one `[scscCell]="'key'"` template per column                                                                                       |
  | re-creating the table to clear the selection                            | `table.clearSelection()` (`viewChild(ScscTable)`), or nothing: bulk actions clear it                                                                   |

  The console (users, work queue, audit, cases, notifications, reports), portal (account, case search)
  and the `crud-page` schematic are migrated. `scsc-docket-table` and `scsc-fee-table` stay on their own
  markup until M-2j.

- 1c3c738: **`scsc-tag` v2** (feedback M-2f, WCAG 2f: "Tags enterprise grade").

  - Appearance: `tone` (`neutral`, `primary`, `secondary`, `info`, `success`, `warning`, `error`),
    `variant` (`soft`, `outline`, `solid`), `size` (`sm`, `md`), a leading `icon` (an SCSC alias) or
    `avatarSrc`, and `class`. Every tone and variant uses the theme's ink shades, so all pairings pass
    `a11y:contrast` in the light, dark and high-contrast themes.
  - Behaviour: `removable` renders a real Remove button named "Remove {label}" (`removeLabel`
    replaces the whole name) with a 44 × 44 px pointer target in comfortable density and 24 × 24 px
    in compact (`scsc-hit`); `selectable` renders a toggle button with `aria-pressed` and
    `[(selected)]` (a selected tag fills in and shows a check); `link` (router) and `href` render the
    text as a link; `clickable` renders it as a button that emits `(labelClick)`; `disabled`;
    `maxWidth` truncates long text while the full text stays in the accessible name and a `title`
    tooltip.
  - `SCSC_TAG_TONE` (tone → badge class) and the `ScscTagVariant` type are exported. `ScscTagTone`
    now lives in `lib/tag/tag.ts` (still exported from `@scscourt/design`).
  - Unchanged: `removable`, `label` and `(removed)` work as before; the default look is still a soft
    neutral chip.

  **`scsc-tag-list`** renders each chip through `scsc-tag`, so list chips and lone tags share tones,
  sizes, links and the Remove button. Its API is unchanged.

  **`scsc-avatar-group`**: "+N" is now a real button, named "Show N more people"
  (`moreAriaLabel`), that opens a disclosure listing the hidden people (Escape closes it and
  returns focus). New: `label` (the group is a labelled list), `overflow="auto"` (fit as many
  avatars as the row allows, via the shared `createOverflow`) and `class`.

  **Migration**

  - An avatar group wrapped in `role="img"` (the old way to name it) now nests a button: remove the
    wrapper and pass the names as `label` instead.
  - `scsc-tag`'s Remove button now uses `SCSC_LABELS.remove` for its name (same English text).

- 1c3c738: **Viewer v2: a full controls API and a customizable toolbar** for `scsc-document-viewer` and
  `scsc-image-viewer` (`@scscourt/design/viewer`). Docs: Components → Viewer.

  - **Controller:** both viewers implement `ScscViewerController` (`exportAs: 'scscViewer'`, and the
    `SCSC_VIEWER` token for content projected into them).
    - `state()`: `page`, `pageCount`, `zoom`, `fit` (`none`, `width`, `page`), `rotation`,
      `loading`, `error` and `search` (`query`, `matchIndex`, `matchCount`).
    - `capabilities()` (`search`, `rotate`, `print`, `download`, `thumbnails`, `textSelection`),
      `zoomLimits()`, `strings()`, `name()`, `thumbnailsOpen()`, `searchOpen()`, `isFullscreen()`.
    - Commands: `goToPage`, `next`, `prev`, `zoomIn`, `zoomOut`, `setZoom`, `fit`,
      `rotate('cw' | 'ccw')`, `openSearch`, `search`, `findNext`, `findPrev`, `print`,
      `download(name?)`, `toggleThumbnails`, `fullscreen`.
  - **New inputs:** `toolbar` (`full`, `compact`, `none`, or a list of built-in tool ids and custom
    `{ id, label, icon, handler(viewer), menu?, disabled? }` tools), `initialZoom` (a factor, or
    `width` / `page`), `zoomMin`, `zoomMax`, `zoomStep`, `downloadName`, `labels`
    (`SCSC_VIEWER_LABELS_EN`) and `class`. The document viewer adds `initialPage` and `thumbnails`.
    **New outputs:** `zoomChange`, `loaded` (`{ pageCount }`) and `error` (`{ message, cause }`); the
    document viewer adds `pageChange` and `retry`.
  - **Toolbar customization:** `[slot=toolbar-start]` / `[slot=toolbar-end]` buttons join the
    toolbar; `<ng-template scscViewerToolbar let-viewer>` replaces it; the new
    `scsc-viewer-toolbar [for]="viewer"` renders the standard toolbar anywhere, such as a page
    header. The toolbar is a WAI-ARIA toolbar (one Tab stop, arrow keys, `aria-pressed` toggles).
    `compact` folds secondary tools into a `scsc-menu` "More tools" when the toolbar is narrower
    than 40rem.
  - **Document viewer:**
    - Pages scroll continuously and only the pages near the viewport are rendered.
    - An in-flight pdf.js render is cancelled before the page renders again, and no canvas is
      reused, so fast paging no longer logs "Cannot use the same canvas during multiple render()".
    - Each page has a pdf.js text layer (selectable, read by screen readers).
    - Find (Ctrl/Cmd+F) searches every page, with highlighted hits, next/previous and an announced
      match count.
    - A thumbnails sidebar with the current page marked `aria-current="page"`.
    - A "Page [n] of N" field, fit width/page, rotate, download, print (a hidden iframe of pages
      rendered at 150 dpi) and full screen.
    - Loading is a `role="status"` message, and a load error is a `role="alert"` with Retry.
    - Keyboard shortcuts: PageUp/PageDown, Home/End, +/−, R. They never run while typing in a field.
  - **Image viewer:** fit width/page, rotate, pan by dragging or with the arrow keys, Ctrl + wheel or
    pinch to zoom, and download. Zoom buttons are `aria-disabled` at the limits, so a held Enter no
    longer carries on into the other button.
  - **File viewer:** passes the new inputs and outputs through to the viewer it picks. `controller()`
    returns that viewer. The new `alt` input overrides the image's alt text, and the download link is
    named after the file.
  - `SCSC_PDFJS` loads pdf.js (default `() => import('pdfjs-dist')`). Override it for the legacy build
    or for tests.
  - Icon aliases `action.fit-width`, `action.fit-page` and `action.fullscreen` are added to
    `SCSC_ICONS`.

  **Breaking:**

  - `scsc-image-viewer` `alt` is required.
  - `scsc-file-viewer` `name` is required.
  - The toolbar markup changed. The viewer toolbars are now `role="toolbar"` with a roving tabindex.
  - Page and zoom buttons use `aria-disabled` instead of `disabled`, and keep focus at the limits.
  - The image viewer's "Reset" button is now Fit to width.
  - The document viewer shows every page in one scrolling pane instead of one page at a time. It
    opens fitted to the pane width (`initialZoom="width"`).
  - Tests that looked up the old toolbar buttons, or the `pages` signal, need updating.

- 1c3c738: **Steps v2 and wizard v2.** The wizard is rebuilt on `scsc-steps` (it no longer copies its markup),
  validates steps with Reactive Forms, and gains Cancel, Save draft, a side layout, a review step and
  a submitting state. Docs: Components → Steps and Wizard, and the Wizard vs. steps guide.

  **`scsc-steps`**

  - `ScscStep` gains optional `id`, `description`, `icon`, `state`, `optional` and `clickable`.
    `ScscStepState` is `upcoming | current | complete | error | warning | disabled | skipped`; without
    a `state`, steps before `current` are complete and later ones upcoming.
  - `orientation: 'horizontal' | 'vertical' | 'auto'` (default `auto`): a row that switches to a
    compact "Step 2 of 5 — Documents" line with a thin progress bar when its container is too narrow.
  - `clickable: 'none' | 'visited' | 'all'` with `(stepClick)` (`ScscStepClick { index, step }`):
    clickable steps are buttons; the current and disabled ones never are.
  - `labelPosition: 'end' | 'bottom'`, `label` (the list's accessible name, default "Progress"),
    `optionalLabel`, `stateLabels` and `class`.
  - Each state has visually hidden text and its own marker (check, alert, dash, number), so it is not
    shown by colour alone.

  **`scsc-wizard`**

  - Renders `scsc-steps`. New inputs: `linear` (default `true`), `layout: 'top' | 'side'` (a vertical
    rail beside the step when the wizard is 48rem or wider), `backLabel`, `nextLabel`, `cancelLabel`,
    `saveDraftLabel`, `optionalLabel`, `stepsLabel`, `showCancel`, `showSaveDraft`, `submitting`,
    `headingLevel`, `errorSummary` and `class`.
  - New outputs: `cancelled`, `saveDraft`, `stepChange` (`{ from, to }`) and a preventable
    `beforeNext` (`ScscWizardNextEvent`, call `preventDefault()`). The Cancel output is `cancelled`,
    not `cancel`, so a file input's native `cancel` event bubbling out of a step cannot trigger it.
  - New methods: `goTo(index)` and `focusStep()`.
  - `scsc-wizard-step` gains `heading`, `description`, `optional`, `stepControl`, `canAdvance`
    (sync or async), `completed` and `editable` (default `true`). With a `stepControl`, Next marks it
    touched and, while it is invalid, stays, shows `scsc-error-summary` and focuses the first invalid
    field. Finish checks every step's control before it emits `finish`.
  - Every step change moves focus to the step heading and announces "Step n of N: Label" politely.
    On small screens the actions stick to the bottom of the viewport, with scroll margin so they
    never cover the focused field. Inactive steps are `hidden` and `inert`.
  - New `scsc-wizard-review` (`ScscWizardReviewSection`, `ScscWizardReviewItem`): the answers per step
    as description lists, each with an Edit button that goes back to that step.

  **Breaking**

  - The wizard defaults to `linear: true`. Steps without a `stepControl` or `canAdvance` never block
    Next, so existing flows keep working, but the indicator now only reaches forward to the first
    incomplete step. Set `[linear]="false"` to let users jump to any step.
  - The wizard renders each step's heading (`heading`, else `label`) and `description` above the
    step's content. Move a heading you put at the top of a step into `heading` (and its intro into
    `description`), and start any headings inside the step at level 3 (`headingLevel` sets the
    wizard's). Focus now goes to that heading instead of the first heading inside the step.
  - A `(indexChange)` veto (setting `index` back) still works, but `stepControl` or `(beforeNext)`
    replaces it.
  - `scsc-steps` no longer uses DaisyUI's `.steps` / `.step` / `.step-primary` classes: it is a
    semantic `<ol>` with its own markers and connectors. Styles that targeted those classes need
    updating. `ScscStep`'s new fields are optional, so existing step arrays still compile.

- 183ba0c: **Visual polish from the Court Operations and Court Access Portal reference apps.** Existing
  bindings keep working. The new inputs are optional and default to the old behaviour, except where
  a change is noted as visible.

  Charts (`@scscourt/design/charts`; charts v2 in `feedback-charts-v2.md` keeps all of these and
  renames `ariaLabel` to a required `label`):

  - `scsc-bar-chart` is drawn in HTML. Category labels stay at 12px at any chart width; in the old
    SVG they grew with the card, to 18px on a wide one. Light guide lines sit behind the bars.
    New inputs: `height` (plot height in px, default 180) and `showValues` (prints each value above
    its bar). A long label wraps rather than truncates, so nothing is clipped under WCAG text
    spacing and a narrow card never makes the page scroll sideways.
  - `scsc-line-chart` has a fixed plot `height` (default 180) with guide lines, a soft area fill and
    crisp dots. The new `labels` input prints an x-axis of up to seven evenly spaced labels, always
    including the first and last; below 24rem wide, every other middle label hides so none overlap.
    A non-negative series is now drawn from zero rather than from its minimum (visible change: flat
    series no longer look steep).
  - `scsc-stat-trend` puts the sparkline beside the value, so the label and the delta use the full
    tile width and no longer wrap into a narrow column. A `flat` delta is muted.
  - `scsc-donut-chart` scales its center label with `size`: 14px at the default 120px.
  - `scsc-calendar-heatmap`: `size` and `gap` are public inputs. It draws at its natural size and
    scales down (never up) to fit a narrower container.

  Court and layout:

  - `scsc-calendar` puts each day number in a circle: filled when selected, ringed in gold when it is
    today. Event dots sit directly under their number, and a rule separates the weekday header. The
    selected day was barely visible before. A new `today` input (ISO date) sets which day counts as
    today, for an app that runs on a business date of its own; it defaults to the device's date.
  - `scsc-banner` has a `soft` input: a light tint and border in the tone with ink-coloured words
    (the icon keeps the tone), for a quieter notice inside a page. The solid fill stays the default.
  - `scsc-hearing-card` has a `flush` input that drops the card surface, for agenda rows inside
    another card. On a narrow card, projected actions now drop below the details instead of
    squeezing them into a thin column.
  - `scsc-case-file` shows the Parties and Hearings tabs in the same bordered surface as Documents and
    Financials.
  - The table pager uses chevron buttons and reads "Page 2 of 3" (`scsc-pagination variant="compact"`,
    the pager of `scsc-table paginator="pages"`). It replaces the « 2 / 3 » button group.
  - `scsc-utility-bar` is tinted (`bg-base-200` with a bottom border) so it reads as separate from the
    white masthead.
  - `scsc-user-menu` has a `compact` input: an `xs` avatar and the name only, so a utility bar stays
    the same height after sign-in.
  - `scsc-case-search` caps its form at `max-w-3xl`, so the case-number field no longer stretches the
    full width of a large screen.

  Theme: small controls get a minimum text size. `.btn-xs` is 12px and `.btn-sm`, `.input-sm` and
  `.select-sm` are 13px, up from DaisyUI's 11 and 12px. Control heights are unchanged. Checkbox
  corners are capped at 0.3125rem, so a small checkbox no longer looks like a radio button.

- 1c3c738: **New: runtime i18n and a language switcher, a preferences store, change history and audit log,
  and a comment thread with @mentions.** Everything below is additive; no existing API changes.

  - **Runtime i18n:**
    - **Service:** `provideScscI18n()` / `ScscI18n` switch language at runtime with no reload, in
      English, Spanish, Traditional Chinese, Vietnamese, Korean and Tagalog. Simplified Chinese is
      available but off by default.
    - **Loading:** it negotiates the locale (`?lang=`, saved choice, browser), persists the choice
      through `SCSC_STATE_ADAPTER`, keeps `<html lang>` and `dir` in sync, and lazy-loads JSON
      bundles per namespace.
    - **Messages:** `scscT` and `formatMessage()` implement ICU MessageFormat without a dependency
      (plural, select, selectordinal, number/date/time, apostrophe escaping, plus legacy
      `{{name}}`).
    - **Library strings:** `SCSC_LABELS` follows the active locale. `scscLabelPack()` binds other
      label tokens (for example `SCSC_HISTORY_LABELS` and `SCSC_COMMENT_LABELS`) the same way.
    - **Translation status:** the Chinese, Vietnamese, Korean and Tagalog label packs are
      **machine-drafted** (`SCSC_LABEL_PACK_STATUS`). Have them reviewed by certified translators
      before production.
  - **Formatting:** `SCSC_LOCALE`, `formatDateTime()`, `formatNumber()` and `formatRelativeTime()`,
    plus the `scscDate`, `scscNumber`, `scscCurrency` and `scscRelativeTime` pipes. All follow the
    active locale.
  - **Language switcher:** `ScscLanguageSwitcher` comes as a menu, a list or a select. It shows
    endonyms with a `lang` attribute on each option, can show a machine-translation disclaimer, and
    announces the change in the new language. For URL-routed apps it can emit instead of calling the
    service.
  - **Preferences:** `ScscPreferences` / `provideScscPreferences()` implement `ScscStateAdapter`.
    - **Reads and keys:** synchronous `get`/`set`, a reactive `watch()`, and namespaces via `adapter()`.
    - **Sync:** optional server sync (hydrated before start-up, debounced saves, and an outbox so
      nothing is lost) and cross-tab sync.
    - **Consent:** opt-in gating (`requireConsent: 'preferences'`) holds non-essential writes until
      consent is granted, and purges them if consent is withdrawn.
    - **Device-local keys:** the consent record never syncs to the server by default, because court
      computers are often shared and consent is given before sign-in. Opt in with
      `syncConsent: true`. `localKeys` keeps other keys on the machine too.
    - **Automatic upgrade:** providing it upgrades everything that persists through
      `SCSC_STATE_ADAPTER`.
  - **Change history and audit log:**
    - `ScscChangeHistory` shows per-record changes grouped by day. Old → new values are spelled out in
      text, and long text gets an inline word diff. It supports filters and "load older".
    - `ScscAuditLog` is a system log table with expandable rows, filters and client or server paging.
      CSV export escapes cells that a spreadsheet would run as formulas.
    - `diffObjects()` and `diffWords()` build changes from before/after snapshots.
  - **Comments:**
    - `ScscCommentThread` supports one level of replies, and edit and delete for your own comments.
      It also has resolve and reopen, optimistic and failed states, and a `scscCommentBody` template
      for a Markdown renderer. Links are built safely, never with `innerHTML`.
    - `ScscMentions` (`textarea[scscMentions]`, `input[scscMentions]`) opens an async people list at
      the caret.
    - `ScscReviewComposer` offers approve, request changes or reject, with a note that is required
      for rejections.
  - **Shared types:** `ScscActor`, used by history, audit and comments. The icon alias
    `nav.language` is new.

- 183ba0c: **New: code and data viewers, tree, loaders, motion tokens and an icon system.** Everything below
  is additive; no existing API changes.

  - **`@scscourt/design/code`** (new entry point):
    - `ScscJsonView`: a collapsible JSON tree with search, copy value, copy JSONPath, and raw mode.
    - `ScscXmlView`: rich XML with namespaces, CDATA, copy XPath, and parse errors with line and column.
    - `ScscPayloadView`: auto-detects JSON, XML or text, with Tree / Pretty / Raw tabs, copy and
      download.
    - `ScscMarkdown` and the `ScscMarkdownInput` form control (Write/Preview).
    - `ScscHighlighter` / `provideScscHighlighter()`: highlight.js with theme-aware token colours.

    Install the optional peers `highlight.js` and `marked` to use this entry point.

  - **`@scscourt/design/tree`** (new entry point): `ScscTree` on `@angular/cdk/tree`. It follows the
    APG treeview keyboard model and supports:
    - lazy children, with retry
    - single, multi or tri-state checkbox selection
    - search that keeps ancestors of matches
    - persisted expansion
    - a custom row template via `scscTreeNodeDef`
  - **Loaders:**
    - `ScscPageLoader` (it delays before showing and holds a minimum display time, so it never
      flashes), plus the `SCSC_PRELOADER_HTML` / `SCSC_PRELOADER_CSS` boot splash. New apps from
      `ng generate @scscourt/design:app` include the splash in `index.html`. The mark is your logo
      (`logoSrc`) or the court glyph on a navy disc, inside a turning `primary` arc that stands
      still under reduced motion. Also `appName`, `variant` (`brand` / `minimal`), `size`
      (`sm` / `md` / `lg`) and `mode` (`overlay` / `replace`), with app-wide defaults from
      `provideScscPageLoader({ logoSrc, appName, variant })`. Over a region it sticks near the top,
      below the app chrome. Full page it sits at `--scsc-z-page-loader` (90), under toasts.
    - `ScscTopProgress` with `provideScscTopProgress()` and `scscTopProgressInterceptor`. It sits
      above toasts at `--scsc-z-top-progress` (110).
    - `ScscWorkspaceSkeleton`, a shell skeleton that assembles, then cross-fades into the app with no
      layout shift.
    - `ScscTaskProgress`, a multi-step progress list with retry.
    - `ScscSkeletonPreset`, ready-made skeleton layouts.
  - **Motion:** `--scsc-duration-*` / `--scsc-ease-*` tokens and the `scsc-anim-*-in` / `-out`
    presets, for Angular's `animate.enter` / `animate.leave`. `MOTION` and `prefersReducedMotion()`
    cover JS-driven animation. Reduced motion keeps short fades but removes movement. Set
    `data-motion="reduced"` or `"full"` on `<html>` to override the OS setting.
  - **Icons:**
    - 155 semantic `ScscIconName` aliases (`action.edit`, `status.warning`, `court.hearing`, …),
      which `scsc-icon` accepts alongside raw Lucide names (`resolveScscIcon()` for your own code).
    - `provideScscIcons(SCSC_ICONS)` registers the curated set in one call: every aliased glyph and
      every icon the library renders (about 11 kB gzipped). `provideScscIcons()` now also accepts
      several records.
    - Six court glyphs Lucide lacks (`ScscCourthouse`, `ScscJurorBox`, `ScscFilingStamp`,
      `ScscDocketBook`, `ScscBailiffBadge`, `ScscSealMark`), built into `scsc-icon`.
    - A searchable gallery of every alias and the full Lucide set in the docs.
    - `ICON_MIGRATION_MAP` and `migrateIconName()` map Tabler, Heroicons and Material names to
      aliases, for moving apps off other icon sets.

    **Behaviour change:** an unregistered icon name now renders nothing and warns once in dev mode,
    instead of throwing.

- 183ba0c: **Accessibility: the components meet the WCAG 2.2 AA gates.** The known-debt baseline
  (`e2e/a11y-baseline.json`) no longer lists any class-pattern or keyboard-documentation debt, every
  docs page documents its keyboard use, and every template accessibility lint rule is an error.

  **Contrast**

  - **Muted text is never lighter than 70% ink.** Components and demos used 50–60% (3.2 to 4.4 : 1
    on white). DaisyUI's inactive tabs (50%) and table headings (60%) move to the same floor.
  - **New tone-ink tokens:** `--color-warning-ink`, `--color-secondary-ink` and `--color-neutral-ink`
    (utilities `text-warning-ink`, `text-secondary-ink`, `text-neutral-ink`), set per theme and
    measured by `npm run a11y:contrast`. Soft, outline and dash badges, soft alerts, and outline or
    soft buttons in warning, secondary (gold) or accent now write their words in the ink shade:
    amber words were 3.1 : 1 and gold 3.6 : 1. Outline gold buttons were never flagged by axe,
    which cannot measure buttons with a background image.
  - **Dark theme:** neutral soft and outline badges were dark words on a dark tint (1.2 : 1); they
    now use the light neutral ink.
  - **Calendar and date picker:** out-of-month days are 70% ink instead of 40% opacity (2.5 : 1).

  **Focus, reflow and text spacing**

  - **Focus ring:** a `focus-visible:` or `focus:` outline utility now overrides the theme's gold
    ring, as documented. The ring's selector outranked those utilities, so the opt-out never took
    effect; a plain `outline-none` still loses to the ring.
  - **Banners:** focus rings inside `scsc-banner` (and any `.scsc-focus-current` element) take the
    banner's text colour; the gold ring was 1.3 : 1 on an amber banner.
  - **Rating:** the group draws the focus ring, because the star mask clipped the star's own.
  - **Command palette:** the search row shows the focus ring (its input had `outline-none`).
  - **Reflow at 320px:** the masthead's projected controls keep their size, the title ellipsizes and
    `actions` that do not fit move into a "More" menu (see `feedback-chrome-v2`);
    `scsc-hearing-card` wraps its projected actions; `scsc-pagination` wraps; a hidden tooltip bubble
    no longer widens the page.
  - **Text spacing:** notification titles and bodies and party names wrap instead of truncating.

  **Structure and names**

  - **Shells:** every shell renders the skip link and the `<main>` landmark it targets
    (`scsc-split-shell` only when it is not already inside one). The app and page shells' mobile
    drawer is a modal `<dialog>`: focus moves into it and stays there, Escape or a click on the
    backdrop closes it (a drag that starts in the panel doesn't), and focus returns to the opener.
    The drawer now shows the one `[slot=sidebar]` projection and opens from a menu button the
    masthead renders (see `feedback-chrome-v2`).
  - **`scsc-table`** becomes a named, focusable region while it overflows, so keyboard users can
    scroll it, and gains `label` (the table's accessible name).
  - **`scsc-case-file`**: the open tab's content is its tab panel, named by the selected tab.
  - **`scsc-rich-text-editor`**: the editable area is a named `textbox`. Inside `scsc-form-field` it is
    labelled by the field's label and described by its hint and error, and reports required and
    invalid; standalone, use the new `ariaLabel` input. The toolbar is a WAI-ARIA `toolbar` with a
    roving tabindex, Tab never indents (WCAG 2.1.2), and the editing area has a focus ring; see
    `feedback-editor-v2` for the full v2 changes (toolbar, disabled vs `readonly`, merge-field chips).
  - **`scsc-file-upload`**: the drag-over state is a 5% tint; it rendered solid navy under the text
    (`bg-opacity-*` does nothing in Tailwind v4).

  **Keyboard and focus: forms**

  - **`scsc-search-input`**: `(search)` now always receives the text; Chromium's native `search`
    event from the inner field no longer reaches the host as an `Event`. Escape clears the field and
    emits `''` like the Clear button, and Clear returns focus to the field.
  - **`scsc-number-input`** no longer clamps while you type (emptying the field and typing 5 gave 15,
    then 10): a typed value is clamped on blur or Enter, and the field then shows it. Decrease
    disables at `min` and Increase at `max`, and the field adds PageUp/PageDown and Home/End.
  - **`scsc-tags-input`**: removing a tag with its button moves focus to the next tag's Remove button,
    or to the text field after the last one. The focused button used to take over the next tag, and
    removing the last tag dropped focus to the page.
  - **`scsc-rating`** is one radio group per instance, with its own `name` and `role="radiogroup"`:
    one Tab stop, and the arrow keys no longer change other ratings on the page. Inside
    `scsc-form-field` the group is named by the field label.
  - **`scsc-combobox`** follows the WAI-ARIA combobox pattern: the highlighted option is announced
    through `aria-activedescendant`, options are no longer Tab stops, and ArrowUp, Home and End work
    (Home and End while an option is highlighted). Enter picks only while the list is open, and after
    a pick the list offers every option again. The rest of the combobox work (async search, groups,
    loading/empty/error rows, Alt+arrows, Escape to clear) is in the autocomplete entry.
  - **`scsc-multi-select`** works from the keyboard: Enter, Space or the arrows open the list, which
    is one Tab stop, Space or Enter toggles an option, and Escape or Tab closes it. Each chip has a
    Remove button, and the field button announces its label, its selection and whether the list is
    open.
  - **`scsc-schema-builder`**: fields can be reordered by keyboard or a single click with Move up /
    Move down buttons, which keep focus and announce the new position; the drag handle is no longer a
    Tab stop. Removing a field keeps focus in the builder, and open settings stay with their field.
    The Raw JSON text box keeps your text and caret while you type, and arrowing through a field's
    type no longer leaves stray options or child fields.
  - **`scsc-form-renderer`**: removing the last item of a list moves focus to the previous item's
    Remove button, or to + Add, instead of the page.
  - **`scsc-merge-field-menu`** is a WAI-ARIA menu button: it no longer opens on focus, has one Tab
    stop, and supports the arrow keys, Home/End, type-ahead and Escape. Choosing a token closes the
    menu and returns focus before `insert` fires, so `insertText()` still moves focus into the
    editor. A new `pick` output emits the token's path and label for the editor's
    `insertMergeField()`.

  **Keyboard and focus: menus and popups**

  - **Disclosures, not focus-opened dropdowns:** `scsc-user-menu`,
    `scsc-app-launcher`, `scsc-app-menu`, `scsc-notification-inbox` and `scsc-theme-switcher` open on
    click, Enter or Space instead of on focus, and their trigger carries `aria-expanded`. Escape
    closes them and returns focus; tabbing out or a click outside closes them. Choosing an item
    closes the panel and returns focus to the trigger before the output fires. No panel is an extra
    Tab stop.
  - **`scsc-dropdown`**: the trigger is a real button, and the dropdown is now a full WAI-ARIA menu
    button on the new `scsc-menu` (see the `scsc-menu` changeset).
  - **`scsc-app-menu`** drops `role="menu"`, which it had without the arrow keys; each category is a
    labelled group, and tile descriptions reach keyboard and screen-reader users instead of living
    only in a hover `title`. Inside the `<scsc-app-menu>` custom element, a press on a tile no longer
    counts as a press outside.
  - **`scsc-theme-switcher`**: the current theme is marked with `aria-pressed`.
  - **`scsc-popover`**: Escape returns focus to the trigger instead of dropping it to the page, and
    the panel closes when focus leaves it. The trigger carries `aria-expanded`.
  - **`scscTooltip`** (rewritten): the bubble is a `role="tooltip"` element in a CDK overlay (flips,
    never clipped, works inside dialogs), linked from the control with `aria-describedby`; the
    control's own description ids are kept. It shows after a short hover delay
    (`scscTooltipShowDelay`, 300 ms), at once when the control itself gets keyboard focus, and on a
    touch long-press. It stays open while the pointer is on the host or the bubble
    (`scscTooltipHideDelay`, 100 ms), and Escape hides it without moving focus; that Escape is
    consumed only while a tooltip is open (WCAG 1.4.13). New inputs: `scscTooltipPosition`
    (`top` | `bottom` | `start` | `end`), `scscTooltipDisabled`, and `scscTooltipDescribe`
    (`false` adds no description, for a host whose name already contains the text, such as a
    `<time>` with hidden absolute time). `tooltipPosition` still works but is deprecated. The DaisyUI
    `.tooltip` / `data-tip` classes are no longer set on the host, and the directive no longer needs a
    wrapper around `scsc-button` / `scsc-icon-button`.
    **Breaking:** the text is never the accessible name any more (no `aria-label`). Give every
    icon-only control its own name (`label`, `aria-label`); in dev mode the directive warns when the
    control has none.

  **Keyboard and focus: overlays**

  - **`ScscDialogService` / `scsc-dialog-host`**: focus starts in a prompt's field, on Cancel for an
    `error` or `warning` confirm, and on the confirm button otherwise, so Enter right after opening
    can't confirm a destructive action. Focus stays in the dialog when a queued request replaces the
    answered one, and returns to the opener afterwards, or to its nearest container if the answer
    removed it. (The host now renders through `scsc-modal`: see the overlays v2 notes.)
  - **`scsc-modal`**: Esc no longer closes a `[dismissable]="false"` modal, and the click-away
    backdrop is no longer an invisible Tab stop. `scscAutofocus` content takes focus each time the
    modal opens. (Naming, roles, sizes and focus options: see the overlays v2 notes.)
  - **`scsc-drawer`** is a native `<dialog>`, modal by default: focus moves into the panel and stays
    there, Esc and the backdrop close it, and focus returns to the opener. `scscAutofocus` in its
    content now works. (Sides, sizes and the non-modal option: see the overlays v2 notes.)
  - **`scsc-toast-container`**: toasts pause while the pointer or keyboard focus is on them (new
    `ToastService.pause()` / `resume()`), and Esc dismisses the focused toast. Dismissing a toast
    moves focus to the next one instead of `<body>`.
  - **`scsc-command-palette`** is a native modal `<dialog>` that keeps focus and keys inside it.
    Enter runs the highlighted result once, the highlight scrolls into view, and screen readers
    announce it.
  - **`scscAutofocus`** sets the native `autofocus` attribute, so drawers, modals and native dialogs
    focus the element when they open.

  **Keyboard and focus: navigation**

  - **`scsc-tabs`** follows the WAI-ARIA tabs pattern: the tab list is one Tab stop, and
    ArrowLeft/ArrowRight (wrapping) and Home/End move to and select an enabled tab. Each tab has an
    `id`, the new `panelId` input and `tabId()` method tie your panel to its tab, and `ScscTab.icon`
    now renders as a decorative icon.
  - **`scsc-case-search`**: the search types are one Tab stop, switched with the arrow keys, and the
    form sits in their tab panel. Switching the search type also resets the Case type select, which
    kept showing the old choice while `caseType` was dropped from the criteria.
  - **`scsc-wizard`**: Back and Next move focus to the new step's heading (the wizard now renders
    it; see the wizard v2 notes), and the step is announced as "Step 2 of 4: Documents", which also
    names the step area. Focus no longer drops to the page when Next becomes the finish button, Back
    disables on the first step, or a `finish` handler sends the user back to a step.
  - **`scsc-steps`** states each step in visually hidden words ("completed", "current step", "has a
    problem") and with its own marker, not by colour alone (see the steps v2 notes).

  **Keyboard and focus: data and court**

  - **`scsc-calendar`** is a keyboard grid with a single Tab stop: arrow keys, Home/End and
    PageUp/PageDown move between days and switch months as needed. The month heading announces the
    new month.
  - **`scsc-table`** (which absorbs `scsc-data-table` in this release; see `feedback-table-v2`): the
    View menu is an APG menu button, focus no longer falls to the page after Clear selection or at the
    last page of the pager, and the table frame can be scrolled from the keyboard.
  - **`scsc-docket-table`** can be scrolled from the keyboard on narrow screens: while it overflows it
    is a focusable region named by the new `label` input.
  - **`scsc-data-grid`**: the scrolling viewport is a named, focusable region (new `label` input), and
    the header row stays aligned with its columns when the grid scrolls sideways.
  - **`scsc-document-viewer`**: the page pane is a named region that can be scrolled from the keyboard,
    page changes are announced, and the page buttons stay focusable (`aria-disabled`) at the first and
    last page. The viewer v2 changeset (`feedback-viewer-v2`) adds the text layer, find, thumbnails
    and the controller API.
  - **`scsc-image-viewer`**: zoom buttons are `aria-disabled` at 25% and 400% and keep focus, the zoom level is announced, and
    every part of a zoomed image can be scrolled to.

  **Feedback and status (2f)**

  - **`scsc-alert`** states its tone in words: a visually hidden "Error:", "Warning:", "Success:" or
    "Information:" starts the heading (or the message), so colour and icon are not the only cue. New
    `headingLevel` (default 3); the title is a heading at that level instead of a fixed `<h3>`.
  - **`scsc-banner`**: new `heading`, `headingLevel` and `label`. The region is named by the heading or
    `label` (default "Announcement"), so several banners on a page are distinct landmarks. Status tones
    get the same hidden tone word as alerts. The Dismiss button has a 44px target and is named after
    the banner ("Dismiss Court closure"). The `soft` variant is unchanged.
  - **`scsc-spinner`** speaks its `label` as text inside its `role="status"` region, written just after
    the region renders, so it is announced even when the spinner appears with it (an `aria-label` on an
    empty status region was not). `label` defaults to `SCSC_LABELS.loading`.
  - **`scsc-progress` and `scsc-progress-ring`** announce the amount as a percentage
    (`aria-valuetext`, localized) whatever `max` is; the ring's `aria-valuenow` is clamped to 0–100.
  - **`scsc-stat`** and **`scsc-stat-trend`** state the direction and whether it is good in words
    ("Up, better: +6 this week"), and `scsc-stat` gains the direction arrow. New `goodDirection` on
    both (`down` for a backlog: a fall is green and "better"; `none` never judges). On `scsc-stat`,
    `trend` is the direction and the colour now follows `goodDirection` (default `up`, so existing
    tiles look the same); on `scsc-stat-trend`, `trend` still sets the sentiment unless
    `goodDirection` is set. New chart labels `better` and `worse`.
  - **`scsc-seal`** with `alt=""` is `aria-hidden` (the roundel was a nameless `role="img"`).
  - **`scsc-divider`** is `role="separator"` only without text (with `aria-orientation` when vertical);
    a labelled divider ("OR") is plain text, so the words are read.
  - **`scsc-code-block`**: the Copy button announces "Copied" through the shared live region, keeps the
    name "Copy code" (its visible word stays "Copy"; the icon turns into a check) and has a 44px target.
  - **`scscCopyToClipboard`** announces the copy ("Copied", or the new `copiedMessage`) and warns in dev
    mode when its host is not a button.
  - **`scsc-chat`**: the thread is a `role="log"` named "Conversation" that can be scrolled from the
    keyboard; the composer has a name (new `label`, default "Message") instead of only a placeholder.
  - **`scsc-status-dot`**: new `label` (visually hidden status text for a dot without visible text). The
    pulse stops under reduced motion, including `data-motion="reduced"`.

  **Pagination and timeline (2e)**

  - **`scsc-pagination`**: Previous and Next are `aria-disabled` on the first and last page and keep
    focus there (focus used to jump to the other button, so a held Enter carried into it). The ellipsis
    is plain hidden text instead of an inert button. Page buttons stay "Page N" with
    `aria-current="page"`, `label` names the `<nav>`, and every word comes from `SCSC_LABELS`; the
    compact "Page X of Y" variant is unchanged.
  - **`scsc-timeline`** states each item's status in words (new `statusLabel`, defaulting to the tone
    word) and gives each status its own marker icon. `<time>` gets a `datetime` attribute from the new
    `datetime` field or an ISO `timestamp`. The layout uses logical (RTL-safe) properties.

  **Buttons and headings (2i)**

  - **`scsc-button`, `scsc-icon-button` and `scsc-fab`**: new `ariaExpanded`, `ariaControls`,
    `ariaPressed`, `ariaHaspopup` and `ariaDescribedby` inputs set the attributes on the inner
    `<button>` (ARIA on the host never reached it). `a[scsc-button]` is the native `<a>` and takes
    ARIA attributes directly.
  - **Loading keeps focus**: `loading` sets `aria-disabled` and `aria-busy` instead of `disabled`, so
    focus stays on the button; clicks and form submission are ignored until it ends, the label is
    hidden behind the spinner (the width no longer jumps) but stays the accessible name, and the
    shared "Loading" label is announced politely. `scsc-icon-button` and `scsc-fab` gain `loading`.
  - **`disabledFocusable`** on `scsc-button` and `scsc-icon-button`: a disabled state that stays in
    the tab order (`aria-disabled`), so the reason in `ariaDescribedby` can be heard.
  - **`scsc-icon-button`** logs a dev-mode warning when `label` is blank.
  - **`scsc-card`**: `headingLevel` (2–6, default 3), and a clickable card: `link` (a route) or
    `href` makes the title the card's one link, its stretched `::after` covering the card; buttons and
    links inside stay separate and clickable above it.
  - **`headingLevel`** on `scsc-error-state` (1–6, default 1), `scsc-brand-header`,
    `scsc-juror-status`, `scsc-payment-summary`, `scsc-section`, `scsc-detail-panel`,
    `scsc-error-summary` and `scsc-calendar` (2–6, default 2). Defaults keep today's markup.
  - **`scsc-avatar`**: the initials chip is now `role="img"` named by `name` (it had no name); new
    `alt` overrides the name, and `decorative` hides the avatar (`aria-hidden`, empty `alt`) where the
    name is visible beside it. The library's party list, user menu, comment byline, change history and
    mention list use `decorative`.
  - **`scsc-skeleton`**: `circle` is a boolean attribute (`<scsc-skeleton circle />`).
  - **`scsc-empty-state`** and **`scsc-error-state`**: `icon` takes SCSC aliases (`action.search`).
  - **`scsc-empty-state`**: the title is a heading, `<h2>` by default, with the same look; new
    `headingLevel` (2–6, or `null` for the old paragraph, which the tree, audit log and change history
    use for their empty messages).
  - **`scsc-pagination`**: page, Previous and Next buttons have a 44 × 44 px hit area in comfortable
    density (24 px in compact). The numbered buttons are now separate buttons with a 12px gap
    (4px in compact) instead of a joined group, so the hit areas never overlap.

  **Docs & conformance**

  - **Accessibility Conformance Report** at `/docs/foundations/accessibility/conformance`, in the
    VPAT 2.5 WCAG-edition layout: every WCAG 2.2 A and AA criterion plus the five AAA ones, each with a
    conformance level and remarks, and what applications must provide (page titles, `lang`, alt text,
    heading order, error wording, 3.2.6, 3.3.7, 3.3.8). It is honest about the evidence: every
    automated gate passes, but the manual protocol has not been run, so criteria that need human
    judgement are "Partially Supports" and the library does not claim full conformance. The data lives
    in `conformance.data.ts`, to be updated after each manual run.
  - **Manual testing** at `/docs/foundations/accessibility/manual-testing`: setups and steps per
    component category, reference-app tasks, and a results template (`e2e/manual/TEMPLATE.md`).
  - **Foundations → Accessibility** rewritten to match the code: the focus ring, a contrast table per
    theme generated from the tokens, target sizes per density, motion and the open reduced-motion
    decision, forced colours, the AAA subset, known gaps and what apps must provide.
  - Stale claims corrected: WCAG 2.1 → 2.2 (READMEs, `atlas.yaml`, the portal statement, the app
    scaffold), field errors are no longer `role="alert"` (input, select, textarea, checkbox, radio,
    forms schema pages), and the responsive and page-layout tables show what 0.5.0 delivered.
  - Every interactive docs page now lists "What you must provide" (`appMustProvide`), and
    `docs.registry.spec.ts` requires it.
  - `CONTRIBUTING.md` has a new-component accessibility checklist. The component schematic's spec
    scaffolds an axe test and keyboard specs, and its docs page a keyboard table, ARIA notes and
    `appMustProvide`. The app schematic adds `provideScscRouteA11y()` and the WCAG 2.2 axe tags.
  - **`theme.css` is scoped to the library.** The build used Tailwind's automatic source detection
    across the whole repository, so the bundle carried showcase classes and junk selectors
    (`.[docs:api]`). It now scans only the built library (`source(none)` plus `@source` on the
    bundles), plus the theme's own utilities (`scsc-pad-*`, `scsc-gap-section`, `elevate*`): about
    13% smaller (278 KB → 242 KB, 1,338 → 1,087 classes) with every class the library templates use.
    **Check your app** if it uses `theme.css` without Tailwind and relies on utility or daisyUI classes
    the library itself never uses (for example `card-body`, `hero`, `grid-cols-12`): they are no
    longer in the bundle. Apps that compile with Tailwind and `@source` the package are unaffected.

  **Labels:** new `SCSC_LABELS` keys (English and Spanish; the draft packs fall back to English):
  `dismissItem`, `copyCode`, `density`, `densityCompact`, `densityComfortable`, `trendUp`,
  `trendDown`, `trendFlat`, `trendOf`, `better`, `worse`, `conversation`, `message`,
  `assistantTyping`. `scsc-search-input` (Clear), `scsc-theme-switcher` (Theme, Density, Compact,
  Comfortable), `scsc-stat-trend` (the sparkline's "… trend" name), `scsc-number-input` (Decrease/Increase, now named after `ariaLabel`), `scsc-chat`
  and `scsc-code-block` no longer hard-code English. For a plain `Provider` (a component's
  `providers`), use `scscLabelPack(SCSC_LABELS, …)`; `provideScscLabels()` stays app-wide.

  **New API:** `label` on `scsc-table`, `scsc-docket-table` and `scsc-data-grid`;
  `ariaLabel` on `scsc-rich-text-editor`; `panelId` and `tabId()` on `scsc-tabs`;
  `ToastService.pause()` and `resume()`; `headingLevel` on `scsc-alert`; `heading`, `headingLevel` and
  `label` on `scsc-banner`; `goodDirection` on `scsc-stat` and `scsc-stat-trend`; `copiedMessage` on
  `scscCopyToClipboard`; `label` on `scsc-chat` and `scsc-status-dot`; `datetime` and `statusLabel` on
  `ScscTimelineItem`.

  **Breaking:**

  - `label` is required on `scsc-progress` and `scsc-progress-ring` (a template without it no longer
    compiles; an empty one logs a dev-mode warning).

  **Behaviour changes to check in your app:**

  - Menus and popups no longer open when their trigger receives focus, and their items render only
    while open. Tests that find items without opening the menu must click the trigger first.
  - The drawer and command palette render a native `<dialog>`, whose role is implicit: query
    `dialog`, not `[role=dialog]`.
  - A tooltip no longer renames its element: tests that find a control by its tooltip text must use
    the control's own name.
  - The schema builder's remove button is named "Remove <key>" instead of "Remove field".
  - `scsc-number-input` keeps the last in-range value in the form while an out-of-range number is
    being typed, and clamps it on blur or Enter.
  - `scsc-multi-select` puts its chips' Remove buttons before the field button in the Tab order, and
    marks the control touched when focus leaves it.
  - A `warning` confirm, like an `error` one, starts with focus on Cancel.
  - `scsc-pagination`'s Previous/Next are no longer `disabled` at the ends: test for
    `aria-disabled="true"`. `scsc-spinner` has no `aria-label`; its text is its content.
  - `scsc-number-input`'s step buttons are named "Decrease <ariaLabel>" / "Increase <ariaLabel>".
  - `scsc-alert`, `scsc-banner` and `scsc-timeline` text now includes the hidden tone word: tests that
    compare `textContent` exactly need updating.
  - `scsc-button` with `loading` is no longer `disabled`: test for `aria-disabled="true"`. Its label
    is transparent while loading, so drop "Saving…" label swaps (they are no longer visible).
  - An initials `scsc-avatar` is now an image named by `name`; mark it `decorative` where the name is
    already shown next to it, or screen readers hear the name twice.

- 183ba0c: **Accessibility: WCAG 2.2 AA foundations.** The library's conformance target is now WCAG 2.2 AA
  plus AAA 1.4.6 (high-contrast theme), 2.3.3, 2.4.12, 2.4.13 and 2.5.5 (comfortable density). This
  release adds the building blocks the components are moving onto, exported for your own patterns:

  - `scscPopup` / `scscPopupTrigger` / `scscPopupPanel`: open/close behaviour for disclosures,
    popups and non-modal dialogs. It keeps `aria-expanded` / `aria-controls` / `aria-haspopup` in
    sync, closes on Escape (returning focus), on focus leaving, and on an outside pointer press.
  - `ScscAnnouncer`: debounced screen-reader announcements through one persistent live region.
  - `scsc-skip-link`, `scsc-error-summary`, `provideScscRouteA11y()` (focus the new page's `<h1>`
    and announce its title on route change), `preserveFocus()`, `focusTarget()`,
    `focusFirstInvalid()`, and `gridKeyTarget()` / `calendarKeyTarget()` for 2-D keyboard
    navigation.
  - `SCSC_LABELS` + `provideScscLabels()`: the language the library speaks to assistive
    technology. English is the default and a Spanish pack (`SCSC_LABELS_ES`) ships too. Pass a
    factory returning a signal to follow your app's language switch at runtime.

  **Form fields now wire themselves to their control.** Inside `scsc-form-field`:

  - `scsc-input`, `scsc-select` and `scsc-textarea` are wired, as is the inner field of
    `scsc-combobox`, `scsc-multi-select`, `scsc-search-input`, `scsc-tags-input` and
    `scsc-number-input`.
  - **Label:** the control gets an id if it has none, and the label's `for` points at it. `for` is
    now optional.
  - **Description:** the control is described by the hint and the error (`aria-describedby`,
    merged with any you set).
  - **State:** it gets `aria-invalid` while an error shows, and `aria-required` when the field is
    `required`.
  - **New:** `scsc-fieldset` labels a group of radios, checkboxes or linked controls with a
    legend, hint and error.

  **Theme: contrast, focus and motion now meet WCAG 2.2 AA.** All sanctioned colour pairings pass in
  the light, dark and high-contrast themes; `npm test` re-measures them from the tokens.

  - **Focus ring:** one 2px gold outline, offset 2px, on every interactive element. DaisyUI's own
    per-component rings used to override it; a neutral button on the dark canvas measured 1.35 : 1.
  - **Field borders:** input, select, textarea, file-input, checkbox and radio borders are now 50%
    ink (about 3.7 : 1) instead of DaisyUI's 20% (1.5 : 1). They look noticeably darker.
  - **Tokens (light theme):**
    - success `oklch(58% …)` → `oklch(52% …)`;
    - info `oklch(55% …)` → `oklch(54% …)`;
    - warning `oklch(68% …)` → `oklch(65% …)`;
    - `secondary-content` is dark ink instead of white, so text on gold buttons and badges is
      dark.
  - **Motion:** `prefers-reduced-motion: reduce` stops animations and transitions everywhere.
  - **Sticky chrome:** pages using the shells get `scroll-padding-top`, so the sticky masthead
    never covers the focused element.
  - **Font size:** the root font size follows the user's browser setting (it was pinned to 16px).
  - **Compact density:** targets never go below 24 × 24 px.
  - **New `scsc-hit` utility:** gives small icon buttons a 44 × 44 px target without changing how
    they look.
  - **Theme service:** `ScscThemeService.setTheme('system')` follows the OS dark-mode and
    increased-contrast settings, and updates when they change. `scsc-theme-switcher` offers it as
    "Match system". The default is still Light.

  **Migration**

  - `@angular/cdk` is now a **required** peer dependency (it was optional). If your app does not
    have it yet, run `npm i @angular/cdk@^22`. `ng add` and the app schematic install it.
  - `@angular/router` is now declared as a peer dependency. The navigation components already
    needed it, so an app that uses them has it already.
  - A field's error message is no longer `role="alert"`. Several failing fields used to interrupt
    screen readers once each on submit. Now each error is read with its field, and a rejected
    submit should show `scsc-error-summary` and move focus to it (see Accessibility utilities in
    the docs).
  - The hint stays visible while an error shows. The error is placed below it.
  - Don't use `text-warning` on words. At about 3.3 : 1 it passes for icons and dots, but not for
    text. Put the words in ink beside a warning icon, or on a `bg-warning` fill.
  - `ScscThemeService.themes` now includes `{ value: 'system' }`, and the value type is
    `ScscThemePreference`. `theme()` is still the applied theme; the new `preference()` is what the
    user picked.
  - Apps that share only the theme (Atlas, Notification, Locator) get the new focus ring, borders
    and colours by upgrading `@scscourt/design-theme`. Check any chrome they hand-roll against the
    new values.

## 0.4.0

The foundation moves from cream to **cool court paper**, a navy-tinted off-white. The app chrome
now matches the court's back-office apps (Atlas, Notification, Judicial Locator).

### Packages renamed: `@scsc/*` → `@scscourt/*` (action required)

The packages now publish to GitHub Packages under the SCSCourt organisation, which requires the
npm scope to match the org. Selectors (`scsc-*`), class names (`ScscButton`) and the theme names
are unchanged.

- `@scsc/design` → `@scscourt/design` — update every import, `ng add`/`ng generate` invocation,
  and the `@source` line in your global stylesheet.
- `@scsc/design-theme` → `@scscourt/design-theme`. The theme now shares the library's version
  number (this release: 0.4.0, superseding the 0.2.0 theme tarball).
- Add to the app's `.npmrc`: `@scscourt:registry=https://npm.pkg.github.com/`, and a token with
  `read:packages` to your user `~/.npmrc` (see the Install page in the docs).

```bash
# in a consuming app
npm uninstall @scsc/design @scsc/design-theme
npm i @scscourt/design@^0.4.0
grep -rl "@scsc/" src | xargs sed -i 's#@scsc/#@scscourt/#g'
```

### Theme tokens (`scsc-design`)

| Token                                | Was                                | Now                                                 |
| ------------------------------------ | ---------------------------------- | --------------------------------------------------- |
| `--color-base-200` (canvas)          | `oklch(96.5% 0.008 85deg)` #F6F3ED | `oklch(97% 0.004 264deg)` #F4F5F8                   |
| `--color-base-300` (borders)         | `oklch(89% 0.014 85deg)` #DFDAD1   | `oklch(90% 0.008 264deg)` #DBDEE3                   |
| `--color-primary`, `--color-neutral` | `oklch(30% 0.08 264deg)` #192B55   | `oklch(28.1% 0.07 261deg)` #14284B (the brand navy) |

- In `scsc-design-dark`, `--color-base-content` and `--color-neutral-content` become
  `oklch(94% 0.005 264deg)`, replacing a cream tint.
- Unchanged: white surfaces, ink, gold, status colors, and the high-contrast theme.

### Chrome

- **`scsc-masthead`** is now a 64px white bar with a hairline border that runs edge to edge.
  - `accent` (the gold bottom rule) now defaults to **off**. Pass `accent` to keep it.
  - New `contained` input: centers the row at 90rem, for public portals.
  - New `topbar` input: renders the navy strip, for a masthead used without a shell.
  - The title is semibold. The subtitle is small tracked capitals at `text-base-content/70`, which
    passes AA contrast.
- **`scsc-app-shell` and `scsc-page-shell`** now render the 4px navy strip themselves, inside the
  sticky header.
  - Remove any `<div class="scsc-topbar">` you placed above them, or pass `[topbar]="false"`.
  - The layout is full-bleed: the sidebar is now 224px, pinned to the left edge, and runs the
    full height.
  - `scsc-page-shell` keeps its content centered at 90rem.
- **`scsc-portal-shell` and `scsc-focused-shell`** gain the same `topbar` input. It defaults to on,
  so they look the same.
- **Active navigation** (`scsc-sidebar-nav`, `scsc-primary-nav`, `scsc-tab-nav`) now shows its gold
  markers. Stylesheet order used to let the base classes override them.
  - The active link carries `aria-current="page"`.
  - Nav items take an optional `exact` flag for root links such as "Dashboard" or "Home".
- **`scsc-page-header`** titles are navy semibold.
- The navy strip is hidden when printing.

### New

- **`a[scsc-button]`** (`ScscButtonLink`): a link styled as `scsc-button`, for actions that navigate.
  It keeps link semantics (new tab, history, announced as a link) with the button's variants and
  sizes. Use it instead of nesting `<scsc-button>` inside `<a>`.
- **Labelling inputs** for composite controls: `scsc-number-input` gains `inputId` and `ariaLabel`;
  `scsc-date-picker` gains `inputId` and `invalid`. Point `scsc-form-field [for]` at the `inputId`.
- **`scsc-case-file`** emits `viewDocument` (forwarded from its docket tab).
- **`scsc-calendar`** gains `[(selected)]` to highlight the picked day. `initialMonth` now defaults to
  the current month (it was a fixed July 2026).
- **`scsc-popover`** gains `label`, the accessible name of its panel.
- **`scsc-file-viewer`** gains `workerSrc`, passed to the document viewer for PDFs.

### Fixes

- **`scsc-document-viewer`** renders PDFs with pdf.js 6. Every PDF showed "Unable to load document."
  for two reasons, both fixed:
  - pdf.js 6 rejects a bare URL string. The viewer now passes `{ url }`, which pdf.js 4 and 5 also
    accept.
  - The default worker URL floated on `pdfjs-dist@6`, which jsDelivr now serves as 6.3, and pdf.js
    refuses to run with mismatched API and worker versions. `workerSrc` now defaults to empty,
    which loads the worker for the installed version.
- **`scsc-document-viewer`**: relative `src` and `workerSrc` URLs resolve against `<base href>`, like
  `<img src>`, so they work in apps served from a sub-path. In development mode, a failed load logs
  its cause to the console.
- **`scsc-heading`** levels 1–5 rendered an empty heading. Only one of the template's `@switch`
  branches received the projected content. Content now renders at every level.
- **`scsc-chat`**: the typing indicator is announced ("Assistant is typing") through the thread's
  live region. It used an `aria-label` on a plain `span`, which assistive technology ignores.
- **`scsc-app-menu`**: the panel carries `role="menu"` only while it lists apps; the loading
  message is a `role="status"`. Loading, error and empty menus previously exposed a menu with no
  items.
- **`scsc-tab-nav`** no longer claims `role="tablist"`. It is router navigation, and the active
  link's `aria-current="page"` already conveys the state.
- **`scsc-list`** no longer shows bullet markers beside projected `<li>` rows.
- **`scsc-time-picker`** shows values written by the form (it showed 1:00 AM until each select was
  changed); off-step minutes snap to the nearest 5.
- **`scscMask`** shows values written by the form (initial value, `patchValue`, `reset`) before the
  first keystroke, and follows `disable()`.
- **`scsc-file-upload`** can be reached and opened from the keyboard: the file input is visually
  hidden instead of `display: none`, and the drop zone shows the focus ring.
- **`scsc-pagination`** buttons are `type="button"`, so paging inside a `<form>` no longer submits it.
- **`scsc-command-palette`** moves focus into its search box when it opens and returns focus to the
  opener when it closes.
- **`scsc-dropdown`** exposes `aria-expanded` on its trigger.
- **`scsc-tags-input`** names each remove button after its tag ("Remove Probate").
- **`scsc-date-picker`** opens on the value's month, otherwise the current month (it always opened on
  January 2026); day buttons carry the full date as their name, `aria-pressed` for the selection and
  `aria-current="date"` for today.
- **`input[scsc-input]`, `select[scsc-select]`, `textarea[scsc-textarea]`**: `[invalid]` also sets
  `aria-invalid`.
- **`scsc-section`**: the heading row wraps on narrow screens instead of overflowing.
- **`scsc-case-file`** opens the first tab that has data (it always opened Parties) and renders no
  empty tab list for a case without tab data.
- **`scsc-progress`** without a `value` is indeterminate (it rendered an empty bar).
- **`scsc-popover`**: clicking the trigger of an open popover closes it (it closed and reopened), and
  a static `align="end"` no longer right-aligns the panel's text.
- **`scsc-modal`** and the `ScscDialogService` dialogs are named by their titles; the prompt's text
  field is labelled by its question.
- **`scsc-error-state`**: `maintenance` shows no "Error —" line, and the code line meets text contrast.
- **`scsc-calendar`** marks today (`aria-current="date"`) and names every day with its full date and
  events (days were bare numbers).
- **`scsc-card`**: `[slot=header]` content sits beside the title, as its example shows, and still
  renders when the card has no `title` (it was dropped).
- **`scsc-case-header`** prints no stray separator when only the filing date is set.
- **`scsc-case-search`** exposes the selected tab (`aria-selected`), and switching search type clears
  the other type's criteria (they were still sent).
- **`scsc-notification-inbox`** announces unread items instead of showing them by colour alone;
  timestamps meet text contrast.
- **`scsc-docket-table`**: the view-action column has a header for screen readers.
- **`scsc-combobox`** is marked touched only once the user has opened it. Any press elsewhere on the
  page marked it touched, so required errors appeared on comboboxes nobody had used. Tabbing away
  now also closes the list.
- **`scsc-schema-builder`**: each field's type select shows that field's type. Every row read "Text"
  because the select's value was applied before its options were rendered. Rows now wrap in narrow
  containers (a side panel, beside a live preview) instead of spilling over neighbouring content.
- **`scsc-form-renderer` / `scsc-field-control`**: every rendered control is now labelled by its
  field label. Date, select and other fields without a placeholder had no accessible name.

### Tailwind `@source` (required)

Tailwind v4 doesn't scan `node_modules`. Point it at the library, or the classes the components use
are never generated:

```css
@import 'tailwindcss';
@plugin "daisyui";
@import '@scscourt/design/styles';
@source '../node_modules/@scscourt/design'; /* relative to this stylesheet */
```

`ng add @scscourt/design` and `ng generate @scscourt/design:app` now write this line.

### Restoring the old canvas

```css
[data-theme='scsc-design'] {
  --color-base-200: oklch(96.5% 0.008 85deg);
  --color-base-300: oklch(89% 0.014 85deg);
}
```

### Documentation site replaces Storybook

Storybook is gone. The showcase app is now the documentation site (`npm start`, then `/docs`):
getting started, foundations, one page per component with live demos and copy-ready code, a
generated API reference, patterns, this changelog and a compatibility matrix. Every exported
class is documented (enforced in `npm test`), and every demo is checked with axe-core.

- `scsc-code-block` accepts projected markup (e.g. syntax-highlighted code) in place of its plain
  text rendering, and its code area is keyboard-scrollable.
- `ng generate @scscourt/design:component` now scaffolds a docs page instead of a story.

### Versioning and release tooling

- `SCSC_DESIGN_VERSION` is exported from `@scscourt/design`.
- Releases use Changesets; `npm run release` publishes to GitHub Packages and tags
  `@scscourt/design@<version>`; `npm run docs:build` produces versioned docs
  (`/v<version>/`, `/latest/`), and `npm run docs:build:next` builds `/next/` from main.
- The docs header has a version switcher that opens the current page in another version. Older
  versions and `next` show a notice linking to the latest release, and the Versions page
  (`/docs/versions`) lists every build.

### Licensing

- Both packages now ship `LICENSE` and `THIRD-PARTY-NOTICES.md`. The license is proprietary
  (`UNLICENSED`), and the court seal may be used only in official court applications. The notices
  carry the Tailwind CSS and daisyUI licenses for the code compiled into `theme.css`, and list every
  dependency and peer dependency with its license text.
- `npm run licenses` regenerates the notices from `node_modules` and fails on any license outside
  the permissive allowlist. Library builds and `docs:check` run it with `--check`.
- The docs have a Licenses page (`/docs/licenses`), and each docs version serves the site's own
  `3rdpartylicenses.txt`.
- `scsc-app-menu.js` starts with a license banner and ships with `scsc-app-menu.licenses.txt`.
  Deploy the two files together.

### Downstream apps

- **Atlas, Notification, Judicial Locator** use the `@scsc/design-theme` 0.2.0 tarball, which
  carries this release's theme. They move to `@scscourt/design-theme` 0.4.0 (same CSS) on their
  next update.
- **Compass, IT Projects, Parakeet, EdTracker** pick up these changes on their next bump, which now
  means switching to `@scscourt/design` (see "Packages renamed" above).
  - IT Projects and Parakeet need the `@source` line. Once IT Projects has it, it can drop its
    "Masthead corrections" overrides.
  - Parakeet installs `scsc-design/dist/design` directly, so its next `npm install` picks up the
    renamed package. Rename its dependency and imports to `@scscourt/design` in the same change:
    the secondary entry points import `@scscourt/design` internally and will not resolve under the
    old name.
  - Compass's standalone masthead can add `topbar`.
- **`<scsc-app-menu>`** (the embedded element) takes its colors from the host page, so it doesn't
  need a redeploy.
