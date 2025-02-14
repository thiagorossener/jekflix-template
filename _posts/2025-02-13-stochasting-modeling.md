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
- Black Scholes
- Bachelier
- Implied Volatility
- Interpolation Function  
  - This function calculates the at-the-money (ATM) implied volatility based on the volatilities of out-of-the-money (OTM) call and put options. It uses a weighted average where the weights are determined by the distance of the underlying asset's price from the strike prices of the put and call options. The function adjusts the put's volatility by the proportional difference between the call's and put's volatilities, performing a linear interpolation based on where the underlying asset's price is situated relative to the two strike prices. 
- Static Replication
  - Static replication involves using a portfolio of simpler financial instruments, such as standard options, whose combined value replicates the payoff of more complex or exotic derivatives. It is a valuation method that does not rely on dynamic trading strategies but rather on creating a replicating portfolio at a single point in time using available market instruments.

 


<h2 class="toc_title">Section 1: Data Preparation and Initial Calculations</h2>
<p>This project harnesses options data from SPX (S&P 500 index options) and SPY (SPDR S&P 500 ETF Trust options), along with yield rates from the zero curve, to perform various analyses and calculations. The initial stage of this project involves preparing and calculating key metrics that set the foundation for more complex analysis in later stages. Here are the detailed steps undertaken:</p>

<ul>
    <li><strong>Differential Analysis:</strong> Identified the differenced call and put options between in-the-money (ITM) and out-of-the-money (OTM) positions, enhancing the focus on more relevant market behaviors.</li>
    <li><strong>Mid-Price Calculation:</strong> Calculated the mid-price for each option by averaging the best bid and the best offer. This step ensures more accurate and stable pricing input for subsequent volatility calculations.</li>
    <li><strong>Rate Interpolation:</strong> Employed interpolation methods on zero rates to derive a smooth curve.</li>
    <li><strong>Forward Price Computation:</strong> Determined forward prices using interpolated rates, essential for understanding the expected future prices of the underlying securities without the inclusion of carry costs such as dividends and storage.</li>
    <li><strong>Implied Volatility Estimation:</strong> Calculated the implied volatility exclusively for out-of-the-money (OTM) options to focus on options that are more sensitive to market movements, providing deeper insights into market expectations and sentiment.</li>
</ul>


<h2 class="toc_title">Section 2: SABR Model Calibration</h2>
This section of the project focuses on calibrating the Stochastic Alpha, Beta, Rho (SABR) model. It is particularly useful in the pricing of derivatives, as it accounts for the dynamic volatility smile -- a common phenomenon where implied volatility differs for options with different strikes or maturities. 

<p>The calibration process involves adjusting the SABR model parameters to align the model's implied volatility with market observed volatilities. This alignment is crucial for ensuring that the model reflects true market dynamics and provides accurate pricing and risk assessments for financial instruments.</p>

<h3>Script Functionality Breakdown</h3>
<ul>
    <li><strong>sabrcalibration Function:</strong> This function is at the heart of the calibration process. It computes the total squared error between volatilities estimated by the SABR model and the actual market volatilities for a range of strikes. The goal is to minimize this error to achieve the best parameter fit.</li>
    <li><strong>impliedVolatility Function:</strong> This utility function computes the implied volatility for a given option by reversing the Black-Scholes formulas for calls and puts. It ensures that the model's input volatility matches the market scenarios as closely as possible.</li>
    <li><strong>SABR Function:</strong> It calculates the implied volatility using the SABR model's stochastic differential equations. This function takes into account the effects of alpha (volatility of volatility), beta (elasticity parameter), rho (correlation coefficient), and nu (volatility of the volatility factor), offering a detailed and dynamic volatility surface.</li>
    <li><strong>calculate_sabr_params Function:</strong> This function orchestrates the entire calibration by iterating over market data, applying the SABR model, and adjusting parameters to minimize discrepancies. It outputs calibrated parameters for each examined expiry.</li>
</ul>

![Screenshot 2025-02-13 at 9 38 25 PM](https://github.com/user-attachments/assets/26bc7c3c-a052-465a-8ca9-cc995abde8de)

The graphs above showcase the implied volatility smile for different expiry. As you can see, the market volatility for each expiry closely aligns with the SABR model volatility. 
Key Importance:
- This close alignment between the 2 volatilities indicates that the SABR model is effectively capturing the characteristics of the market's implied volatility across various strike prices. It proves that the SABR model parameters are well-calibrated to match the actual market behavior.
- The volatility smile, which shows higher volatilities for deep-in-the-money (ITM) and out-of-the-money (OTM) options compared to at-the-money (ATM) options, is well represented by the SABR model. This is crucial because capturing the curvature of the smile is essential for accurate option pricing, particularly for exotic options which may depend heavily on the shape of the implied volatility curve. 


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



















