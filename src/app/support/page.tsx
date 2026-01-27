import Comments from '@/components/Comments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Information about supporting this independent, long-term conceptual research project.',
  openGraph: {
    title: 'Support',
    description: 'Information about supporting this independent, long-term conceptual research project.',
  },
};

export default function SupportPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Support</h1>
            <h2>Overview</h2>
            <p>
              This page explains why ongoing support may be necessary for this research project, and what such support is meant to provide. Support here does not mean purchasing results or directing the course of inquiry.
            </p>
          </div>
        </div>
      </section>

      <section id="why-support">
        <div className="container">
          <div className="content">
            <h2>Why Support Is Needed</h2>
            <p>
              This project is a long-term conceptual research effort and is not designed around short-term outcomes.
            </p>
            <p>
              Because this kind of work does not reliably produce immediate results, maintaining the conditions for time, attention, and continuity becomes essential. Support is not a mechanism for changing the direction of the research. It functions as a basis for sustaining the conditions under which the questions can be pursued.
            </p>
          </div>
        </div>
      </section>

      <section id="what-support-enables">
        <div className="container">
          <div className="content">
            <h2>What Support Enables</h2>
            <p>
              Support can make it possible to maintain:
            </p>
            <p>
              The time and focus required for sustained research
            </p>
            <p>
              Ongoing investigation, collection, and organization of relevant materials
            </p>
            <p>
              Continued maintenance and updating of research records and public documentation
            </p>
            <p>
              These elements are not secondary. They are minimal prerequisites for the research to continue in a stable and transparent form.
            </p>
          </div>
        </div>
      </section>

      <section id="independence">
        <div className="container">
          <div className="content">
            <h2>Independence of the Research</h2>
            <p>
              This project is structured so that the direction of the research is not determined by external interests.
            </p>
            <p>
              Support does not entail ownership of results or claims over conclusions. It is not intended to compromise the independence of the work.
            </p>
          </div>
        </div>
      </section>

      <section id="transparency">
        <div className="container">
          <div className="content">
            <h2>Transparency</h2>
            <p>
              The project aims to share progress and direction as transparently as possible.
            </p>
            <p>
              Support does not guarantee outcomes. However, the manner in which the research continues—its evolution, revisions, and maintained questions—can be observed through the project's public documentation.
            </p>
          </div>
        </div>
      </section>

      <section id="closing">
        <div className="container">
          <div className="content">
            <h2>Closing Note</h2>
            <p>
              The purpose of this page is explanation, not solicitation.
            </p>
            <p>
              If this page helps clarify the conditions under which the research is being carried out, it has served its role.
            </p>
          </div>
        </div>
      </section>

      <section id="comments">
        <div className="container">
          <div className="content">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
