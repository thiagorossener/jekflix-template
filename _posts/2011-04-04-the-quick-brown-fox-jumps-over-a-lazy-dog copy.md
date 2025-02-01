---
date: 2022-12-20 12:26:40
layout: post
title: Data Science
subtitle: 
description: Programming and Computational Finance 
image: /assets/img/growth-stock-chart.jpg
optimized_image: /assets/img/growth-stock-chart.jpg
category: DATASCIENCE
tags:
  - Tesla
  - GameStop
  - Stock
author: Rachael
---

<h2 class="toc_title">Introduction</h2>

This project delves into the application of advanced programming and computational finance techniques to analyze and predict movements in financial markets. By employing a range of machine learning models and feature engineering techniques, this repository showcases the predictive power of historical market data on the S&P 500 index. The features engineered include various technical indicators like the Relative Strength Index (RSI), Exponential Weighted Moving Averages (EWM) Crossovers, Exponential Weighted Volatility, and Simple Moving Averages (SMA), providing a deep dive into predictive modeling strategies. 

<h3 class="toc_title">Technologies Used</h3>
<ul>
  <li><strong>Programming Languages:</strong> Python</li>
  <li><strong>Libraries and Tools:</strong> Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn, Tensorflow</li>
  <li><strong>Financial Analysis Tools:</strong> Arima, LSTM, XGBoost, Gradient Boosting, K-Nearest Neighbors (KNN), Mean Reversion, Moving Average Convergence Divergence (MACD)</li>
</ul>

<h3 class="toc_title">Feature Engineering Used</h3>
<ul>
  <li><strong>Relative Strength Index (RSI):</strong> Calculated periods of 10, 30, 60, and 200 to gauge the momentum.</li>
  <li><strong>Exponential Weighted Moving (EWM) Crossovers: Includes combinations like 10/30, 10/60, and 30/60 to identify potential buy or sell signals.</li>
  <li><strong>Exponential Weighted Volatility: Measured for 10/30, 10/60, and 30/60 periods to assess market risk.</li>
  <li><strong>Simple Moving Average (SMA): Periods of 21, 63, and 252 help smooth out price data and identify trends.</li>
</ul>

<h2 class="toc_title">Predictive Modeling</h2>
The project includes several models to predict the direction of the SPY500 based on its returns:
<ul>
  <li><strong>Direction Determination:</strong> The target variable 'Direction' is derived from the returns (log difference of adjusted close prices shifted by -5 days). A positive return sets the direction to 1 (up), and a negative return sets it to 0 (down).</li>
  <li><strong>Modeling Strategies:</strong>
    <ul>
      <li><strong>Ensemble Model:</strong> Combines XGBoost, Gradient Boosting, and KNN to predict market trends.</li>
      <li><strong>LSTM Model:</strong> Utilizes Long Short-Term Memory networks to model sequences in stock price movements for more accurate forecasts.</li>
      <li><strong>Mean Reversion Strategy:</strong> Tests if the price will revert to its average, indicating potential trading opportunities.</li>
      <li><strong>MACD Strategy:</strong> Utilizes the Moving Average Convergence Divergence to signal buying and selling points based on the crossover of moving averages.</li>
    </ul>
  </li>
</ul>

 

![Graph](/assets/img/4.1.png "Graph")

From the above graph, we can visualize the historical trends of the opening price of Tesla stocks. As shown above, there is a downward trend from end of 2021 to begining of 2023. Tesla's stock lost about 70 percent and this was the result of high inflation rates in the United States accompanied by Musk's acquisition of Twitter. 

Now, we look at historical prices for GameStop and identify any trends in the graph. 

![Graph](/assets/img/4.2.png "Graph")

From the graph above, we can see that GameStop's stocks have been on a downward trend ever since beginning of 2021. After researching GameStop further, the stocks sudden rise was due to Reddit's driven short squeeze, resulting the stock to skyrocket to a split-adjusted all-time high of $86.88 - which represented a 1,740% gain from the beginning of that month. 

But today, GameStop's stock trades at about $25 as it lost its luster as rising inflation rates drove investors away from speculative meme stocks. 


Therefore, as a Data Scientist for the new startup investment firm, I would advise investing into Tesla than GameStop as it has potential for future growth, data shows stronger financial performance in recent years, and the electric vehicle market is expanding with a projected reach of $823.75 billion by 2030. 

















