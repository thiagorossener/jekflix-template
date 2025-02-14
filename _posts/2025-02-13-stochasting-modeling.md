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


<h2 class="toc_title">Section 3: Static Calibration for Exotic Option Pricing</h2>
This section focuses on employing a static replication approach to price exotic options. Static replication involves constructing a portfolio of standard options (calls and puts) to replicate the payoff of an exotic option. Unlike dynamic methods such as the Black-Scholes and Bachelier models, static replication does not directly depend on a volatility parameter (like the calibrated sigma) for its pricing mechanism.

<h3>Script Functionality and Methodology</h3>
<p>The script for static replication is structured to price an exotic option by aggregating contributions from different standard options available in the market. Here's a breakdown of the process:</p>
<ul>
    <li><strong>Filtering Market Data:</strong> The script selects options that expire on the same date as the exotic option to ensure consistency in the pricing period.</li>
    <li><strong>Calculating Time to Maturity:</strong> Determines how much time is left until the options expire, which is crucial for accurately assessing their value.</li>
    <li><strong>Interpolating Zero Rates:</strong> It uses a zero rate curve to interpolate the risk-free interest rates, providing a discount factor for the pricing model.</li>
    <li><strong>Pricing via Static Replication:</strong> Each strike from the market data contributes to the final price of the exotic option. This involves calculating the incremental prices of calls and puts at each strike and summing them to get the total price. The unique aspect here is the integration of the payoff's second derivative, which helps approximate the curvature of the payoff landscape more accurately.</li>
</ul>

<h3>Why Not Use Calibrated Sigma?</h3>
<p>Unlike Black-Scholes or Bachelier models, static replication does not compute prices based on theoretical forward volatilities or any other stochastic model parameters. Instead, it uses actual market prices of standard options to construct the payoff. This method is particularly useful when the market provides a rich set of option prices across various strikes, offering a more direct and possibly more accurate market reflection than model-based approaches that depend heavily on assumptions like constant volatility (sigma).</p>

<h3>Benefits of Static Calibration</h3>
<p>Static replication provides several benefits, including:</p>
<ul>
    <li><strong>Market-based Pricing:</strong> It leverages real market data, which can lead to more accurate pricing of exotic options especially in volatile or illiquid markets.</li>
    <li><strong>Reduction of Model Risk:</strong> By not relying on specific model parameters, it avoids the pitfalls of assumptions that might not hold true across different market conditions.</li>
    <li><strong>Transparency and Simplicity:</strong> The approach is straightforward and transparent, using observable market prices without the need for complex modeling.</li>
</ul> 

<h3>Resultsh3>
Static Replication Price: 36.8650
Black-Scholes Price: 38.5955
Bachelier Price: 37.7144


<h3>Arbitrage Opportunity Detection</h3>
<p> By employing a strategic butterfly spread test, my project delves into the nuanced realms of options trading. This test scrutinizes sets of three consecutive puts to uncover pricing inefficiencies that can be exploited for profit, bolstering our understanding of market dynamics and the potential for arbitrage.</p>
<p>The results from this segment of the script highlighted potential arbitrage opportunities that could yield significant returns. For instance, executing trades on identified spreads with a calculated negative butterfly value can lead to substantial profits, as demonstrated by a hypothetical scenario where trading 100 contracts could potentially result in a profit of approximately $30,000.</p>

<h2 class="toc_title">Dynamic Replication</h2>



















