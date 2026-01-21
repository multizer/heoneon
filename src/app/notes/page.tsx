import Comments from '@/components/Comments';

export default function NotesPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Notes</h1>
            <h2>Overview</h2>
            <p>
              This page is a place to record thoughts, questions, and deferred ideas that emerge as the research progresses. Nothing here is intended as a completed claim or conclusion. The purpose is to preserve the current state of the inquiry and the trajectory of the thinking that supports it.
            </p>
            <p>
              These notes are public, but they are intentionally kept in an unpolished form.
            </p>
          </div>
        </div>
      </section>

      <section id="working-assumptions">
        <div className="container">
          <div className="content">
            <h2>Working Assumptions</h2>
            <p>
              This research proceeds with a small set of working assumptions. These are not treated as established facts. They function as provisional reference points that allow questions to remain active and coherent.
            </p>
            <p>
              Space may be better treated not as an empty background, but as a structure filled with information.
            </p>
            <p>
              The properties of space may depend less on the quantity of information than on the structure of information.
            </p>
            <p>
              Observation may be understood not as physical collapse, but as a process in which one allowed possibility becomes selected.
            </p>
          </div>
        </div>
      </section>

      <section id="open-questions">
        <div className="container">
          <div className="content">
            <h2>Open Questions</h2>
            <p>
              The questions below are intentionally maintained without answers. They are not framed for immediate resolution, but as constraints that guide further inquiry.
            </p>
            <p>
              If space is treated as an informational structure, what are the minimal conditions required to define "structure"?
            </p>
            <p>
              Under what conditions does structural selection become fixed as a physical outcome?
            </p>
            <p>
              Can motion and position be understood not as continuous processes, but as forms of structural reconfiguration?
            </p>
          </div>
        </div>
      </section>

      <section id="deferred-ideas">
        <div className="container">
          <div className="content">
            <h2>Deferred Ideas</h2>
            <p>
              Ideas that are judged premature for public development are recorded here in a deferred state. They require additional examination and may later be revised, expanded, or discarded.
            </p>
          </div>
        </div>
      </section>

      <section id="research-notes">
        <div className="container">
          <div className="content">
            <h2>Research Notes</h2>
            <p>
              This section records thoughts or memos without requiring chronological order. Individual notes do not need to connect to one another. The aim is to preserve the non-linear character of the research process.
            </p>
          </div>
        </div>
      </section>

      <section id="notes-status">
        <div className="container">
          <div className="content">
            <h2>Notes on Status</h2>
            <p>
              Everything on this page is an active record of ongoing thinking. The sentences here are not intended to explain or persuade. They exist to show that the inquiry remains in motion and continues to develop.
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
