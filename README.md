# File Share

1. 💁 프로젝트 소개
2. 👋🏻 팀원 소개
3. 🔗 배포 링크
4. 📄 협업 문서
5. 👩‍💻 기능 목록 명세
6. 💿 설치 및 실행 방법
7. 🛠️ 기술 스택

## 1. 💁 프로젝트 소개

- 주제 : 링크로 공유한 파일(들)을 다운로드 받을 수 있는 기능 제공
- 기간 : 22.02.24 ~ 22.02.26

## 2. 👋🏻 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/yeongjong310'>김영종</a></td>
    <td><a href="https://github.com/b41-41">정다빈</a></td>
    <td><a href="https://github.com/leechoiswim1">최수임</a></td>
    <td><a href="https://github.com/vi2920va">이송현</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/39623897?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/90027202?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/85476908?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/76679130?v=4" width="150px"/></td>

  </tr>

  <tr align="center">
  <td>팀장</td>
  <td>팀원</td>
  <td>팀원</td>
  <td>팀원</td>
  </tr>

</table>

## 3. 🔗 배포 링크

[프로젝트 링크 바로가기](https://shareyourfiles.netlify.app)

## 4. 📄 협업 문서

[프로젝트 노션 바로가기](https://smiling-player-37b.notion.site/4-2-259076822f894c6eb544836412a773a7)

<details>
<summary>토글 예시</summary>
<div markdown="1">
예시
</div>
</details>

## 5. 👩‍💻 기능 목록 명세

#### 링크 목록 화면

- 링크 아이템 클릭 시 상세페이지 이동
- 제목 아래 URL은 다음과 같이 표시
  - 유효기간 이내 : 도메인 주소를 포함한 상세페이지로 이동하는 전체 경로 표시
  - 유효기간 만료 : '만료됨' 표시 
- URL 클릭 시 다음과 같이 동작
  - 유효기간 이내 : URL을 클립보드에 복사하고 `${링크 제목} 주소가 복사 되었습니다.` 내용이 Alert로 표시
  - 유효기간 만료 : 클릭 불가
- 파일 개수의 숫자에 3자리 단위마다 콤마 표시
- 파일 사이즈는 소수점 둘째 자리까지, 단위는 B,KB,MB,GB,TB 로 표기
- 유효기간은 다음과 같이 표기
  - 48시간 미만 : xx시간 xx분
  - 48시간 이상 : x일
  - 만료 : 만료됨
- 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 <Avatar/> 컴포넌트 이용

#### 링크 상세 화면

- 링크 정보 표시
- 받기 버튼을 누르면 컴퓨터에 다운로드 할 수 있고 `다운로드 되었습니다.`란 메세지가 토스트로 오른쪽 상단에 순차적으로 뜸
- 받기 버튼 옆에 삭제 버튼이 있어서 삭제 할 수 있음
- 링크의 유효기간이 만료되지 않았을 경우에만 파일 목록 표시
- 기한이 만료된 경우 왼쪽상단에 만료됨 표시가 뜨고 다운로드 받을 수 없음, 아래 파일목록이 표시되지 않음

<br/>


## 6. 💿 설치 및 실행 방법

Project Clone

```bash
$ git clone https://github.com/wantedPreOnboarding/19_08th_fileshare.git

```

Project Setup

```bash
$ yarn install
```

Project Start For Development

```bash
$ yarn start
```

## 7. 🛠️ 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>

  <img src="https://img.shields.io/badge/typescript-yellow?style=for-the-badge&logo=typescript&logoColor=white/">

  <img src="https://img.shields.io/badge/redux-BF6C97?style=for-the-badge&logo=redux&logoColor=black"/>

  <img src="https://img.shields.io/badge/reduxsaga-purple?style=for-the-badge&logo=reduxsaga&logoColor=white/">

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

  <img src="https://img.shields.io/badge/git-flow-brightgreen?style=for-the-badge&logo"/>
</div>
