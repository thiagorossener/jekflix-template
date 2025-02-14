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
<h2 class="toc_title">Analytical Option Formulas Used</h2>
<h3>Black Scholes</h3>
<h3>Bachelier</h3>
<h3>Implied Volatility</h3>
<h3>Interpolation Function</h3>
<p><strong>Functionality:</strong> This function calculates the at-the-money (ATM) implied volatility based on the volatilities of out-of-the-money (OTM) call and put options. It uses a weighted average where the weights are determined by the distance of the underlying asset's price from the strike prices of the put and call options. The function adjusts the put's volatility by the proportional difference between the call's and put's volatilities, performing a linear interpolation based on where the underlying asset's price is situated relative to the two strike prices.</p>
<h3>Static Replication</h3>
<p><strong>Approach:</strong> Static replication involves using a portfolio of simpler financial instruments, such as standard options, whose combined value replicates the payoff of more complex or exotic derivatives. It is a valuation method that does not rely on dynamic trading strategies but rather on creating a replicating portfolio at a single point in time using available market instruments.</p>
 


<h2 class="toc_title">Section 1: Data Preparation and Initial Calculations</h2>
<p>This project harnesses options data from SPX (S&P 500 index options) and SPY (SPDR S&P 500 ETF Trust options), along with yield rates from the zero curve, to perform various analyses and calculations. The initial stage of this project involves preparing and calculating key metrics that set the foundation for more complex analysis in later stages. Here are the detailed steps undertaken:</p>

<ul>
    <li><strong>Differential Analysis:</strong> Identified the differenced call and put options between in-the-money (ITM) and out-of-the-money (OTM) positions, enhancing the focus on more relevant market behaviors.</li>
    <li><strong>Mid-Price Calculation:</strong> Calculated the mid-price for each option by averaging the best bid and the best offer. This step ensures more accurate and stable pricing input for subsequent volatility calculations.</li>
    <li><strong>Rate Interpolation:</strong> Employed interpolation methods on zero rates to derive a smooth curve, facilitating more precise calculations of forward rates applicable over the options' lifespans.</li>
    <li><strong>Forward Price Computation:</strong> Determined forward prices using interpolated rates, essential for understanding the expected future prices of the underlying securities without the inclusion of carry costs such as dividends and storage.</li>
    <li><strong>Implied Volatility Estimation:</strong> Calculated the implied volatility exclusively for out-of-the-money (OTM) options to focus on options that are more sensitive to market movements, providing deeper insights into market expectations and sentiment.</li>
</ul>


<h2 class="toc_title">Section 2: SABR Model Calibration</h2>
This section of the project focuses on calibrating the Stochastic Alpha, Beta, Rho (SABR) model. It is particularly useful in the pricing of derivatives, as it accounts for the dynamic volatility smile -- a common phenomenon where implied volatility differs for options with different strikes or maturities. 

Script Functionality:
- Implied Volatility Calculation: The script begins by defining a function to calculate implied volatilities from market prices of options. This is essential for calibrating the SABR model as it requires a benchmark against market data.
- SABR Model Function: This defines the SABR model's formula to calculate implied volatility given parameters alpha, beta, rho, and nu, along with forward price F and strike price K.
- Calibration Process: Utilizes the least_squares method to fit the SABR model parameters to observed market data by minimizing the difference between the modeled and observed implied volatilities. This fitting process adjusts alpha, rho, and nu to closely align the model with market behaviors.
  


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



















