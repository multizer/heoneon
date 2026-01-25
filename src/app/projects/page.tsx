import Comments from '@/components/Comments';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Current research tracks: informational structure of space, motion as reconfiguration, observation and selection, and physical limits.',
  openGraph: {
    title: 'Projects',
    description: 'Current research tracks: informational structure of space, motion as reconfiguration, observation and selection, and physical limits.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Projects</h1>
            <h2>Overview</h2>
            <p>
              This page outlines the primary research tracks currently being pursued within the project. Each project represents not a completed theory or set of results, but an independent cluster of questions and a provisional research direction.
            </p>
            <p>
              All projects remain open-ended. As the research progresses, individual tracks may be expanded, merged, refined, or discontinued.
            </p>
          </div>
        </div>
      </section>

      <section id="project-01">
        <div className="container">
          <div className="content">
            <h2>Project 01 — Informational Structure of Space</h2>
            <p>
              <strong>Status:</strong> Conceptual research · Question formulation stage
            </p>
            <p>
              This project focuses on the view that space should not be treated as an empty background, but as a structure filled with information. The central question is whether the structure of that information can determine the properties of space itself.
            </p>
            <p>
              At this stage, the objective is not to formalize a model or theory, but to examine which assumptions are required to treat space as an informational structure, and whether this perspective remains conceptually coherent under scrutiny.
            </p>
          </div>
        </div>
      </section>

      <section id="project-02">
        <div className="container">
          <div className="content">
            <h2>Project 02 — Motion as Structural Reconfiguration</h2>
            <p>
              <strong>Status:</strong> Early-stage conceptual exploration
            </p>
            <p>
              This project examines the nature of motion. Rather than presupposing motion as continuous change of position caused by applied forces, it asks whether motion could instead be understood as a process of reconfiguration or selection within the structure of space itself.
            </p>
            <p>
              The focus here is on whether changes in position must always be explained through energy transfer, or whether alternative conceptual accounts become possible if space is treated as an informational structure.
            </p>
          </div>
        </div>
      </section>

      <section id="project-03">
        <div className="container">
          <div className="content">
            <h2>Project 03 — Observation, Selection, and Physical Outcomes</h2>
            <p>
              <strong>Status:</strong> Conceptual analysis stage
            </p>
            <p>
              This project explores the relationship between observation and physical outcomes. Instead of treating observation as a purely external act, it considers whether observation can be understood as a process in which a particular state is selected within a structured space.
            </p>
            <p>
              The analysis focuses on the implicit assumptions embedded in concepts such as measurement, determination, and outcome, and on how those assumptions shape physical interpretation.
            </p>
          </div>
        </div>
      </section>

      <section id="project-04">
        <div className="container">
          <div className="content">
            <h2>Project 04 — Limits, Structure, and Physical Constraints</h2>
            <p>
              <strong>Status:</strong> Exploratory research stage
            </p>
            <p>
              This project addresses physical limits such as speed, locality, and constraint. It examines whether such limits should be regarded as fundamental constants, or whether they may instead arise as consequences of structural conditions imposed by space itself.
            </p>
            <p>
              By treating physical constraints as products of structure rather than as primitives, this project explores how established notions of limitation might be reinterpreted.
            </p>
            <h3>Additional Research Questions</h3>
            <p>
              This project area includes further questions such as:
            </p>
            <p>
              Could observed physical upper bounds (for example, the speed of light) reflect not limits on material motion, but constraints on how quickly spatial relations can be updated or propagated within an underlying structure?
            </p>
            <p>
              If space has an underlying structure, do processes that reconfigure or select spatial arrangements necessarily involve intrinsic limits on update or propagation rates?
            </p>
            <p>
              Do such update or propagation constraints provide a way to reinterpret constants or bounds currently treated as fundamental within existing physical laws—as emergent consequences of structure?
            </p>
          </div>
        </div>
      </section>

      <section id="notes">
        <div className="container">
          <div className="content">
            <h2>Notes on Project Status</h2>
            <p>
              All projects listed here are ongoing. They are not intended to present finalized positions, but to record the research directions that are currently being maintained. As the work develops, some projects may be expanded, consolidated, or set aside.
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
