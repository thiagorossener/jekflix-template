---
date: 2023-08-01 12:00:00
layout: post
title: Rice Disease Detector 
subtitle: 
description: I built a model with a Convolutional Neural Network with transfer learning to detect various rice diseases 
image: /assets/img/paddy field.jpeg
optimized_image: /assets/img/paddy field.jpeg
category: datascience
tags:
author: meinlee
paginate: false
---


<h2 id="Project Inspiration">Project Inspiration</h2>

The picture above is a small town in Malaysia called Sekinchan, which is also my hometown. My grandparents were paddy field farmers and had grown rice crops since the 1950s. Therefore, I built a Convolutional Neural Network utilizing transfer learning to detect various rice diseases such as brown spot, leaf blast, and hispa. 

I'm currently developing an app that empowers farmers to diagnose their crops efficiently. By simply taking a photo of their rice plants using the app, farmers can promptly determine if their crops are afflicted with any of these diseases. This not only allows for early detection and treatment but it is also projected to reduce crop waste by 21%. 

 
<h2 id="Model Training"> Model Training </h2>

I began building a CNN model with 5 convolutional layers. The model was trained on images from a Kaggle dataset containing 1600 images belonging to 4 classes. Initially, without transfer learning, both training and validation accuracies stagnated at around 50% with 25 epochs, showing minimal improvement over time. 

However, a significant enhancement was observed when I adopted convolution layers of the InceptionV3 architecture as the base model and added the dense layers in which I trained to recognize the various rice diseases. This approach, employing transfer learning, elevated the training and validation accuracy to approximately 56% with 25 epochs. The good thing with this model is that the training and validation accuracy does not seem to overfit the data as the curves are in sync, as shown in the graphs below. 

<h2 id="Data Cleaning and Feature Engineering">Data Cleaning and Feature Engineering</h2>

Given these results, I am optimistic that increasing the number of epochs would further refine the model's accuracy, improving its capability to accurately diagnose rice diseases.  

With the model, I mitigated the risk of overfitting by incorporating a dropout layer with a 20% rate in the convolutional stages, which served to regularize the model's output. Additionally, I employed image augmentation techniques through rotations, zoons, and shifts before training to enhance the model's ability to generalize to new, unseen data. Thus, these strategies have proven to collectively contribute to a robust and reliable accuracy. 

In this model, I prevented overfitting the data by adding a drop-out layer of 20% in the convolutional layers to regularize the output as well as augmented the pictures before training so that the model ???

![Data Inputs](/assets/img/uploads/data_inputs.jpg "Data Inputs")

Although it may be tiring to stare at SQL queries all day – I got my very first pair of blue light glasses cus’ my eyes started hurting – getting hands-on experiences with SQL tricks like views, pivots, window functions, and subqueries was pretty cool.

Then came the important part (yes, very important, as repeated over and over again by university professors and tech bloggers) – data cleaning and preprocessing. I encoded and normalized many features to get them into a clean format. Some of the cleaning work were performed simultaneously when I built the features on SQL Server. I also narrowed it down to 1 (out of 70) Million <i>active</i> customers only, meaning that at least I didn’t have to worry about sparse* data 

However, I had to deal with skewed* data which was resolved through resampling.

*sparse data: data with alot of null values.
*skewed data: distorted/assymetrical data, for example if the output data has much more 1's than 0's

<h2 id="Building and Evaluting the Model">Building and Evaluating the Model</h2>

There are two stages in this phase:
<ol>
<li>Assigning discounts to each customer based on their transactional history</li>
<li>Predicting engagement with the assigned discount and making necessary changes </li>
</ol>
First, the goal was to predict which discount among No Discount (0%), 20%, and 25% should be assigned to each customer, and these amounts were chosen because it was the most frequently used discounts, hence more transactional data to work with. 

In order to determine the best assignment for each customer, I calculated the Conditional Average Treatment Effect (CATE) between No Discount (0%), 20%, and 25%. The effect is represented by the sales generated, and the assignment is generated based on the rules of the table below.

![CATE Table](/assets/img/uploads/CATE_table.jpg "CATE Table")

Following the discount assignments, I built a second model to predict how likely each customer would actually use the discount. The first step was to determine which features among the the 100+ that I mentioned above were actually useful to the model.

In hindsight, perhaps 100+ features is an overkill. After applying the <i>Recursive Feature Elimination, Cross-Validated</i> (RFECV) sklearn package and Principal Component Analysis to the features, only ~10% of them were chosen for optimal model performance. That made sense since many transactional data were calculated from each other and were probably highly correlated with each other. 

However, I was glad to notice some features that I spent extra time building (e.g., time elapsed between first and second discount) as one of the top features. So, it was definitely with <i>some</i> time to perform feature engineering.

