---
date: 2022-08-08 01:12:50
layout: post
title: Arab Security Cyber WarGames - Championship 2022

description: Some Web Challenges
image: /assets/img/ASCWG2022/war2022.jpg
optimized_image: /assets/img/ASCWG2022/war2022.jpg
category: blog
tags:
  - web challenges
  - ctfs
  - ASCWG2022
  - web ctfs

---

I've solved some web challenges in this post, so there are three challenges so select any challenge you want

1. [Drunken Developer](#drunken-developer)
2. [Konan](#konan)
3. [Evil Volunteer](#evil-volunteer)



# Drunken Developer 

## Level: Warm up

## Point: 100

## Description
Developer have to disable his personal things
 
Flag must start with ASCWG❴...answer❵


[Link](http://104.154.142.159:5454/)

## Solution

1) I viewed the website and the source page.

![image](/assets/img/ASCWG2022/developer/login.png)

![image](/assets/img/ASCWG2022/developer/source.png)

When I saw the source page, I noticed that the admin forgot his email and that he was using a temporary email.
Which makes it easier to try to make an email similar to that so that any message you receive will be sent to the hacker.

2) I searched for vistaemail.com and found that site that helps generate an email similar to an admin to receive the same emails.

![image](/assets/img/ASCWG2022/developer/tempmail.png)

3) Create same email form from this site (temporary mail id).

![image](/assets/img/ASCWG2022/developer/2022-createmail.png)

4) The first thing you do is reset the password by sending the administrator's email, you will receive a message on the fake email.

![image](/assets/img/ASCWG2022/developer/reset1.png)

5) Now check my email box.

![image](/assets/img/ASCWG2022/developer/receivemail.png)

6) Once you click here, go to the set password page and set a new password.

![image](/assets/img/ASCWG2022/developer/setnewpass.png)

7) I went to the login page and enter the email and the new password that you entered on the password-setting page, and then I found the flag.

![image](/assets/img/ASCWG2022/developer/flag.png)


# Konan 

## Level: Easy

## Point: 300

## Description
change yourself

Flag must start with ASCWG❴...answer❵

[Link](http://34.68.152.81:60003/)

## Solution

1) I saw the website and tried to enter with the highest privildge.

![image](/assets/img/ASCWG2022/OTP/login.png)

![image](/assets/img/ASCWG2022/OTP/phase1.png)

I intercept request by burp.

2) Once forward the request, I go to otp page.

OTP means One Time Password: it’s a temporary, secure PIN-code sent to you via SMS or e-mail that is valid only for one session. Smart-ID uses OTPs during registration and account renewal to confirm your contact information.

![image](/assets/img/ASCWG2022/OTP/otpcode.png)

3) Intercept otp page request and forward it to see response. 

![image](/assets/img/ASCWG2022/OTP/phase2.png)

![image](/assets/img/ASCWG2022/OTP/intercept response.png)

Do intercept response.

4) Change response and forward it. 

![image](/assets/img/ASCWG2022/OTP/change response.png)

5) Bingooo, I got the flag.

![image](/assets/img/ASCWG2022/OTP/flag.png)






