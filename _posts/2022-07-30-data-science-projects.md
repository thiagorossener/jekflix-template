---
date: 2023-08-30 08:57:37
layout: post
title: "Multilingual Speech Transcription & Translation"
subtitle: Brief overview of a personal project of mine
description: 
image: /assets/img/openai-whisper.jpg
optimized_image: /assets/img/openai-whisper.jpg
category: datascience
tags:
author:
paginate: 
---


> ##### Introduction

This project aims to bridge the language barrier 
As a Chinese Malaysian, my education was a linguistic melting pot where English, Chinese, and Malay were all integral parts of my education. Among these languages, Malay, the national language, was the one I struggled with the most. And ever since moving to the States, I became even more less in tune with my Malay language capabilities. The project is motivated by the desire to be more in touch with Malaysian politics. As most government parliament meetings are conducted in Malay, a language I'm not fluent in. 
To bridge this gap, this project allows me to import YouTube videos of these parliament sessions, transcribe the spoken Malay into text, and then translate it into English using Streamlit. 



> ##### Background of Whisper AI model

This project utilizes the Whisper model from Open AI, which is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. The Whisper architecture is a simple end-to-end approach, implemented as an encoder-decoder Transformer. Input audio is split into 30-second chunks, converted into a log-Mel spectrogram, and then passed into an encoder. A decoder is trained to predict the corresponding text caption, intermixed with special tokens that direct the single model to perform tasks such as language identification, multilingual speech transcription, and to-English speech translation. 

![Whisper](/assets/img/whisper.jpg "Whisper")


> ##### Detailed Breakdown of the Audio Transcription Process

The application initiates by downloading audio from a specified YouTube URL, and saving it in MP3 format. This is followed by a conversion process where the downloaded MP3 file is transformed into WAV format, utilizing ffmpeg. This step is necessary as WAV files are uncompressed, meaning they contain raw audio data without any loss of quality. MP3 files, on the other hand, are compressed. The lossy nature of MP3 can lead to a reduction in the clarity and detail of the sound, which can affect the accuracy of speech recognition systems. Next, an essential step of resampling is incorporated. This step adjusts the sample rate of the audio data and interpolates it to align with the new sample rate, a crucial step to ensure compatibility with the Whisper AI model.

Subsequently, the transcribe audio function is invoked. In this phase, the application loads the 'medium' model of Whisper AI and proceeds with the transcription of the audio into English. The outcome of this process is the return of the transcribed text. The entire workflow is seamlessly integrated and built using Streamlit. 

![gif](/assets/img/ips-82DEA1B7-D4EF-4E37-8B7E-C5CBF00A56B7.gif "gif")
 

> ##### Model Performance Comparison in Whisper AI

Whisper AI offers a range of models for audio transcription and translation, varying in sizes and capabilities. In my project, I conducted a comparative analysis of these models to find the optimal balance between accuracy and speed. Specifically, I tested the small, medium, and large models on a 2-minute audio file. The small model, while it ran the fastest, performed badly in accuracy. Conversely, the large model excelled in accuracy with a near-perfect translation but it took about 4 minutes to run, which is double the audio's duration. Ultimately, I chose the medium model as it runs significantly faster, completing the task in about 20 seconds. Although its accuracy is slightly inferior to the large model, it still delivers a sufficiently accurate translation. 


> ##### Project Enhancements and Future Prospects

Given that the project currently operates on a CPU, a 2-minute duration was an ideal amount of time to test the performance. I reckon that utilizing a GPU could significantly enhance the project's capabilities. Specifically, the large Whisper AI model would likely be more effective on a GPU, allowing for the processing of longer audio segments with improved accuracy in transcription and translation. 


> ##### Future Development: Live Audio Translation Application

Moving forward with this project, I aim to develop a live audio translation application whereby real-time translation can be done as a video is playing on any platform. This application would be particularly useful for translating less commonly spoken languages and unique dialects that are only spoken within small communities. 





