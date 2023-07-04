# 🍿 영화 검색 서비스
### 개요
키워드로 영화를 검색할 수 있는 서비스입니다.  

검색 탭에서 검색 창에 키워드 입력 후, 엔터 키 또는 검색 버튼 클릭 시 제목이 일치하는 영화 목록을 나타내는 기능을 합니다. 또한 즐겨찾기로 등록할 수 있습니다.

즐겨찾기 탭에서 등록해 둔 즐겨찾기 목록을 확인하고, 순서를 바꿀 수 있습니다.

--- 

### 사용 기술
* 코어: React
* 상태관리: React-Query, Recoil
* 스타일링: Emotion

---

### 설치 및 실행

프로젝트 root에서 의존하는 패키지를 설치 후 아래 명령을 통해 개발 서버를 구동할 수 있습니다.

```bash
yarn install
yarn dev
```
> http://127.0.0.1:5173/ 접속

---

### 해결전략
1. 요구사항 파악 및 초기 설정
* CRA보다 빠른 개발 서버를 사용하기 위해 Vite로 React + Typescript 프로젝트 세팅

2. 화면 별 UI 개발
* 하단 탭바가 존재하고, 검색창 등 Mobile First 레이아웃이 적합한 서비스라 생각되어 Layout 및 탭 별 페이지 경로 분리
API response 타입 정의 후 대응되는 탭 별 페이지 (검색, 즐겨찾기) UI 개발  
* 페이지 간 공통 컴포넌트 분리

3. 즐겨찾기 기능 및 상태관리
* 로컬스토리지 데이터를 직접 관리하기보다, react 상태 사용하듯 하기 위해 recoil로 스토리지 관리
* 드래그 이벤트로 즐겨찾기 배열 순서 변경 기능 개발

4. API 연동
* 자동으로 캐싱처리 해주고, 데이터, 로딩, 재로드 등 서버 데이터에 대한 상태관리를 편하게 하기 위해 react query 사용하여 API 요청
* 무한 스크롤 구현을 위해 최하단 요소 도달 시 감지하여 요청하도록 처리, 이를 위해 Web API intersection observer를 간단히 사용할 수 있는 라이브러리 사용 
