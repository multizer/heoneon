import Comments from '@/components/Comments';

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container">
          <h1>A Long-Term Conceptual Research Project on the Structure of Space</h1>
          <p>
            This project does not treat space as an empty background or passive container.
            Instead, it approaches space as something filled with structure—specifically, informational structure—whose organization determines the properties we experience as spatial.
          </p>
          <small>Status: Independent research · Conceptual research stage · Ongoing</small>
        </div>
      </section>

      <section id="what">
        <div className="container">
          <div className="content">
            <h2>What This Project Is</h2>
            <p>
              This project begins by questioning an assumption that is usually left unexamined: that space is given, empty, and fundamentally neutral.
            </p>
            <p>
              Rather than accepting space as a pre-existing stage on which physical phenomena occur, this research asks whether space itself may be structured—composed of information whose organization gives rise to distance, position, and motion.
            </p>
            <p>
              The goal of this project is not to propose a finished theory, introduce new physical laws, or replace existing frameworks. Instead, it focuses on examining the assumptions that underlie current explanations and identifying where those assumptions may impose conceptual limits.
            </p>
            <p>
              At its core, this research is an attempt to keep foundational questions open long enough to understand the conditions under which they arise.
            </p>
          </div>
        </div>
      </section>

      <section id="core">
        <div className="container">
          <div className="content">
            <h2>Core Questions</h2>
            <p>This project is organized around several foundational questions:</p>
            <p>
              Is space truly an empty background, or can it be understood as an entity with underlying structure (i.e., underlying degrees of freedom rather than semantic 'information')?
            </p>
            <p>
              If space is structured by information, how does that structure determine spatial properties such as distance, location, and connectivity?
            </p>
            <p>
              Could the phenomena we describe as position and motion be consequences of spatial structure itself, rather than the result of forces acting within space?
            </p>
            <p>
              Can the relationship between observation and physical outcomes be framed not only in terms of energy exchange, but also in terms of a selection process over allowed configurations within a structured substrate?
            </p>
            <p>What, then, is motion?</p>
            <p>
              Must changes in position always be explained through continuous traversal and applied forces, or could they instead reflect processes of structural reconfiguration or selection within space?
            </p>
            <p>
              These questions are intentionally kept open. The project does not aim to close them prematurely, but to preserve them as guiding constraints for further inquiry.
            </p>
          </div>
        </div>
      </section>

      <section id="not">
        <div className="container">
          <div className="content">
            <h2>What This Is Not</h2>
            <p>
              This project does not present a completed theory.
              It does not assert new physical laws, nor does it claim to overturn existing scientific frameworks.
            </p>
            <p>
              It does not construct hypotheses retroactively to explain specific phenomena, and it avoids drawing definitive conclusions without experimental or formal grounding.
            </p>
            <p>
              The project does not reject contemporary physics, nor does it attempt to bypass scientific methodology. Claims are carefully separated from questions, and speculation is explicitly bounded.
            </p>
            <p>
              Rather than accelerating toward answers, the research prioritizes clarity about what is being assumed—and where those assumptions may fail.
            </p>
          </div>
        </div>
      </section>

      <section id="snapshot">
        <div className="container">
          <div className="content">
            <h2>Current Snapshot</h2>
            <p>The project is currently at the conceptual research stage.</p>
            <p>
              At this phase, the work consists of identifying and organizing questions about space, structure, observation, and motion, and examining what conceptual commitments those questions require.
            </p>
            <p>
              No formal models, mathematical formulations, or experimental proposals have yet been finalized. The emphasis remains on locating the boundaries of existing assumptions and understanding how those boundaries shape what can and cannot be explained.
            </p>
            <p>
              The present work is less about producing conclusions than about clarifying which questions must remain active for meaningful progress to occur.
            </p>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="content">
            <h2>Why This Matters</h2>
            <p>
              How space is understood is not a peripheral issue in physics; it directly shapes how the world is conceptualized.
            </p>
            <p>
              The assumption that space is an empty background has guided many successful theories, but it is rarely scrutinized as an assumption. This project seeks to return that assumption to the level of an open question.
            </p>
            <p>
              If space is instead understood as an informational structure, then concepts such as distance, position, motion, and observation may require reinterpretation—not as matters of force or energy first, but as matters of structure and configuration.
            </p>
            <p>
              The significance of this project lies not in proposing new answers, but in testing how far existing answers depend on unexamined premises.
            </p>
          </div>
        </div>
      </section>

      <section id="status">
        <div className="container">
          <div className="content">
            <h2>Status</h2>
            <p>
              This research is being conducted independently and remains in an open-ended conceptual phase.
            </p>
            <p>
              The project is publicly documented, subject to revision, and intended to evolve gradually as questions are refined and constraints become clearer.
            </p>
          </div>
        </div>
      </section>

      <section id="next">
        <div className="container">
          <div className="content">
            <h2>Next Steps</h2>
            <p>
              The next phase of the project involves further decomposing the assumptions required to treat space as an informational structure, and clarifying the conceptual relationships between structure, observation, and physical outcomes.
            </p>
            <p>
              As needed, existing theoretical frameworks may be examined for points of alignment or tension. The scope and formulation of questions may also be adjusted as the research progresses.
            </p>
            <p>
              Progress will continue deliberately, prioritizing conceptual coherence over premature closure.
            </p>
          </div>
        </div>
      </section>

      <section id="external-discussion">
        <div className="container">
          <div className="content">
            <h2>External Discussion</h2>
            <p>
              This project has been discussed on Reddit: <a href="https://www.reddit.com/r/HypotheticalPhysics/comments/1p36fmm/what_if_spacetime_is_an_emergent_structure_made/" target="_blank" rel="noopener noreferrer">r/HypotheticalPhysics thread</a>
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
