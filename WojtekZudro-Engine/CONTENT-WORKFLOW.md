# Content workflow (1-2 posts/week)

## New post flow

1. Create a new `.md` file in `src/content/blog/`.
   - You can start from `POST-TEMPLATE.md` and copy its structure.
2. Fill frontmatter:
   - `slug`
   - `title`
   - `description`
   - `date`
   - `category`
   - `readingTime`
   - `featured`
   - `tags`
3. Write content using clear `##` and `###` headings.
4. Run `npm run build` and fix any schema/content errors.
5. Deploy updated `dist/`.

## Editorial guardrails

- Keep one clear search intent per article.
- Add practical examples and actionable sections.
- Avoid keyword stuffing; write for users first.
- Keep descriptions concise (40-180 chars).

## Monthly maintenance

- Refresh 2-4 older posts with updated facts.
- Add internal links between related articles.
- Promote one high-value article as `featured`.
