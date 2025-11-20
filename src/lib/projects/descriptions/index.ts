type MarkdownLookup = Record<string, Record<string, string>>;

const markdownModules = import.meta.glob('/src/lib/projects/descriptions/**/*.md', {
  as: 'raw',
  eager: true
});

const markdownByLocale: MarkdownLookup = {};

for (const [path, content] of Object.entries(markdownModules)) {
  const match = path.match(/descriptions\/([^/]+)\/([^/]+)\.md$/);
  if (!match) continue;

  const [, locale, projectId] = match;
  markdownByLocale[locale] ??= {};
  markdownByLocale[locale][projectId] = (content as string).trim();
}

export function getProjectMarkdown(locale: string, projectId: string): string {
  return markdownByLocale[locale]?.[projectId] ?? markdownByLocale.en?.[projectId] ?? '';
}

