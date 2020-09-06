# instagram-in-tistory

##### 개요
- 티스토리 개인 블로그에 인스타그램 최신 피드 정보를 노출시키고 싶었음.

##### 사용 방법
- https://studio-jt.co.kr/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-api-instagram-graph-api-instagram-api-v2-%EC%97%B0%EB%8F%99%EC%9D%BC%EC%A7%80/
1. 위 링크에 들어가서 토큰 값을 발급 받기(너무 쉽게 정리 잘 되어있음... 귀찮아서 그런거 절대 아님)
2. instagram.js파일에 토큰 값을 입력
3. index.html 파일 실행

##### 업데이트
- 2020.08.29
  ```
  기존에 25개의 피드만 받아와 졌지만 전체페이지 피드를 모두 받아와서 뿌려주도록 변경
  ```

- 2020.09.06
  - Problem
    - 사용자가 인스타그램에 로그인하고 code값을 받고나서 redirect하기 위한 주소값이 없다
    - code값, 토큰 값을 받는 처리 과정을 축약시키면 좋을 것 같다
    
  - Todolist
    - 클라이언트 웹 페이지를 생성해서 서버에서 code값을 redirect해줄 수 있는 페이지를 만들어야한다.
      1. 사용자 인스타 로그인
      2. code값 서버로 전송
      3. 서버에서 redirect로 다시 클라이언트 사용자 약관 동의 페이지로 전송
      4. 사용자가 약관에 동의한 경우 토큰값을 받아오고 사용자 정보를 반환받아 db에 저장
    
  - Complete
    - code만 받아오면 사용자의 데이터를 받아오도록 처리
    - getAccessToken() code를 활용하여 토큰 값 반환
    - fetchData() 토큰값을 활용하여 데이터 반환