The second step was to pick the best model. Between Random Forest and Logistic Regression, Random Forest reported a 90% test accuracy, and better precision, recall, and F1 score on the testing set. For future projects, I would like to experiment with an ensemble of different models to evaluate how much better the ensemble method would perform. 

The table below shows the discount assigned to each customer, the method of outreach (app or email notifications), and the chance of that customer engaging with the discount. 

![Discount Predictions](/assets/img/uploads/discount_pred.jpg "Discount Predictions")

<h2 id="A/B Testing">A/B Testing</h2>

A/B testing refers to a randomized experimentation process wherein two or more versions of a variable (in this case, personalization vs no personalization) are shown to different groups of customers at the same time to determine which version leaves the maximum impact and drives business metrics.

Theoretically, the steps for A/B testing are:
<ol>
<li>Determine evaluation metric</li>
<li>Determine significance level and sample size</li>
<li>Decide the timeframe</li>
<li>Coordinate implementation with Engineering & Marketing</li> 
<li>Randomly assign into control and treatment</li> 
<li>Check assumptions</li>
<li>Measure and analyze results, calculate significance</li>
 </ol>

Although I followed these steps, there are other things I learned that are important in this process. 

First, it is important to discuss with managers and stakeholders to identify the success metrics that they expect to see. In my project’s case, it was a certain percentage of sales lift. Similarly, the timeframe and sample size could be determined mathematically, but the urgency of the project and the cost of testing could very much affect the timing and sample size of the A/B test. Conversations with my team and relevant stakeholders was necessary to find a middle ground that doesn't affect the significance of the test but also doesn’t come at a high cost to the company.

Second, randomization helps to reduce bias – I made extra sure that treatments are consistent but randomized. Another way to reduced bias was to get rid of confounding factors. We avoided the weekend before and on the 4th of July because purchasing behaviors are starkly different during holidays.

Third, make sure that data pipelines are set up and real-time data from the A/B test is ready to be queried and analyzed accurately. For example, I kept a record of the 1 Million customerID’s, their assigned discounts, and whether they were in the treatment (personalized) or control (no personalization) group. If I had not kept track during the randomization process, I would not have a way to calculate the test statistic of each group.

As I list the things that I’ve learned from just two weeks of A/B testing, I realized that I could go on and on. A/B Testing sounds simple, but it's easy to overlook many crucial details. Feel free to contact me on LinkedIn or by email if you want to chat about it!

<h2 id="Results and Presentation">Results and Presentation</h2>

![A/B Test](/assets/img/uploads/ab_test.jpg "A/B Test")

There was almost a 40% increase in Average Spend with personalization. I also ran a Z-test to check for statistical and practical significance. 

Looking at the company's numbers, we estimated over a million dollars increase in sales by personalizing discounts to customers. Given more time, more data, and a better model, this number could only increase.

At the end of my internship, I gave a 10-minute presentation to a group of C-Suite executives, including the CEO himself, who turned, looked around the room mid-presentation, and said: “we gotta stop giving the wrong discounts!”

Today, the Data Science team is expanding on the personalization strategy to provide a better shopping experiences for their customers. 

<h2 id="Closing Thoughts">Closing Thoughts</h2>

Moving forward, what does this mean? 

This project was one of the first personalization initiatives and had shown to benefit both the company and its customers, so I recommended further action to be taken by expanding this strategy to larger channels and audiences. For example, testing on discount amounts beyond 0,20,25%, testing on a larger sample, and venturing into different discount types (BOGO, bundle sales, free shipping, etc.).

If you made it to the end of the post – thank you! If you are someone who assisted me – in any way – during my internship, I can’t express how grateful I am for this amazing summer opportunity.  I’m excited to apply my skills to future projects, and it’s all thanks to my amazing support system!

### Interested in similar posts? Want to leave a comment?
<a href="https://docs.google.com/forms/d/e/1FAIpQLSfh1Kx8ftMOR92ijcBb_-K2OAv2XAnQlWChwuBG2vTGkkBeuQ/viewform?usp=sf_link">Sign up for my mailing list!</a>

<div id="toc_container">
<h2 class="toc_title">Table of Contents</h2>
<ul class="toc_list">
  <li><a href="#Acknowledgements">Back to Top</a></li>
  <li><a href="#Acknowledgements">Acknowledgements</a></li>
   <li><a href="#Project Inspiration and Research">Project Inspiration and Research</a></li>
   <li><a href="#Working in Cross-Functional Teams">Working in Cross-Functional Teams</a></li>
   <li><a href="#Data Cleaning and Feature Engineering">Data Cleaning and Feature Engineering</a></li>
  <li><a href="#Building and Evaluting the Model">Building and Evaluting the Model</a></li>
  <li><a href="#A/B Testing">A/B Testing</a></li>
  <li><a href="#Results and Presentation">Results and Presentation</a></li>
  <li><a href="#Closing Thoughts">Closing Thoughts</a></li>
</ul>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



