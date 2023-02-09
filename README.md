# to-do-app
코드스테이츠 개인 과제

## 기획

### Figma
📌 **디자인**
[Figma 링크](https://www.figma.com/file/dcdBMQfzUsAifvZ4hCfTro/S3U8-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=1%3A2)
<br><br>

📌 **Userflow**
[Figma 링크](https://www.figma.com/file/dcdBMQfzUsAifvZ4hCfTro/S3U8-%EB%82%98%EB%A7%8C%EC%9D%98-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0?node-id=115%3A135)

## 기능

### React
<br>

📌 **구조**<br>

**semantic**<br>
semantic를 사용하여 웹 접근성 높임<br>

**재사용 컴포넌트 분리**<br>
카테고리 아이콘, 체크 아이콘 등을 따로 분리하여 재사용성을 높임<br>

**grid 사용*<br>
리스트 레이아웃 정렬에 사용<br>
<br>

📌 **Custom Component**<br>

**Styled Components**<br>
styled-reset적용으로 호환성 높임<br>
GlobalStyle로 전역 스타일 적용
ThemeProvider로 전역 스타일 변수, 함수 등록
<br>

**Storybook**<br>
chromatic 으로 배포<br>
github action 연동으로 pull request 하면 chromatic 자동 배포<br>
[storybook 배포 링크](https://63df6700669c73c96606c388-vxhkpbssur.chromatic.com/?path=/story/to-do-app-button--big-button)
<br>

📌 **Redux**<br>

**reducer 사용**<br>
Provider로 store 전역 적용<br>
fetch 사용을 위해 ReduxThunk 적용<br>
<br>

📌 **Custom Hook**<br>

**재사용 컴포넌트, 기능을 묶어서 분리**<br>
-input, checkbox, modal 등을 묶어서 분리해 재사용성 높임

### Api

📌 **json-server 사용**<br>

간단하게 서버 구동만 가능한 정도로 작성

📌 **proxy 적용**<br>

로컬에서만 작동 확인

### AWS

📌 **EC2**<br>

**Pm2**<br>
pm2 적용하여 서버 구동, 단순한 데이터 교환만 가능한 정도<br>

<br>

📌 **Github page**<br>

**Api gateway**<br>
Api gateway를 경유, cors에러가 나지 않도록 통합 응답 헤더 추가함<br>

<br>

📌 **S3**<br>

**Github action 연동**<br>
pull request를 하면 S3에 자동으로 업로드 되도록 작성<br>
cloudfront 연동으로 fetch는 성공하지 못함

### 배포 

[github page](https://annkim7.github.io/to-do-app/)

## 구현 화면

### Create
![S4U11-Create](https://user-images.githubusercontent.com/67787776/217712742-fc14b7f1-3729-45c8-9788-271253832a68.gif)

### Read
![S4U11-Read](https://user-images.githubusercontent.com/67787776/217714697-439d937c-dda9-4a63-911f-6822e279df14.gif)

### Update
![S4U11-Edit](https://user-images.githubusercontent.com/67787776/217713820-5aaf1bfe-25ef-494e-af28-802914b39e35.gif)

### Delete
![S4U11-Delete](https://user-images.githubusercontent.com/67787776/217714452-0e73d91f-1167-4a90-a6f9-af44793d7db2.gif)

