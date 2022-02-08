# 에이팀 벤처스 어드민 페이지

## 과제 정보

이 프로젝트는 다음과 같은 기능을 지원합니다.

- 요청서 필터링

<br />

## 배포

배포 링크: [https://a-team-ventures-assignment.herokuapp.com](https://a-team-ventures-assignment.herokuapp.com)

<br />

## 팀원

- [@wook95](https://github.com/wook95)
- [@tae100k](https://github.com/tae100k)
- [@hyundonny](https://github.com/hyundonny)
- [@2kyung19](https://github.com/2kyung19)

<br />

## 요구사항
### 필터박스

- `가공방식` 필터 선택 : 선택된 가공방식 중 하나 이상 포함하는 모든 요청서를 노출합니다.
- `재료` 필터 선택 : 선택된 재료 중 하나 이상 포함하는 모든 요청서를 노출합니다.
- `가공방식` & `재료` 필터 선택 : 선택된 가공방식과 재료를 모두 만족하는 조건의 요청서를 노출합니다.
- `필터링 리셋` : 리셋 버튼 클릭 시 가공방식과 재료 필터 선택이 해제됩니다.
- `상담중인 요청서` : 노출된 요청서 중 상담중인 요청서만 노출합니다.
- 필더박스 `hover` 시 보더 스타일이 변경됩니다.    

### 헤더

- `미디어 쿼리` 기능을 사용하여 각각 PC, `모바일 사이즈` 환경(max 460px)에 알맞은 화면을 제공했습니다.
- 모바일 환경에서 메뉴 아이콘 탭 시, 백그라운드가 깔리고 메뉴 화면이 왼쪽에서 들어옵니다. 이후 백그라운드 영역을 탭하면 메뉴 화면이 닫힙니다.

### 견적카드

- 모바일 환경 시, Nx3 행렬에서 Nx1 행렬로 변경됩니다.
- 모바일 환경 시, 견적 카드 크기가 변경됩니다.
- 견적 카드 `hover` 시 보더 스타일이 변경됩니다.


<br />

## 로컬 환경 구동

- 프로젝트 클론

  ```bash
  git clone https://github.com/wanted-pre-onboading-10/sirloin-admin-page
  ```

- 프로젝트 디렉토리 들어가기

  ```bash
  cd sirloin-admin-page
  ```

- 패키지 설치 및 프로젝트 시작

  ```bash
  npm install && npm run start
  ```
 
<br />

## 자료 구조

```
a-team-admin/src
│ 
├── App.tsx
├── assets
│   ├── icons
│   │   ├── DropdownArrow.tsx
│   │   └── Refresh.tsx
│   └── images
│       ├── eclipseIcon.png
│       ├── icon.png
│       ├── producer-icon.png
│       └── whiteMenuIcon.png
├── components
│   ├── card
│   │   ├── btn
│   │   ├── index.tsx
│   │   ├── info
│   │   ├── styles.tsx
│   │   └── title
│   ├── container
│   │   ├── cardContainer
│   │   ├── emptyBoard
│   │   ├── filterContainer
│   │   └── mainContainer
│   ├── filter
│   │   ├── bar
│   │   ├── materials
│   │   ├── methods
│   │   ├── reset
│   │   ├── shared
│   │   └── toggle
│   └── nav-bar
│       ├── index.tsx
│       └── styles.ts
├── index.tsx
├── slices
│   ├── dropdownSlice.ts
│   ├── materialsFiltersSlice.ts
│   ├── methodFiltersSlice.ts
│   ├── requestsSlice.ts
│   ├── statusFiltersSlice.ts
│   └── store.ts
├── styles
│   ├── globalStyles.ts
│   └── theme.ts
├── types
│   └── request.d.ts
└── utils
    ├── constants.ts
    └── mockData.ts

```

<br />

## 회고

### 이욱창

- 전체 레이아웃 컨테이너들을 구현했습니다. 로직과 관련이 없는 컴포넌트들만 만들다 보니, 왜 container-presenter 패턴이 나온지, 왜 hooks를 쓰면 로직과 분리가 잘 되는지 배웠습니다. 또 공통으로 사용되는 컨테이너 컴포넌트들을 잘 만들어 팀원들과 합칠 때 무리가 없었습니다.
- heroku를 이용해 json-server와 프론트엔드 서버 모두 배포를 했습니다. typescript는 컴파일이 필요하다는걸 잘 알게 되었습니다.

### 김태희

- Figma명세서가 요구하는 바를 정확하게 구현하는 동시에 코드 상에서는 효율적이게 표현하기 위해 많은 고민을 많이 할 수 있었습니다. (Styled Component의 재사용, 부모 상속 등을 이용)
- 협업을 하면서 의문점이 생기거나 조금이라도 석연찮은 부분이 있을 때는 용기를 내어 팀원들에게 질문하고, 조언을 구하며 협업의 장점을 극대화하기 위해 노력했습니다.

### 문현돈

- 이전 과제와 마찬가지로 기능 구현을 중심으로 진행했습니다. 비즈니스 로직을 구현하는 데 집중해서 비교적 빠른 시간 내에 맡은 부분을 완료했습니다. 다만, 기능 구현에 집중하다 보니 코드에 반복되는 부분이 있다는 것을 알게 되었습니다. 이런 부분을 줄이기 위해 공통된 기능이나 스타일을 따로 뽑아내 불필요한 코드를 줄이고자 노력했습니다.
- Redux Toolkit을 이전에 많이 활용해보지 않아 처음에는 작업 속도가 나지 않았으나 재사용이 가능하고, 예측 가능한 reducer와 selector 함수를 적극 활용해 구현하고자 하는 기능을 빠른 시간 내에 완성할 수 있었습니다.

### 이경은

- css와 타입스크립트 기반 리액트에 대한 자료 공유를 통해 많은 지식을 얻고, 적용할 수 있었습니다.
- 주어진 명세서에 따라 맡은 역할를 구현하였고, 사용 방법과 예시를 공유하여 팀원분들이 해당 컴포넌트의 사용에 어려움 없도록 하였습니다.


