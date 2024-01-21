---
date: 2022-07-30 08:57:37
layout: post
title: "Multilingual Speech Transcription & Translation"
subtitle: Brief overview of a personal project of mine
description:
image: /assets/img/uploads/data.png
optimized_image: /assets/img/uploads/data.png
category: datascience
tags:
author:
paginate: false
---


> ##### Introduction

As a Chinese Malaysian, my education was a linguistic melting pot where English, Chinese, and Malay were all integral parts of my education. Among these languages, Malay, the national language, was the one I struggled with the most. And ever since moving to the States, I became even more less in tune with my Malay language skills. The project is motivated by the desire to be more in touch with Malaysian politics. As most government parliament meetings are conducted in Malay, a language I'm not fluent in. To bridge this gap, this project allows me to import YouTube videos of these parliament sessions, transcribe the spoken Malay into text, and then translate it into English using Streamlit. 

![mp4](/assets/img/ips-82DEA1B7-D4EF-4E37-8B7E-C5CBF00A56B7.mp4 "mp4")
 


This project utilizes the Whisper model from Open AI, which is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. The Whisper architecture is a simple end-to-end approach, implemented as an encoder0decoder Transformer. Input audio is split into 30-second chunks, converted into a log-Mel spectrogram, and then passed into an encoder. A decoder is trained to predict the corresponding text caption, intermixed with special tokens that direct the single model to perform tasks such as language identification, multilingual speech transcription, and to-English speech translation. 


![Whisper](/assets/img/whisper.jpg "Whisper")

Whisper AI offers various models from small to large. However, through trial and error, I decided to go with the medium model for its accuracy and decent run time. To put the different models into perspective by transcribing and translating a 2-minute audio file. With the small model, although it ran the fastest, it produced the worst results among other models. With the large model, it took almost 4 minutes to run, but it produced the most accurate translation. With the tradeoff between time and accuracy, the medium model is the best running about 20 secs. Although the translation were slightly off compared to the large model, it was good enough considering it only took 20 seconds.  

This project is also coded to download YouTube videos and save the audio file temporarily for up to 2 minutes to perform audio transcription and translation. As I am running this project with a CPU, 2 minutes was an ideal amount of time to test the performance. I reckon that if this project was run with a GPU, the large model would probably work the best and the model could also allow for longer periods of audio input being transcribed and translated. 






