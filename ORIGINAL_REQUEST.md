# Original User Request

## Initial Request — 2026-09-23T17:42:13Z

Conduct a comprehensive performance audit on why page transitions and route switching in the Next.js + Payload CMS application are occasionally laggy and slow. Identify root performance bottlenecks across client routing, component lifecycle, animations, embedded media, and bundle chunk sizes, and produce a structured, actionable audit report ready for immediate assignment to an implementation subagent.

Working directory: c:\projects\avm-church
Integrity mode: development

## Requirements

### R1. Page Navigation & Route Transition Profiling
Analyze client-side navigation between primary routes (`/`, `/about`, `/ministries`, `/store`, `/give`, `/testimonials`, `/bible-college`, `/prayer-house`, `/sunday-school`, `/sophia-institute`, `/branches`). Identify sources of transition lag, including heavy component mounting overhead, synchronous data fetching delays, lack of code-splitting/dynamic imports on heavy sub-components, and layout recalculations.

### R2. Component, Animation & Rendering Overhead
Profile heavy client components to pinpoint CPU stalls and main-thread blocking during page mount and unmount:
- Framer Motion scroll and text reveal hooks (`RevealOnScroll`, `TextWordReveal`, `BlurTextReveal`, `GoldBarReveal`)
- Swiper carousel / Coverflow 3D animations and infinite marquee loops
- Multiple YouTube iframe video embeds and HTML5 `<video>` autoplay elements

### R3. Bundle Chunks & Asset Loading Analysis
Inspect client bundle chunk sizes, third-party libraries (`swiper`, `framer-motion`, `lucide-react`, `payloadcms`), image optimization strategies, and font loading to find optimization opportunities.

### R4. Actionable Audit Report
Deliver a structured markdown audit report detailing:
1. **Executive Summary**: Core latency drivers ranked by impact
2. **Detailed Findings**: Specific component files, code lines, and benchmark metrics / root causes
3. **Prioritized Action Plan**: Step-by-step remediation tasks (Critical, High, Medium, Low) with recommended code fixes formatted clearly for an implementation agent to execute

## Acceptance Criteria

### Audit Depth & Actionability
- [ ] Covers all primary routes, key heavy UI components (carousels, marquees, iframes, animations), and bundle chunk configurations.
- [ ] Explains the exact mechanism behind page transition delays (e.g. main-thread blocking during unmount/remount, heavy CSS/JS execution, eager loading).
- [ ] Provides concrete, file-specific code solutions and architectural fixes ready for an implementation subagent to resolve directly.


## Follow-up — 2026-10-11T07:59:01Z

Conduct a comprehensive, page-by-page audit across all frontend routes in the Next.js / Payload CMS repository (`c:\projects\avm-church`). Identify all hardcoded UI sections lacking CMS backing, evaluate hero section multi-media capabilities (video/image formats, fallback handling), and deliver an actionable sequential remediation blueprint to fix issues one page at a time.

Working directory: c:\projects\avm-church
Integrity mode: development

## Requirements

### R1. Independent Page-by-Page CMS Audit
Scan every route in `src/app/(frontend)` individually:
- Catalog all hardcoded copy, headings, descriptions, stats, lists, contact details, and CTA links that are currently static in TSX instead of being backed by Payload CMS collections or globals.
- Provide exact source file paths and line ranges for every hardcoded element discovered.
- Map out which Payload CMS schema additions (new collections, global configs, or field adjustments) are required to make each page fully dynamic.

### R2. Hero Section Multi-Media Capabilities Evaluation
Examine the hero section implementation across all pages:
- Check support for diverse media types: static images, background videos (MP4/WebM), external video streams (YouTube, Vimeo), poster frames, and fallbacks.
- Assess responsive format handling, loading performance, aspect ratios, and format tolerances in both the `Media` collection and frontend rendering components.
- Document gaps where heroes currently only accept static images or lack video/multi-format support.

### R3. Sequential Page-by-Page Remediation Blueprint
Synthesize the audit findings into a structured, prioritized implementation plan:
- Grouped page-by-page so that fixes can be applied iteratively without breaking site consistency.
- Specify prerequisites (e.g. shared CMS blocks, media schema migrations) followed by individual page migration checklists.

## Acceptance Criteria

### Coverage & Specificity
- [ ] Every frontend route in `src/app/(frontend)` has a dedicated audit section in the final report.
- [ ] All static content findings specify the exact component file path, line numbers, and proposed CMS field name/type.
- [ ] Hero sections on every page are explicitly evaluated for multi-format media support (video/image/streaming) with identified shortcomings.
- [ ] The remediation roadmap is broken down sequentially page-by-page with clear verification steps for each page.
