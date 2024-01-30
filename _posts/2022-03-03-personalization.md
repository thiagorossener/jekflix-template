---
date: 2023-05-01 12:00:00
layout: post
title: Rice Disease Detector 
subtitle: 
description: I built a Convolutional Neural Network model with transfer learning to detect various rice diseases 
image: /assets/img/paddy field.jpeg
optimized_image: /assets/img/paddy field.jpeg
category: datascience
tags:
author: meinlee
paginate: false
---


<h2 id="Project Inspiration">Project Inspiration</h2>

My grandparents were paddy field farmers since the 1950s in Sekinchan, Malaysia (shown in the picture above). I developed a project utilizing a Convolutional Neural Network model designed to identify and diagnose various rice diseases. 

 
<h2 id="Model Training"> Model Training </h2>

I began building a CNN model with 5 convolutional layers. The model was trained on images from a Kaggle dataset containing 1600 images belonging to 4 classes. Initially, without transfer learning, both training and validation accuracies stagnated at around 50% with 25 epochs, showing minimal improvement over time. 

However, when I adopted the convolution layers of the InceptionV3 architecture as the base model and added the dense layers in which I trained to recognize the various rice diseases, I saw a real game-changer. The approach of employing transfer learning elevated the training and validation accuracy to approximately 56% with 25 epochs. The good thing with this model is that the training and validation accuracy does not seem to overfit the data as the curves are in sync, as shown in the graphs below. 

![Training Accuracy](/assets/img/training accuracy.jpg "Training Accuracy")

![Training Loss](/assets/img/training loss.jpg "Training Loss")

<h2 id="Model Optimization and Future Directions">Model Optimization</h2>

Given these results, I am optimistic that increasing the number of epochs would further refine the model's accuracy, improving its capability to accurately diagnose rice diseases.  

With the model, I mitigated the risk of overfitting by incorporating a dropout layer with a 20% rate in the convolutional stages, which served to regularize the model's output. Additionally, I employed image augmentation techniques such as rotations, zoons, and shifts before training to enhance the model's ability to generalize to new, unseen data. Thus, these strategies have proven to collectively contribute to a robust and reliable accuracy. 

<h2 id="Model Optimization and Future Directions">Future Directions</h2>

Beyond technical enhancements, the ultimate goal is to deploy this model in a user-friendly mobile application, making it readily accessible to farmers. By simply taking a photo of their rice plants using the app, farmers can promptly determine if their crops are afflicted with any of these diseases. This not only allows for early detection and treatment but it is also projected to reduce crop waste by 21%.






