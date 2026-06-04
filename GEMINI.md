# Eritage ENT Care — Project Instructions

## SEO & Production Safety Protocol

### CRITICAL CONTEXT

This website is a live production healthcare website that has already been indexed by Google and has accumulated search-engine trust, rankings, crawl history, backlinks, and user engagement signals.

The primary objective is to preserve and improve existing SEO equity while making safe, minimal, and targeted changes.

### Default Operating Principle

Before making any code, content, metadata, routing, or structural modification:

1.  Assume every existing URL may already be indexed.
2.  Assume every existing ranking signal has value.
3.  Prefer surgical changes over broad refactoring.
4.  Minimize the number of files changed.
5.  Avoid modifying unrelated functionality.

### SEO Preservation Requirements

Never unintentionally modify:

-   URL structures
-   Existing page slugs
-   Canonical URLs
-   Robots directives
-   Sitemap structure
-   Structured data
-   Internal linking architecture
-   Navigation hierarchy
-   Open Graph metadata
-   Existing title tags
-   Existing meta descriptions
-   Indexability settings
-   Crawlability settings

Any modification affecting the above requires explicit justification.

### Content Update Protocol

When adding new articles or pages:

-   Follow Google Search Essentials.
-   Follow Helpful Content guidance.
-   Follow E-E-A-T principles.
-   Create genuinely useful content for users first.
-   Avoid keyword stuffing.
-   Use semantic heading hierarchy.
-   Add appropriate internal links.
-   Ensure sitemap inclusion.
-   Ensure discoverability from existing site pages.
-   Optimize metadata.
-   Optimize for mobile-first indexing.

### Structured Data Requirements

Where appropriate, evaluate support for:

-   Article schema
-   FAQ schema
-   Breadcrumb schema
-   Organization schema consistency

Do not create duplicate or conflicting schema.

### Performance Protection

Do not introduce:

-   Unnecessary JavaScript
-   Large dependencies
-   Blocking resources
-   Render delays
-   Core Web Vitals regressions

Protect:

-   LCP
-   CLS
-   INP
-   Mobile performance

### Technical SEO Validation

Before completing any task, verify:

-   Site builds successfully.
-   No broken links were introduced.
-   No sitemap errors exist.
-   No routing errors exist.
-   No metadata regressions exist.
-   No structured-data regressions exist.
-   No accessibility regressions exist.

### Change Reporting

After every implementation provide:

#### Files Modified
List every changed file.

#### Purpose
Explain why each file was modified.

#### SEO Impact
State:
-   Crawlability impact
-   Indexability impact
-   Internal-linking impact
-   Metadata impact
-   Structured-data impact

#### Risk Assessment
Classify the change as:
-   Low Risk
-   Medium Risk
-   High Risk

### Stop Conditions

Stop and request approval before:

-   Changing site architecture.
-   Changing routing systems.
-   Changing URL structures.
-   Removing content.
-   Changing canonical URLs.
-   Altering robots directives.
-   Modifying sitemap generation logic.
-   Replacing structured data systems.
-   Installing major dependencies.
-   Refactoring large sections of the codebase.

### Success Criteria

Every change must satisfy:

-   Zero SEO regression.
-   Zero crawlability regression.
-   Zero indexability regression.
-   Zero structured-data regression.
-   Zero unnecessary file modifications.
-   Production-safe implementation.
-   Improved user value.

---

## Technical Stack

-   **Frontend**: React (Vite) + TypeScript
-   **Styling**: Tailwind CSS + shadcn/ui
-   **Routing**: React Router
-   **SEO**: React Helmet Async
-   **Content**: Markdown-based articles via `src/content/articles/`
-   **Deployment**: Vercel
