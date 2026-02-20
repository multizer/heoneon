import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import Comments from '@/components/Comments';

export const MDXComponents: MDXComponentsType = {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    p: (props) => {
        // If the p tag contains raw HTML tags as children like <p> from raw markdown HTML, we unwrap them
        if (typeof props.children === 'object' && (props.children as any)?.type === 'p') {
            return <>{props.children}</>;
        }
        return <p {...props} />;
    },
    a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
    // specific components we can use in MDX to match previous custom styles if needed
    small: (props) => <small className="text-muted" style={{ display: 'block', marginTop: '1rem' }} {...props} />,
    Comments: () => <Comments />,
    PoeticExpression: ({ children }: { children: React.ReactNode }) => (
        <div style={{
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            color: '#4a5568',
            whiteSpace: 'pre-wrap'
        }}>
            {children}
        </div>
    ),
};
