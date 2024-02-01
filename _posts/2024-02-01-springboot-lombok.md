---
date: 2024-02-01
layout: post
title: "[스프링부트 시리즈3]인텔리제이에서 롬복 사용해보기"
subtitle: 롬복이 제공하는 편리함을 느껴보자
description: 
image: 
  https://github.com/leesemin89/blog/blob/master/img/2024-02-01-lombok/lombok%20title.jpg?raw=true
optimized_image:    
  https://github.com/leesemin89/blog/blob/master/img/2024-02-01-lombok/p_lombok%20title.jpg?raw=true
category: devlog
tags:
    - devlog
    - intelliJ
    - Springboot
    - devtool
    - Lombok
  
author: sammy
paginate: true
---

# 롬복을 사용해보자
## 롬복으로 Getter & Setter 메서드 사용해보기
- 전편에서 설치한 롬복이 제대로 작동하고 있다면 아래와 같은 `HelloLombok`` 클래스 작성 시 오류 없이 동작해야 합니다.
    ```java
    package com.mysite.sbb;

    import lombok.Getter;
    import lombok.Setter;

    @Getter
    @Setter
    public class HelloLombok {
        private String hello;
        private int lombok;

        public static void main(String[] args) {
            HelloLombok helloLombok = new HelloLombok();
            helloLombok.setHello("헬로");
            helloLombok.setLombok(5);

            System.out.println(helloLombok.getHello());
            System.out.println(helloLombok.getLombok());
        }
    }
    ```
위의 코드는 롬복을 사용해 단축된 코드입니다.   
아래 코드는 롬복이 단축시킨 코드로서 롬복이 없다면 set과 get 메서드를 모두 작성해야 합니다.  
    ```java
    public void setHello(String hello) {
        this.hello = hello;
    }

    public void setLombok(int lombok) {
        this.lombok = lombok;
    }

    public String getHello() {
        return this.hello;
    }

    public int getLombok() {
        return this.lombok;
    }
    ```

# 롬복으로 생성자 만들기
- `HelloLombok`` 클래스를 아래와 같이 수정합니다.
  ```java
  package com.mysite.sbb; 
    import lombok.Getter; 
    import lombok.RequiredArgsConstructor; 

    @RequiredArgsConstructor 
    @Getter 
    public class HelloLombok { 
        private final String hello; 
        private final int lombok; 

        public static void main(String[] args) { 
            HelloLombok helloLombok = new HelloLombok("헬로", 5); 
            System.out.println(helloLombok.getHello()); 
            System.out.println(helloLombok.getLombok()); 
        } 
    }
  ```
위와 같이 hello, lombok 속성을 추가한 후 @RequiredArgsConstructor 애너테이션을 적용하면 해당 속성을 필요로 하는 생성자가 롬복에 의해 자동 생성이 된다.
    - final 적용시 속성이 고정되어버리므로 @Setter를 사용할 수 없게된다.
아래 코드는 원본 코드이다.
```java
package com.mysite.sbb; 

import lombok.Getter; 

@Getter 
public class HelloLombok { 
    private final String hello; 
    private final int lombok; 

    public HelloLombok(String hello, int lombok) { 
        this.hello = hello; 
        this.lombok = lombok; 
    } 

    public static void main(String[] args) { 
        HelloLombok helloLombok = new HelloLombok("헬로", 5); 
        System.out.println(helloLombok.getHello()); 
        System.out.println(helloLombok.getLombok()); 
    } 
}

```