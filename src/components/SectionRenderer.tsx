import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from './MDXComponents';

export function SectionRenderer({ content, index }: { content: string, index: number }) {
    const isFirst = index === 0;

    if (isFirst) {
        return (
            <section id="hero">
                <div className="container">
                    <MDXRemote source={content} components={MDXComponents} />
                </div>
            </section>
        );
    }

    return (
        <section id={`section-${index}`}>
            <div className="container">
                <div className="content">
                    <MDXRemote source={content} components={MDXComponents} />
                </div>
            </div>
        </section>
    );
}
