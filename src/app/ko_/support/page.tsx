import { getMdxContent } from '@/lib/mdx';
import { SectionRenderer } from '@/components/SectionRenderer';

export default function Page() {
  const sections = getMdxContent('ko', 'support');

  return (
    <>
      {sections.map((sectionContent, index) => (
        <SectionRenderer key={index} index={index + 1} content={sectionContent} />
      ))}
    </>
  );
}
