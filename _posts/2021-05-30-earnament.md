---
date: 2021-05-30 13:19:29
layout: post
title: Using Machine Learning to increase revenue at my small business
subtitle: I launched my small business during Covid-19 lockdown and collected data to predict consumer behavior
description: I launched my small business during Covid-19 lockdown and collected data to predict consumer behavior
image: /assets/img/uploads/smallbiz.jpeg
optimized_image: /assets/img/uploads/smallbiz.jpeg
category: datascience
tags:
author: meinlee
paginate: false
---

> ##### The big question every data scientist should ask themselve is: "Why does it matter?" How do the analyses and predictions help the company?


![Screen Shot 2022-05-05 at 12 07 51 AM](https://user-images.githubusercontent.com/73072620/166876724-8cd7fe59-c9d7-4f00-8f96-f529e72fccc7.png)

<a href="https://earnament.wixsite.com/earnament">Visit my website here!</a>

My small business was born amidst the height of the Covid-19 pandemic. 

I couldn't land an internship that summer, but I picked up jewelry-making as a hobby and decided to make the most out of the situation. I couldn't be an intern, so I became a small business owner -- working on everything from creating social media content, running marketing campaigns, and of course -- analyzing data and predicting consumer behavior.

<b>Data Science skills used:</b>Data collection, Data Cleaning, EDA, Regression Modeling, Label Encoding, Feature Selection, Hypothesis Testing

<b>Programming Tools and Software:</b> Google Forms, Excel, Python, Pandas, scikit-learn

<div>
<h2 class="toc_title">Table of Contents</h2>
<ul class="toc_list">
  <li><a href="#Data Collection and EDA">Data Collection and EDA</a></li>
  <li><a href="#Feature Selection">Feature Selection</a></li>
  <li><a href="#Logistic Regression">Logistic Regression</a></li>
  <li><a href="#Hypothesis Testing">Hypothesis Testing</a></li>
  <li><a href="#The Big Question">The Big Question</a></li>
</ul>
</div>

<h2 id="Data Collection and EDA">Data Collection and EDA</h2>

I Collected 300+ market survey responses that included data on: 
1. Gender	
2. Age Range	
3. Frequency of wearing jewely
4. Jewelry type
5. Design preferences
6. Amount spent on Fashion / Fine jewelry
7. Amount spent on shipping
8. Purchase Habits
9. Online shopping preferences 
10. Website preferences
11. Care level for jewelries

<h2 id="Feature Selection">Feature Selection</h2>
Based on participants' responses to the above survey questions, I would like to pick the best features in order to predict two consumer behaviors:
- The amount of shipping fee a person is comfortable spending
- If a person will buy jewelry planned or unplanned (impulsively)

In order to determine the best feature for regression analysis and classification modeling, I used three different techniques: 
1. Univariate Selection
2. Feature Importance
3. Correlation Matrix with Heatmap

Here is the heatmap of the Correlation Matrix, plotted using the seaborn library:

![image](https://user-images.githubusercontent.com/73072620/166882092-5aa2d75a-989d-4ee2-9ea7-c94056be647d.png)

<h2 id="Logistic Regression">Logistic Regression</h2>
I used logistic regression to predict the amount of shipping fees a person will be comfortable spending. I label encoded three features to generate numerical inputs and scored a testing accuracy of 70% using only 300+ consumer data. Given a new set of consumer data, I would be able to use my model to predict the best shipping rates for my small business. 

<h2 id="Hypothesis Testing">Hypothesis Testing</h2>

I ran a hypothesis test on Age Range and Website Preference (whether consumers prefer to purchase products online through social media or a website). I generated a 95% Confidence Interval on the correlation between both factors, and concluded that there is no association. The residual plot also proved zero correlation. Given that my target audience are millenials and Gen-Z's, I wanted to find out if they prefer to shop on a website rather than a social media business account.
 
 <h2 id="The Big Question">The Big Question</h2>
 
 The big question every data scientist should ask themselve is: "Why does it matter?" How do the analyses and predictions help the company?
 
When I ran my logistic regression model on the training data, almost 50% of the predicted shipping rates go up to $7, which is a $2 increase from the current shipping rate that I charge. This showed that I may be incurring unnecessary shipping costs to my business by charging a lower rate. 

This also suggested to me that instead of appealing to the audience through low shipping fees, I should focus on jewelry designs that are popular preferences among my audience. My EDA process helped me narrow down on the top three designs that I should invest more on, and also showed that a majority of participants purchased jewelries online impulsively (unplanned). This may be due to the fact that the survey was collected during a strict lockdown protocol, where most people kill time by scrolling on their phones and shopping online. 

Regardless, I viewed this as an opportunity to implement marketing strategies such as flash sales, limited time promotions, and group discounts to incentivize both planned and unplanned purchases. A month later, I received my first international order worth over $100 USD, a 300% increase in a usual order. 
 
 
 
 
 
 
 
 
 
 
 
 
 

