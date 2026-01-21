import Comments from '@/components/Comments';

export default function ConceptsPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Concepts</h1>
            <h2>Overview</h2>
            <p>
              This page defines the core concepts used repeatedly across the project. The purpose of these entries is not to finalize definitions or formalize a theory, but to provide shared reference points so that the same language and context can be maintained throughout the research.
            </p>
            <p>
              Each concept below is a working definition. As the project develops, these terms may be revised, expanded, or reinterpreted.
            </p>
          </div>
        </div>
      </section>

      <section id="space">
        <div className="container">
          <div className="content">
            <h2>Space</h2>
            <p>
              In this project, space is not assumed to be an empty background or a purely geometric coordinate system. Rather than treating space as a stage on which physical phenomena occur, space is treated as something that has structure in its own right.
            </p>
            <p>
              That structure is understood as a condition that determines how spatial properties such as distance, position, and connectivity become well-defined.
            </p>
          </div>
        </div>
      </section>

      <section id="information">
        <div className="container">
          <div className="content">
            <h2>Information</h2>
            <p>
              Here, "information" does not mean measured results, data, or semantic content. It is a working term for whatever fundamental structural elements are taken to constitute space.
            </p>
            <p>
              This information is not assumed to be directly accessible to human perception or visual intuition. Instead, physical phenomena are assumed to become observable only through the arrangement and relations of these elements.
            </p>
          </div>
        </div>
      </section>

      <section id="structure">
        <div className="container">
          <div className="content">
            <h2>Structure</h2>
            <p>
              "Structure" refers to the way informational elements are not isolated, but positioned and related to one another.
            </p>
            <p>
              In this project, the properties of space are treated as depending less on the total amount of information than on the relational organization and arrangement of information.
            </p>
          </div>
        </div>
      </section>

      <section id="selection">
        <div className="container">
          <div className="content">
            <h2>Selection</h2>
            <p>
              "Selection" refers to the process by which one state becomes fixed under specific conditions, out of multiple possible states.
            </p>
            <p>
              This does not imply physical collapse or destruction. It is treated as the stabilization of one already-allowed structural possibility as the realized outcome.
            </p>
          </div>
        </div>
      </section>

      <section id="motion">
        <div className="container">
          <div className="content">
            <h2>Motion</h2>
            <p>
              Motion is not treated only as continuous change of position. It is re-examined as a question of how position becomes reconfigured or fixed within spatial structure.
            </p>
            <p>
              From this perspective, motion may be understood not solely as the result of force or propulsion, but as a consequence of structure and selection.
            </p>
          </div>
        </div>
      </section>

      <section id="limits">
        <div className="container">
          <div className="content">
            <h2>Limits</h2>
            <p>
              Physical limits are not assumed to be absolute constants by default. They are treated as potential consequences of what a given structure permits.
            </p>
            <p>
              Concepts such as speed, locality, and constraint are examined as possible boundaries produced by spatial structure and by conditions governing informational organization or update.
            </p>
          </div>
        </div>
      </section>

      <section id="notes">
        <div className="container">
          <div className="content">
            <h2>Notes on Usage</h2>
            <p>
              The definitions on this page are not intended as tools of explanation or persuasion. They exist to reduce ambiguity and maintain internal consistency during ongoing research.
            </p>
            <p>
              External phenomena and examples, if used, are intended to appear only after these conceptual reference points have been established.
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
