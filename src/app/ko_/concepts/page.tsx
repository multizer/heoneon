import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concepts',
  description: '이 연구에서 사용하는 핵심 개념들의 작업 정의: 공간, 정보, 구조, 선택, 이동, 한계.',
  openGraph: {
    title: 'Concepts',
    description: '이 연구에서 사용하는 핵심 개념들의 작업 정의: 공간, 정보, 구조, 선택, 이동, 한계.',
  },
};

export default function ConceptsPage() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="content">
            <h1>Concepts</h1>
            <p>
              이 페이지는 이 프로젝트 전반에서 반복적으로 사용되는 핵심 개념들을 정리한다.
              여기서의 개념들은 정의를 확정하거나 이론화하기 위한 것이 아니라,
              연구 과정에서 동일한 언어와 맥락을 유지하기 위한 기준점으로 제시된다.
            </p>
            <p>
              각 개념은 현재 단계에서의 작업 정의이며,
              연구가 진행됨에 따라 수정·확장·재해석될 수 있다.
            </p>
          </div>
        </div>
      </section>

      <section id="space">
        <div className="container">
          <div className="content">
            <h2>Space</h2>
            <p>
              이 프로젝트에서 공간은 비어 있는 배경이나 단순한 좌표계로 가정되지 않는다.
              공간은 물리적 현상들이 놓이는 무대라기보다,
              그 자체로 구조를 가지는 것으로 다뤄진다.
            </p>
            <p>
              이 구조는 거리, 위치, 연결성 같은 공간적 성질들이
              어떻게 성립하는지를 결정하는 조건으로 이해된다.
            </p>
          </div>
        </div>
      </section>

      <section id="information">
        <div className="container">
          <div className="content">
            <h2>Information</h2>
            <p>
              여기서 말하는 정보는 측정 결과나 데이터의 의미가 아니다.
              정보는 공간을 구성하는 근본적인 구조적 요소를 가리키는 작업 개념이다.
            </p>
            <p>
              이 정보는 인간의 감각이나 시각적 직관으로 직접 인식될 수 없으며,
              그 배치와 관계를 통해서만 물리적 현상으로 드러난다고 가정된다.
            </p>
          </div>
        </div>
      </section>

      <section id="structure">
        <div className="container">
          <div className="content">
            <h2>Structure</h2>
            <p>
              구조란 정보들이 고립된 채로 존재하는 것이 아니라,
              서로 관계를 맺으며 배치되어 있는 방식을 의미한다.
            </p>
            <p>
              이 프로젝트에서는 공간의 성질이
              그 안에 포함된 정보의 총량보다는,
              정보들 사이의 관계와 배열 방식에 의해 결정된다고 본다.
            </p>
          </div>
        </div>
      </section>

      <section id="selection">
        <div className="container">
          <div className="content">
            <h2>Selection</h2>
            <p>
              선택은 여러 가능한 상태 중 하나가
              특정 조건 하에서 확정되는 과정을 가리킨다.
            </p>
            <p>
              이는 물리적 붕괴나 파괴를 의미하지 않으며,
              이미 허용된 구조적 가능성 중 하나가
              결과로 고정되는 과정으로 이해된다.
            </p>
          </div>
        </div>
      </section>

      <section id="motion">
        <div className="container">
          <div className="content">
            <h2>Motion</h2>
            <p>
              이동은 이 프로젝트에서 단순한 연속적 위치 변화로만 다뤄지지 않는다.
              이동은 공간 구조 내에서 위치가 어떻게 재구성되거나
              확정되는지의 문제로 재검토된다.
            </p>
            <p>
              이 관점에서 이동은
              힘이나 추진의 결과라기보다,
              구조와 선택의 결과일 수 있는 가능성을 포함한다.
            </p>
          </div>
        </div>
      </section>

      <section id="limits">
        <div className="container">
          <div className="content">
            <h2>Limits</h2>
            <p>
              물리적 한계는 이 프로젝트에서
              절대적인 자연 상수로 가정되기보다는,
              구조가 허용하는 조건의 결과로 다뤄진다.
            </p>
            <p>
              속도, 국소성, 제약과 같은 개념들은
              공간 구조와 정보 처리 조건이 만들어내는
              경계로 재해석될 수 있는지 검토 대상이 된다.
            </p>
          </div>
        </div>
      </section>

      <section id="notes">
        <div className="container">
          <div className="content">
            <h2>Notes on Usage</h2>
            <p>
              이 페이지의 개념 정의들은
              설명이나 설득을 위한 도구가 아니라,
              연구 내부에서 의미의 혼동을 줄이기 위한 기준점이다.
            </p>
            <p>
              외부 현상이나 사례는
              이 개념들이 정리된 이후에만
              보조적으로 다뤄질 예정이다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
