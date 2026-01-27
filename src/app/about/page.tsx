import Comments from '@/components/Comments';
import ContactForm from '@/components/ContactForm';

export default function AboutPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>About</h1>
            <h2>Overview</h2>
            <p>
              This page describes who is conducting the research, the research attitude guiding the work, and the position this project occupies. It is not intended to assert expertise or establish authority. Its purpose is to make the context and posture of the inquiry transparent.
            </p>
          </div>
        </div>
      </section>

      <section id="researcher">
        <div className="container">
          <div className="content">
            <h2>The Researcher</h2>
            <p>
              This project is conducted as independent research, without formal institutional affiliation.
            </p>
            <p>
              The researcher does not approach the project from a traditional disciplinary training pathway. Rather than treating this as something to conceal, it is stated as a starting condition of the work. This means the research has developed outside conventional academic structures, while still treating established theories and discussions as a reference landscape to be respected and consulted.
            </p>
          </div>
        </div>
      </section>

      <section id="attitude">
        <div className="container">
          <div className="content">
            <h2>Research Attitude</h2>
            <p>
              This research does not aim to reach conclusions quickly. Instead, it maintains a deliberate posture: preserving questions, examining underlying assumptions, and testing how far concepts remain valid under careful review.
            </p>
            <p>
              In practice, the project prioritizes understanding over explanation, structure over assertion, and continuity over premature closure.
            </p>
          </div>
        </div>
      </section>

      <section id="independent-context">
        <div className="container">
          <div className="content">
            <h2>Independent Research Context</h2>
            <p>
              In practical terms, this affects how the project is scoped and communicated: questions are framed carefully, and claims are explicitly delimited at this stage.
            </p>
            <p>
              This context is stated explicitly as a matter of transparency, rather than as a claim of exception or opposition to established academic work.
            </p>
            <p>
              The research did not originate within a conventional disciplinary training program. Instead, it developed through sustained engagement with foundational questions across physics and related fields, with particular attention to the assumptions that structure existing explanations.
            </p>
            <p>
              This background shapes the scope and approach of the project. Rather than advancing specialized techniques or results, the work focuses on examining conceptual preconditions that are often treated as settled within formal research contexts.
            </p>
            <p>
              The absence of institutional affiliation or formal specialization is not presented as an advantage in itself. It is simply the condition under which this inquiry has taken place, and it informs both the questions being asked and the care taken to delimit what is—and is not—being claimed at this stage.
            </p>
          </div>
        </div>
      </section>

      <section id="tools">
        <div className="container">
          <div className="content">
            <h2>Use of Tools</h2>
            <p>
              A range of tools is used during the research process. This includes literature and public materials, personal records, and tools that help organize thought and refine expression.
            </p>
            <p>
              Tools do not replace thinking, and they are not treated as sources of ideas. Their role is limited to supporting clarity: structuring, editing, and communicating the researcher's own reasoning.
            </p>
          </div>
        </div>
      </section>

      <section id="position">
        <div className="container">
          <div className="content">
            <h2>Position of This Project</h2>
            <p>
              This project does not present a completed theory or finalized results. It is not positioned within a single discipline. Instead, it operates at the boundary between fields, where questions can be formulated that do not fit neatly inside established categories.
            </p>
            <p>
              The work places greater value on recording and maintaining a process of assumption-checking than on soliciting external evaluation.
            </p>
          </div>
        </div>
      </section>

      <section id="closing">
        <div className="container">
          <div className="content">
            <h2>Closing Note</h2>
            <p>
              This page is not an attempt to secure trust through authority. It exists to share the posture under which the research proceeds.
            </p>
            <p>
              The project remains open and may be revised whenever revision is warranted.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="content">
            <h2>Contact</h2>
            <p>
              If you have questions, comments, or would like to discuss the research, feel free to reach out.
            </p>
            <ContactForm />
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
