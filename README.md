# 원티드 프리온보딩 프론트엔드 - 선발 과제
## 지원자의 성명
백하람
## 프로젝트의 실행 방법
- version node v18.17.0 (npm v9.6.7)

`git clone https://github.com/ramrami-B/wanted-pre-onboarding-frontend.git`

`npm install`

`npm run build`

`serve -s build`

## 배포 링크
https://wanted-pre-onboarding-frontend-iktd6zlla-ramrami-b.vercel.app/signin

## 데모 영상
https://shorturl.at/ghrPV

---
## ✔️ 사용가능한 라이브러리 목록
- React Router
- HTTP Client 라이브러리(Axios 등)
- 스타일링 관련 라이브러리(Sass, Styled Components, Emotion, tailwind 등)
- 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등)
- 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv, typescript, testing library 등)

## 개발 해야 할 것들
### 1. 로그인 / 회원가입
- [x] 로그인, 회원가입 페이지에 이메일 input, 비밀번호 input, 제출 button 만들기
    - `/signup` 경로에 회원가입 기능을 개발
    - `/signin` 경로에 로그인 기능을 개발
- [x] 이메일과 비밀번호의 유효성 검사기능 개발
  - 이메일 조건: @ 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여
- [x] 회원가입 페이지에서 버튼 클릭 시, 회원가입 진행, 회원가입이 완료되면 `/signin` 경로로 이동
- [x] 로그인 페이지에서 버튼 클릭 시, 로그인을 진행, 로그인이 완료되면 `/todo` 경로로 이동
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답 -> 응답받은 JWT는 로컬 스토리지에 저장
- [x] 로그인 여부에 따른 리다이렉트 처리 구현
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속시, `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`에 접속한다면 `/signin` 경로로 리다이렉트 

### 2. TODO LIST
- [x] `/todo` 경로 접속시, 투두 리스트 목록(TODO의 내용과 완료 여부) 나오기
- [x] 새로운 TODO를 입력할 수 있는 input과 추가 button 만들기
- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 하기
- [x] TODO 우측에 수정버튼, 삭제 버튼 만들기
- [x] 투두 리스트의 삭제 기능 구현
- [x] 투두 리스트의 수정 기능 구현
---
## 주어진 과제를 모두 구현한 후 추가적으로 수정 혹은 추가한 내용
- Todo 리스트 업데이트 지연 수정
- password *로 숨기기
- Todo 페이지 버튼 컴포넌트화
