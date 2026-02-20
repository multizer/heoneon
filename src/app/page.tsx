import { getMdxContent } from '@/lib/mdx';
import { SectionRenderer } from '@/components/SectionRenderer';

export default function Home() {
  const sections = getMdxContent('en', '');

  return (
    <>
      {sections.map((sectionContent, index) => (
        <SectionRenderer key={index} index={index} content={sectionContent} />
      ))}
    </>
  );
}
