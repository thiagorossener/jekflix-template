---
date: 2023-12-20 12:26:40
layout: post
title: Programming and Computational Finance 
subtitle: 
description: How I optimize investment strategies with machine learning
image: /assets/img/growth-stock-chart.jpg
optimized_image: /assets/img/growth-stock-chart.jpg
category: Computational Finance
tags:
  - Stock
  - Finance
author: Rachael
---
<h2 class="toc_title">Analytical Option Formula</h2>
- Black Scholes
- input formula
- Bachelier 
- input formula
- Implied Volatility
- Interpolation function: This function is designed to calculate the at-the-money (ATM) implied volatility based on the volatility of out-of-the-money(OTM) call and put options. It computes a weighted proportion based on the distance of the underlying asset's price from the put strike price relative to the total interval between the call and put strike prices. This ratio helps to determine how much weight should be given to the call's volatility versus the put's volatility. It then adjusts the put's volatility by the proportional difference between the call's and put's volatilities. This step essentially performs a linear interpolation between the 2 volatilities, based on where the underlying asset's price lies relative to the 2 strike prices. 
 


<h2 class="toc_title">First Step</h2>
I first uploaded options data from spx and spy containing data such as data, expiry date, cp_flag, strike price, best bid, best offer, and exercise style. I also included zero yield curve rates from 2020-12-01. 

With the rates data, I interpolate the zero yield curve rates. With this function, it can then be used to find interpolated y-values (rates) for new x-values that are not explicitly present in the original data. 

I then differentiate the calls between ITM and OTM. 
ITM:
  - Call: strike price  < current price
  - Put: strike price > current price

OTM:
  - Call: strike price > current price
  - Put: strike price < current price

Calculate mid-price by adding the best bid and best offer price and dividing it by 2. 

Calculate days from expiry for each SPX and SPY column. 

Calculate rates by interpolating using zero rates from 20201201. 

Calculate forward price at expiry: spx_underlying * np.power(np.e, ((df_spx["r"]) * (df_spx["T"]))) 

Calculate implied volatility for OTM only. 


<h2 class="toc_title">SABR Model Calibration</h2>

We calibrate the SABR Model Parameters by designing it to find the optimal parameters α, ρ, and 𝜈 of the SABR model that minimize the squared differences between the model-implied volatilities and observed market volatilities for a given set of strikes. 

The SABR function calculates the implied volatility given the forward price, strike price, time to maturity, and the SABR model parameters. 


<h2 class="toc_title">Static Calibration for Exotic Options</h2>

With a set expiry, time to maturity, and rates, along with the calibration volatility from the SABR model, we use these parameters to feed into derivative pricing models such as Black Scholes and Bachelier. 

Black Scholes
- The analytical price is 38.5955
- Monte Carlo: 37.7064 ± 0.0024 (95% CI)
- p-value = 0
- Implications: The large difference and the low p-value in the Black-Scholes model suggest that there may be some model misfit or that the assumptions of the Black-Scholes model might not hold for this particular exotic payoff. The significant statistical difference indicates that the calibrated model may not be adequately capturing the dynamics needed to accurately price this exotic option.

Bachelier
- Analytical Price: 37.7144
- Monte Carlo: 37.7040 ± 0.0024 (95% CI)
- P-value: 0.4552
- Implication: The small difference and high p-value in the Bachelier model suggest that this model fits the pricing data well. The results indicate that the Bachelier model, which assumes a normal distribution of the underlying asset rather than a log-normal distribution, maybe more accurate for this specific exotic option's payoff.

Static Replication Price (using market data)
Payoff - 36.8650


<h2 class="toc_title">Arbitrage Opportunities</h2>
I use the butterfly test to check for potential arbitrage opportunities. This strategy involves buying and selling options at 3 different strike prices, aiming to profit from minimal price movement in the underlying asset. 

The script calculates a negative butterfly value which indicates a potential arbitrage opportunity. With a hypothetical value of 100 contract, the profit comes out to be approximately $30,000. 

<h2 class="toc_title">Dynamic Replication</h2>



<h3 class="toc_title">Technologies Used</h3>
<ul>
  <li><strong>Programming Languages:</strong> Python</li>
  <li><strong>Libraries and Tools:</strong> Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn, Tensorflow</li>
  <li><strong>Financial Analysis Tools:</strong> Arima, LSTM, XGBoost, Gradient Boosting, K-Nearest Neighbors (KNN), Mean Reversion</li>
</ul>

