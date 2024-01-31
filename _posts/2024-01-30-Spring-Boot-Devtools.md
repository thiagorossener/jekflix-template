---
title: "인텔리제이에 스프링부트 Devtools 설치"
excerpt: "파일에 변경사항이 있을 시 자동 업데이트를 하도록 인텔리제이 설정하기"

categories:
    - devlog
tags:
    - devlog
    - intelliJ
    - Springboot
    - devtool

toc: true
toc_sticky: true

date: 24-01-30
last_modified_at: 24-01-30
---

# 인텔리제이에 스트링부트 Devtools 설치하기
- 매번 변경 사항이 있을 때마다 서버를 다시 시작하는 것은 너무도 귀찮다.
- 따라서 이번 포스팅은 Spring boot devtools 를 인텔리제이에 설치해 변경 사항이 발생해도 자동 업데이트를 해주는 방법이다.
- 인텔리제이 커뮤니티 IEDA 에디션은 Spring boot devtools을 지원하지 않는다. 따라서 수동으로 설치해줄 필요가 있다.
  
- 아래와 같이 전 포스트에 작성했던 `HelloController` 클래스에서 'Hello'를 바꿔보아도 서버를 재시작하기 전까지는 로컬호스트 서버에 해당 변경사항이 반영이 되지 않는 것을 알 수 있다.
  - ![Hello](https://github.com/leesemin89/blog/blob/master/img/devtool/1.png?raw=true)
- 아래와 같이 build.gradle.kts 파일을 찾아 열고 dependencies 종속성 괄호 안에 `developmentOnly("org.springframework.boot:spring-boot-devtools")`를 추가한 뒤 저장한다.
  - developmentOnly 는 해당 라이브러리는 개발 환경에만 적용한다는 의미로서 배포용 jar, war 파일에는 해당 라이브러리가 포함되지 않는다.
  - ![build](https://github.com/leesemin89/blog/blob/master/img/devtool/2.png?raw=true)
- 우측 그레이들 패널을 열고 Reload all gradle projects를 선택한다.
  - ![reload](https://github.com/leesemin89/blog/blob/master/img/devtool/3.png?raw=true)
- 필요한 모든 파일을 저장 후 인텔리제이를 재시작하면 Spring boot devtools 가 적용되었으니 다시 `http://localhost:8080/hello`를 열고 `HelloController`의 'Hello' 문구를 수정 후 저장, 로컬호스트 페이지를 새로고침 해서 서버 재시작 없이 변경 사항이 적용 되는지 확인하자.
  - ![devtools](https://github.com/leesemin89/blog/blob/master/img/devtool/4.png?raw=true)