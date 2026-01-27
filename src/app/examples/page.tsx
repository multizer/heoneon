import Comments from '@/components/Comments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'Reference cases used to test the conceptual framework: double-slit experiment, gravitational bending, and more.',
  openGraph: {
    title: 'Examples',
    description: 'Reference cases used to test the conceptual framework: double-slit experiment, gravitational bending, and more.',
  },
};

export default function ExamplesPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Examples</h1>
            <h2>Overview</h2>
            <p>
              This page clarifies how examples are used within the project. The examples presented here are not intended to prove a theory or strengthen claims. Instead, each example serves as a reference point for examining how a given phenomenon might be reinterpreted within the project's question structure.
            </p>
            <p>
              Examples are used to test where the project's conceptual framing remains coherent, and where it may need revision.
            </p>
          </div>
        </div>
      </section>

      <section id="double-slit">
        <div className="container">
          <div className="content">
            <h2>Double-Slit Experiment</h2>
            <p>
              The double-slit experiment is not treated here as a way to decide whether waves or particles are "more real."
            </p>
            <p>
              Instead, it is used to examine whether the difference between outcomes before and after observation can be understood not as a physical collapse, but as a selection among allowed states.
            </p>
            <p>
              This example serves as a starting point for re-examining concepts such as observation, determination, and outcome through the lenses of structure and selection.
            </p>
          </div>
        </div>
      </section>

      <section id="gravitational-bending">
        <div className="container">
          <div className="content">
            <h2>Gravitational Bending of Light</h2>
            <p>
              The bending of light by gravity is not interpreted only as the direct action of a force.
            </p>
            <p>
              Within this project, it is used to examine whether the structure of space itself could constrain or determine the path of light, and whether an observed trajectory could appear as a consequence of structural conditions.
            </p>
            <p>
              This example is used to test the assumption that space is not merely a background, but something with structure.
            </p>
          </div>
        </div>
      </section>

      <section id="non-propulsive-motion">
        <div className="container">
          <div className="content">
            <h2>Non-Propulsive Motion Reports</h2>
            <p>
              Some anecdotal reports of non-propulsive motion raise questions about how motion is typically framed—particularly in narratives where propulsion or reaction signatures are described as absent
            </p>
            <p>
              In this project, such reports are not treated as evidence and are not evaluated for factual reliability; they are included only to prompt a conceptual check: must motion be explained exclusively in terms of force and continuous displacement, or can alternative descriptions be coherently formulated?
            </p>
          </div>
        </div>
      </section>

      <section id="ball-lightning">
        <div className="container">
          <div className="content">
            <h2>Ball Lightning</h2>
            <p>
              Ball lightning is a rare and not fully explained phenomenon. Rather than assigning it to a specific theoretical account, this project treats it as a reference case for exploratory consideration of whether structure could become locally observable under certain conditions.
            </p>
            <p>
              This example is used to raise the question of whether spatial structure might, at times, appear in a transient and measurable form.
            </p>
          </div>
        </div>
      </section>

      <section id="notes">
        <div className="container">
          <div className="content">
            <h2>Notes on Examples</h2>
            <p>
              All examples on this page are tools for asking questions, not objects to be explained.
            </p>
            <p>
              Each example is used to probe how far the project's conceptual structure can be applied, and where it may break down. No single phenomenon is treated as sufficient to justify a conclusion on its own.
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
