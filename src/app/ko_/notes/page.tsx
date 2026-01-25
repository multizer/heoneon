import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
  description: '작업 가정, 열린 질문, 그리고 진행 중인 탐구의 연구 노트.',
  openGraph: {
    title: 'Notes',
    description: '작업 가정, 열린 질문, 그리고 진행 중인 탐구의 연구 노트.',
  },
};

export default function NotesPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Notes</h1>
            <p>
              이 페이지는 연구가 진행되는 과정에서 생성되는 생각, 질문, 보류된 아이디어들을 기록하기 위한 공간이다.
              여기에 정리된 내용들은 완성된 주장이나 결론이 아니며,
              연구의 현재 상태와 사고의 흐름을 보존하는 것을 목적으로 한다.
            </p>
            <p>
              이 노트들은 공개되어 있지만,
              정리되지 않은 상태 그대로 유지되는 것을 의도한다.
            </p>
          </div>
        </div>
      </section>

      <section id="working-assumptions">
        <div className="container">
          <div className="content">
            <h2>Working Assumptions</h2>
            <p>
              이 연구는 몇 가지 작업 가정을 전제로 진행되고 있다.
              이 가정들은 사실로 확정된 명제가 아니라,
              질문을 지속하기 위해 임시로 설정된 기준점이다.
            </p>
            <p>
              공간은 비어 있는 배경이라기보다, 정보로 채워진 구조일 수 있다.
              공간의 성질은 그 안에 포함된 정보의 양보다, 정보의 구조에 의해 결정될 수 있다.
              관측은 물리적 붕괴가 아니라, 허용된 가능성 중 하나가 선택되는 과정일 수 있다.
            </p>
          </div>
        </div>
      </section>

      <section id="open-questions">
        <div className="container">
          <div className="content">
            <h2>Open Questions</h2>
            <p>
              다음 질문들은 현재 답을 갖지 않은 상태로 유지되고 있다.
              이 페이지에 기록되는 질문들은 즉각적인 해결을 목표로 하지 않는다.
            </p>
            <p>
              공간을 정보 구조로 다룰 때, 구조를 정의하는 최소 조건은 무엇인가.
              구조적 선택은 어떤 조건에서 물리적 결과로 고정되는가.
              이동과 위치는 연속적 과정이 아닌, 구조적 재배열로 이해될 수 있는가.
            </p>
          </div>
        </div>
      </section>

      <section id="deferred-ideas">
        <div className="container">
          <div className="content">
            <h2>Deferred Ideas</h2>
            <p>
              아직 공개적으로 다루기에는 이르다고 판단되는 아이디어들은
              이 섹션에 보류된 상태로 기록된다.
            </p>
            <p>
              이 아이디어들은 추가 검토가 필요하며,
              향후 연구의 진전에 따라 다시 검토되거나 폐기될 수 있다.
            </p>
          </div>
        </div>
      </section>

      <section id="research-notes">
        <div className="container">
          <div className="content">
            <h2>Research Notes</h2>
            <p>
              이 섹션은 특정 시점에서의 생각이나 메모를 시간 순서와 무관하게 기록한다.
              개별 노트들은 서로 연결되지 않아도 되며,
              연구의 비선형적인 진행을 허용한다.
            </p>
          </div>
        </div>
      </section>

      <section id="notes-status">
        <div className="container">
          <div className="content">
            <h2>Notes on Status</h2>
            <p>
              이 페이지에 포함된 모든 내용은
              진행 중인 사고의 기록이다.
            </p>
            <p>
              여기서 제시되는 문장들은
              설명이나 설득을 목적으로 하지 않으며,
              연구가 멈추지 않고 계속되고 있음을 보여주기 위한 것이다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
