---
date: 2024-01-22
layout: post
title: 인텔리제이 GUI 디자이너 튜토리얼
subtitle: 인텔리제이 내장 기능인 GUI 디자이너를 사용해 기초적인 GUI 앱을 만들어보자
description: 
image: 
  https://github.com/leesemin89/blog/blob/master/img/2024-01-26-intelliJ%20GUI/IntelliJ%20title.png?raw=true
optimized_image:    
  https://github.com/leesemin89/blog/blob/master/img/2024-01-26-intelliJ%20GUI/p_IntelliJ%20title.png?raw=true
category: devlog
tags:
    - devlog
    - IntelliJ
    - GUI
author: sammy
paginate: true
---

# 인텔리제이 GUI 디자이너를 사용해 기초적인 GUI 앱을 만들어보자.

## 1. GUI 디자이너 위치찾기
- 새 프로젝트의 SRC > New > Swing UI Designer > GUI FORM 
    ![Location](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI1.png?raw=true)

## 2. 새 GUI Form 작성하기
- GUI Form 을 클릭하면 다음과 같은 창이 나타난다.
    ![GUI Form](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI2.png?raw=true) 

## 3. 완성된 Form의 형태
- GUI Form 이름을 Main으로 설정한 후 만들어진 기본 창이다.
    ![GUI default](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI3.png?raw=true)

## 4. Main.java의 형태
- GUI Form 이 만들어지면 .java 문서와 .form 창이 생성된다.
- 이 튜토리얼에서는 Main.java 와 Main.form이 생성되었다.
- Main.java에 `public class Main extends JFrame` 을 입력하자.
- JFrame을 입력했을때 문서의 최상단에 `import javax.swing.*` 이 필요하다. 
    ![Main.java](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI4.png?raw=true)

## 5. Main.java의 기본형태 작성하기
- 비어있는 `Main()`에 Title, DefaultCloseOperation, Size, Location, Visible을 아래와 같이 추가하기.
    ![setMain](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI5.png?raw=true)

## 6. `public static void main(String[] args)`를 추가하기
- `Main()` 닫는 괄호 뒤에 `public static void main(String[] args)`를 추가한 후 `new Main()` 을 본문에 작성하면 됩니다.
- 이제 해당 파일을 빌드한 후 실행시켜보자. 그러면 아래와 같은 빈 윈도우가 하나 뜬다.
    ![build](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI6.png?raw=true)

## 7. Main.form 파일의 형태
- Main.form을 클릭해 보면 아래와 같은 형태의 GUI 설정 옵션들이 있다.
- 오른쪽 파레트에서 JLabel을 선택 드래그 앤 드롭을 한 후 field name값을 FirstName으로, Text는 First Name으로 설정.
    ![Main.form](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI7.png?raw=true)

## 8. Textfield 추가하기
- 7번에서 추가한 JLabel 밑에 다시 오른쪽 파레트에서 JTextField를 드래그 앤 드롭하면 아래와 같이 나타납니다
- 필드네임은 textField1으로 설정.
    ![textField1](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI8.png?raw=true)

## 9. 프리뷰 보기
- 8번까지 완료했으면 본문에 오른 클릭 후 Preview를 선택합니다.
    ![preview](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI9.png?raw=true)
- 아래와 같은 창이 나타납니다.
    ![previewWindow](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI10.png?raw=true)

## 10. 버튼 배치하기
- 오른쪽 파레트에서 JButton을 본문에 드래그 앤 드롭합니다.
- 텍스트는 Click Me로 설정.
- 필드네임은 clickMeButton으로 설정.
    ![button](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI11.png?raw=true)

## 11. 버튼에 리스너 설정하기
- 현재 해당 버튼은 아무것도 하는 역할이 없다. 그러므로 무슨 동작을 할 지 설정해줘야 한다.
- 버튼이 배치되었으면 해당 버튼을 오른 클릭해 메뉴에서 Create Listener를 클릭합니다.
    ![Listener](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI12.png?raw=true)
- Creat Listener 항목에서 1번 ActionListener를 선택합니다.
    ![ActionListener](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI13.png?raw=true)
- 아래와 같이 임플먼트 메서드 설정 후 확인을 누릅니다.
    ![implement](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI14.png?raw=true)

## 12. 'addActionListner()' 확인.
- 아래와 같이 `ActionListener`이 설정되었는지 확인합니다.
    ![addAction](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI15.png?raw=true)
- 액션 리스너는 현재 비어있으므로 showMessageDialog를 사용해 메시지 창을 띄워보도록 하자.
    ![showtext](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI16.png?raw=true)

## 13. 다시 실행해보기
- 다시 Main.java를 빌드 후 실행해보면 아래와 같은 빈 창이 뜹니다.
    ![run](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI17.png?raw=true)

## 14. 빈 창이 뜨는 원인 해결하기
- 위에서 설정한 모든 것이 하나도 적용되지 않았다. 
- 원인은 Main.form의 Jpanel인데 아래와 같이 해당 필드네임이 없기 때문입니다.
    ![Jpanel](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI18.png?raw=true)

## 15. JPanel에 필드네임 설정하기
- 필드네임에  MainPanel 이라는 값을 설정합니다.
    ![Jpanel2](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI19.png?raw=true)

## 16. Main.java 확인하기
- 필드네임이 설정되면 Main.java 에도 해당 JPanel의 설정된 필드네임이 보입니다.
    ![Jpanel3](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI20.png?raw=true)

## 17. MainPanel 설정하기
- `Main()` 본문에 `setContentPane(MainPanel)`을 설정합니다.
    ![contentpane](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI21.png?raw=true)

## 18. 빌드 후 실행하기
- 다시 Main.java를 빌드 후 실행합니다.
- 아래와 같은 창이 나타납니다.
    ![app](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI22.png?raw=true)


## 19. 메세지 창이 first name을 받도록 변경하기
- `actionPerformed()` 에 `String firstName = textField1.getText()` 메서드를 적용합니다.
    ![text](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI23.png?raw=true)

## 20. 메세지 수정하기
- 'Welcome' + firstname 이 나타나도록 메서드를 수정합니다.
    ![text2](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI24.png?raw=true)

## 21. 최종형태
- 아래와 같이 창은 결과가 나와야 합니다.
    ![end](https://github.com/leesemin89/blog/blob/master/img/GUI/GUI25.png?raw=true)

[Main.java 다운로드](https://github.com/leesemin89/Chat/blob/1day/src/Main.java)
[Main.form 다운로드](https://github.com/leesemin89/Chat/blob/1day/src/Main.form)