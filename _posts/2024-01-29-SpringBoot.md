---
date: 2024-01-29
layout: post
title: "[스프링부트 시리즈1]인텔리제이와 스프링부트(Spring Boot)를 사용한 개발 환경 준비"
subtitle: 인텔리제이와 스프링부트를 사용한 개발환경 준비
description: 
image: 
  https://github.com/leesemin89/blog/blob/master/img/2024-01-29-springboot/springboot%20title.jpg?raw=true
optimized_image:    
  https://github.com/leesemin89/blog/blob/master/img/2024-01-29-springboot/p_springboot%20title.jpg?raw=true
category: devlog
tags:
    - devlog
    - Springboot
    - intelliJ  
author: sammy
paginate: true
---


# 인텔리제이에 스프링부트 설치하기
## 스프링부트 (Spring boot)는 뭔가요?
- 웹 어플리케이션을 빠르게 만들 수 있도록 도와주는 자바의 웹 프레임워크입니다.
- 스프링(Spring) 프레임워크에 톰캣(Tomcat)이라는 서버가 내장되어 있습니다.
- 톰캣은 클라이언트의 요청을 해석해 그에 맞는 자바 프로그램을 실행하고 결과를 응답합니다.

![webFrameworks](https://ares.decipherzone.com/blog-manager/uploads/banner_webp_6e31c361-f096-4a6a-a883-a561798afcd8.webp)
## 웹 프레임워크는 뭔가요?
- 쿠키 처리, 로그인 처리, 로그아웃 처리, DB 처리, 권한 처리 등등 수 많은 기능들이 필요한 웹 어플리케이션을 빠르게 개발하기 위한 그러한 기능들을 미리 만들어 제공하는 것이 웹 프레임워크입니다.
- 많은 웹 프레임워크 중 하나가 바로 스프링부트입니다.
- 과거에는 일일히 개발자가 기능들을 작성했지만 프레임워크를 사용하면 편리하고 빠르게 개발할 수 있습니다.
- 웹 브라우저에서 'Hello World' 를 출력하려면 이제 아래와 같은 클래스 하나로 가능합니다.
  ```
  @Controller
  public class HelloController{
    @GetMapping("/")
    @ResponseBody
    public String hello(){
        return "Hello World";
    }
  }
  ```
## 굳이 스프링부트를 사용하는 이유는 뭔가요?
- 스프링부트는 튼실한 보안 기능을 갖추고 있습니다.
- 클릭 재킹, Cross-Site-Request Forgery 등 보안 공격을 막아주기 때문에 개발자가 일일히 보안 코드를 짤 필요가 없습니다.
  * SQL injection : 보안상 취약점을 이용해 임의의 SQL 문을 주입 및 실행하여 DB가 비정상적인 동작을 하도록 조작하는 행위.
  * XSS : 크로스 사이트 스크립팅은 공격자가 상대방의 브라우저의 스크립트를 실행하여 피해자의 세션을 가로채거나 웹사이트를 변조해 피싱 공격 등을 진행하는 행위.
  * CSRF : 사용자가 자신의 의지와 무관하게 공격자가 의도한 행동을 해 특정 웹페이지에서 수정이나 삭제 등의 작업을 하도록 만드는 행위. XSS 공격과는 반대로 특정 웹사이트가 사용자의 브라우저를 신용하여 발생함.

## 스프링부트는 WAS 가 필요하지 않습니다
- 스프링만 사용해 개발한다면 실행 시 톰캣과 같은 Web Application Server가 필요합니다.
- 스프링부트는 이미 톰캣을 내장하고 있기 때문에 WAS에 대해 신경쓰지 않아도 됩니다.
- WAS의 종류:
  * 아파치 톰캣
  * 오라클 웹로직
  * IBM 웹스피어
  * 제이보스
  * 제우스 등


*****
# IntelliJ 및 springboot를 사용한 개발환경 준비하기
- 인텔리제이 커뮤니티 에디션 및 스프링부트를 사용한 개발환경 준비 작업입니다.
- 준비물: 
    * Java SE Development Kit 20.0.2  
        [JDK 다운로드](https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html)
    * IntelliJ IDEA Community Edition  
        [IntelliJ 다운로드](https://www.jetbrains.com/idea/download/?section=windows)
    * Spring Initializr  
        [Spring 다운로드](https://start.spring.io/)  
        * project > Gradle-Kotlin
        * Language > Java
        * Spring Boot > 3.2.2
        * Project Metadata  
          + Group  com.mysite  
          + Artifact sbb  
          + Name - sbb  
          + Description - My project  for Sprint Boot  
          + Package name - com.mysite.sbb  
          + Packaging - Jar  
          + Java - 17  
          + ADD DEPENDENCIES - Spring  Web 추가 후 Generate 클릭. 
 
    * 압축을 프로젝트 홈 디렉터리에 풀면 sbb 디렉터리가 생성되는데 인텔리제이에서 open 하여 스프링부트 프로젝트를 시작할 수 있다.  
  
    * Lombok 플러그인 설치
      * 인텔리J Preference > Plugin   
      * 'Lombok' 검색 후 설치  
      * ![Lombok](https://github.com/leesemin89/blog/blob/master/img/Controller/Lombok.png?raw=true)
    * 자동 적용 환경 설정  
      * Preference > Build, Execution, Deployment > Compiler  
      - [x] Build project automatically 체크 및 OK 클릭.
    * Preference > Advanced Settings 
      - [x] Compiler 의 Allow auto-make to start even if developed application is currently running 체크 및 OK 클릭.
    * 타임리프(Thymeleaf) 설정  
      * 파일명: sbb/src/main/resources/application.properties
      * 해당 파일에 아래 내용 추가하기.
        ```
        spring.thymeleaf.cache=false
        spring.thymeleaf.prefix=file:src/main/resources/templates/
        ```
      * ![app](https://github.com/leesemin89/blog/blob/master/img/Controller/app.png?raw=true)
    * Unused 경고 메시지 꺼놓기.
      * 커뮤니티 버전은 스프링을 지원하지 않아 컨트롤러 및 URL 매핑 메서드에서 Unused 경고 메시지가 발생하기 때문에 끄는게 좋습니다.
      * Preference > Editor > Inspections 
      * [ ] Declaration redundancy 리스트 중 Unused declaration 항목을 체크 해제하기.
    * 그레이들로 로컬 서버 실행하기
      * sbb > Task > application > bootRun 선택
      * 마우스 오른쪽 메뉴에서 Run 'sbb[bootRun]을 선택
      * (이미지) 로컬 서버 실행
    * 배포파일 생성하기
      * sbb > Tasks > build > bootJar 선택.
      * 마우스 오른쪽 메뉴에서 Run sbb[bootJar]를 선택
      * build/libs 디렉터리에서 sbb-0.0.1-SNAPSHOT.jar 와 같은 배포파일이 생성됨.

*****

## 서버, 클라이언트, 웹 서비스란 무엇일까?
- 네트워크에서 데이터를 주는 컴퓨터를 서버(Server)라고 하고 데이터를 요청하고 받는 컴퓨터를 클라이언트(Client)라고 합니다.
![서버](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuWGZS%2FbtqLLGiuqFh%2Fiee1CdGHKbQnwU1yzLQri1%2Fimg.png)
- 클라이언트는 서비스가 필요한 경우 네트워크에 접속해 서버에게 서비스를 요청하고 받으면 되지만, 서버는 24시간 7일 동안 언제 어떤 클라이언트가 요청을 보내도 서비스를 제공할 수 있도록 준비되어 있어야 합니다.
- 서버는 그 성능과 관계없이 역할에 따라 구분되며, 어떠한 PC도 서버가 될 수 있습니다.
- 이러한 서버 - 클라이언트 구조는 프로토콜을 따르기만 하면 컴퓨터의 종류 및 사양에 관계 없이 데이터를 주고 받을 수 있습니다. 따라서 이 구조는 전 세계 네트워크가 연결된  인터넷의 기반이 되었고, 이 서비스를 활용한 것이 월드 와이드 웹(WWW) 입니다.

## IP 주소와 포트(Port) 이해하기
- 서버는 브라우저로 접속할 수 있는 웹 서비스를 포함, FTP, 이메일 서비스 등도 운용합니다.
- 포트를 사용하면 한 개의 IP 주소로 다양한 서비스들을 제공할 수 있습니다.
- 포트는 네트워크 서비스를 구분하는 번호입니다.
- 대표적인 서비스 종류와 포트 번호
  - 프토토콜|서비스명|포트번호
    ------|------|------
    HTTP|웹 서비스|80
    HTTPS|SSL 웹 서비스|443
    FTP|파일 전송 서비스| 21
    SSH, SFTP|보안 강화 텔넷, FTP 서비스|22
    TELNET|원격 서버 접속 서비스|23
    SMTP|메일 전송 서비스|25
    - 기본 포트번호로서 필요한 경우 포트 번호를 별도로 정의 및 변경할 수 있음.
    - ex) 웹 서비스의 포트번호를 80대신 8080으로 설정

## localhost:8080 이해하기
  - 웹 개발에서 자주 쓰는 `localhost:8080`라는 도메인 명은 IP 주소 `127.0.0.1`, 즉, 내 컴퓨터를 의미합니다.
  - 포트번호 8080는 8080 포트로 서비스를 운용하겠다는 의미입니다.
  - 내 컴퓨터(로컬호스트)에서 실행된 서버는 로컬 서버이기에 외부에서 접속이 불가능합니다.

## 컨트롤러 이해하기
  - 자바 컨트롤러는 주로 소프트웨어 응용 프로그램에서 특정한 작업 또는 기능을 조정하고 관리하는 역할을 하는 부분을 가리키는 용어입니다. 
  - 자바 언어에서는 여러 가지 기능을 수행하는 클래스나 객체를 작성할 수 있습니다. 이러한 클래스 중에서 특정 작업을 조정하거나 다른 객체들 간의 상호 작용을 관리하는 클래스를 일컫는 것이 자바 컨트롤러입니다.

## 컨트롤러 만들기
  - `Http://localhost:8080/hello` 라는 브라우저 요청을 처리할 컨트롤러를 만들어보겠습니다.
  
  - 아래와 같이 src > main > java 디렉터리의 com.mysite.sbb 패키지를 오른 클릭해 새 자바클래스를 만듭니다.
    - ![new](https://github.com/leesemin89/blog/blob/master/img/Controller/1.png?raw=true)
    
  - 새 자바 클래스의 이름은 HelloController입니다.  
    - ![hello](https://github.com/leesemin89/blog/blob/master/img/Controller/2.png?raw=true)

  - 새로 생성된 HelloController 클래스는 아래와 같이 빈 파일입니다.
    - ![hello2](https://github.com/leesemin89/blog/blob/master/img/Controller/3.png?raw=true)
  
  - HelloController 클래스를 아래와 같이 코딩합니다.
    - ![Hello3](https://github.com/leesemin89/blog/blob/master/img/Controller/4.png?raw=true)
  
  - 아래와 같이 우측에 있는 그레이들 패널을 켠 후 Application 아래 bootRun 파일을 우클릭 후 Run 합니다.
    - ![Run](https://github.com/leesemin89/blog/blob/master/img/Controller/5.png?raw=true)
  
  - 서버가 제대로 실행되었다면 아래와 같은 메시지가 나옵니다.
    - ![server](https://github.com/leesemin89/blog/blob/master/img/Controller/6.png?raw=true)
    
  - 크롬 브라우저를 켜고 주소창에 `http://localhost:8080/hello` 를 적습니다. 아래와 같은 응답이 나와야 제대로 작동한 것 입니다.
    - ![chrome](https://github.com/leesemin89/blog/blob/master/img/Controller/7.png?raw=true)