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
