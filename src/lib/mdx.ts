import fs from 'fs';
import path from 'path';

export function getMdxContent(lang: string, slug: string) {
  // Translate slug to filename
  const filename = slug === '' ? 'Home' : slug.charAt(0).toUpperCase() + slug.slice(1);
  const rootPath = path.join(process.cwd(), 'extracted_content', lang, `${filename}.md`);

  try {
    const fileContents = fs.readFileSync(rootPath, 'utf8');

    // Split by '---' to get different sections, handling different line endings
    const sections = fileContents.split(/\r?\n---\r?\n/).map(s => s.trim()).filter(Boolean);

    return sections;
  } catch (error) {
    console.error(`Error reading MDX file for ${lang}/${filename}`, error);
    return [];
  }
}