<h3 class="toc_title">Feature Engineering Used</h3>
<ul>
  <li><strong>Relative Strength Index (RSI):</strong> Calculated periods of 10, 30, 60, and 200 to gauge the momentum.</li>
  <li><strong>Exponential Weighted Moving (EWM) Crossovers:</strong> Includes combinations like 10/30, 10/60, and 30/60 to identify potential buy or sell signals.</li>
  <li><strong>Exponential Weighted Volatility:</strong> Measured for 10/30, 10/60, and 30/60 periods to assess market risk.</li>
  <li><strong>Simple Moving Average (SMA):</strong> Periods of 21, 63, and 252 help smooth out price data and identify trends.</li>
</ul>

<h2 class="toc_title">Predictive Modeling</h2>
<p>The project includes several models to predict the direction of the SPY500 based on its returns:</p>
<ul>
  <li><strong>Direction Determination:</strong> The target variable 'Direction' is derived from the returns (log difference of adjusted close prices shifted by -5 days). A positive return sets the direction to 1 (up), and a negative return sets it to 0 (down).</li>
</ul>

<h2 class="toc_title">Modeling Strategies</h2>
<h3 class="toc_title">Ensemble Model</h3>
<p>This strategy combines the strengths of three machine learning algorithms—XGBoost, Gradient Boosting, and K-Nearest Neighbors (KNN). I utilize 70% of the data for training and applied K-Fold Cross Validation to ensure the models generalize well on unseen data. XGBoost, Gradient Boosting, KNN achieved a mean accuracy of 0.6026, 0.6017, and 0.6197 respectively.</p>
<p>I aggregate the predictions from each model to form an 'ensembled' score for each instance. If the cumulative score from all models exceeds 1, we predict the market direction as 1 (positive trend), otherwise, it is 0 (negative trend).</p>
<p>I multiply the ensemble predictions by the daily returns to calculate the strategy's performance. By applying the exponential function to the cumulative sum of the returns adjusted by our model's prediction, I derive the growth of a hypothetical investment over time under each strategy.</p>

<h3 class="toc_title">LSTM Model</h3>
<p>With the next strategy, I utilize a Long Short-Term Memory (LSTM) neural network to predict stock returns using a walk-forward validation approach with a sequence length of 2 days. The network consists of 2 layers with 100 and 50 neurons respectively. The LSTM model then outputs a forecast of daily returns, which we use to determine trading positions. The positions are then multiplied with the predicted returns which they are cumulatively summed and exponentiated to calculate strategy returns.</p>

<h3 class="toc_title">Mean Reversion</h3>
<p>Lastly, we examine the results for a Mean Reversion strategy. This strategy is based on the premise that prices and returns eventually move back towards the average. This model leverages Simple Moving Averages (SMA) to identify potential buy or sell opportunities when prices deviate significantly from their historical averages.</p>
<p>I use the SMA_21 and SMA_63 as short-term and medium-term moving averages, respectively, to gauge market trends and potential mean-reverting points. If SMA_21 is less than SMA_63, it suggests a potential upward mean reversion (signal set to 1), otherwise a downward reversion (signal set to -1). We then compute the strategy returns by multiplying the positions and the generated signals. To examine the overall strategy performance over time, I calculate the cumulative returns of this strategy by applying the exponential function to the cumulative sum of the strategy's daily returns.</p>

<h2 class="toc_title">Results</h2>
<p>The best-performing strategy is the ensemble model. By multiplying the last value of the ensembled model's cumulative returns, it resulted in a portfolio value of $2,762,969 from an initial investment of $500,000.</p>
<ul>
    <li>Maximum Drawdown: 13.84%</li>
    <li>Longest Drawdown Period: 463 days</li>
    <li>Sharpe Ratio: 3.92</li>
    <li>Compound Annual Growth Rate: 37.60%</li>
</ul>

<p>The second-best model was the LSTM model. The strategy resulted in a final value of $994,000.</p>
<ul>
    <li>Maximum Drawdown: 29.68%</li>
    <li>Longest Drawdown period: 392 days</li>
    <li>Sharpe Ratio: 1.54</li>
    <li>Compound Annual Growth Rate: 13.69%</li>
</ul>

<p>The third-best model was the Mean Reversion strategy. The mean reversion strategy concluded with a portfolio value of $539,734.</p>
<ul>
    <li>Maximum Drawdown: 47.64%</li>
    <li>Longest Drawdown period: 659 days</li>
    <li>Sharpe Ratio: 0.057</li>
    <li>Compound Annual Growth Rate: 1.44%</li>
</ul>


  
 

![Graph](/assets/img/4.1.png "Graph")

![Graph](/assets/img/4.2.png "Graph")


















