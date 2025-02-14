---
date: 2023-12-20 12:26:40
layout: post
title: Advanced Options Valuation
subtitle: 
description: 
image:/assets/img/exoticoptions.webp
optimized_image: /assets/img/exoticoptions.webp
category: 
tags:
  - Stock
  - Finance
author: Rachael
---
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<h2>Black-Scholes Formula</h2>
<p>The Black-Scholes formula provides a theoretical estimate of the price of European-style options:</p>
<p>\[ C(S, t) = N(d_1)S - N(d_2)Ke^{-r(T-t)} \]</p>
<p>Where:</p>
<ul>
    <li>\( d_1 = \frac{\ln(\frac{S}{K}) + (r + \frac{\sigma^2}{2})(T-t)}{\sigma\sqrt{T-t}} \)</li>
    <li>\( d_2 = d_1 - \sigma\sqrt{T-t} \)</li>
    <li>\( N \) is the cumulative distribution function of the standard normal distribution.</li>
</ul>

<h2>Bachelier Model</h2>
<p>Unlike the Black-Scholes model, the Bachelier model assumes that the underlying asset prices follow a normal distribution rather than a log-normal distribution:</p>
<p>\[ C(S, t) = (S-K)N(d) + \sigma\sqrt{T-t}n(d) \]</p>
<p>Where \( d = \frac{S-K}{\sigma\sqrt{T-t}} \) and \( n \) is the standard normal probability density function.</p>

<h2>Implied Volatility</h2>
<p>Implied volatility is derived from the market price of a European call or put option and represents the volatility implied by the market price, assuming the Black-Scholes model holds:</p>
<p>\[ \sigma_{imp} = \sqrt{\frac{2\pi}{T}}\frac{C}{S} \]</p>

<h2>Interpolation Function</h2>
<p>This function calculates the at-the-money (ATM) implied volatility based on the volatilities of out-of-the-money (OTM) call and put options. It uses a weighted average where the weights are determined by the distance of the underlying asset's price from the strike prices of the put and call options:</p>
<p>\[ \sigma_{ATM} = w_c \sigma_c + (1 - w_c) \sigma_p \]</p>
<p>Where \( w_c \) is the weight for the call's volatility \( \sigma_c \), and \( \sigma_p \) is the put's volatility adjusted by the proportional difference.</p>
 




<h2 class="toc_title">Section 1: Data Preparation and Initial Calculations</h2>
<p>This project harnesses options data from SPX (S&P 500 index options) and SPY (SPDR S&P 500 ETF Trust options), along with yield rates from the zero curve, to perform various analyses and calculations. The initial stage of this project involves preparing and calculating key metrics that set the foundation for more complex analysis in later stages. Here are the detailed steps undertaken:</p>

<ul>
    <li><strong>Differential Analysis:</strong> Identified the differenced call and put options between in-the-money (ITM) and out-of-the-money (OTM) positions, enhancing the focus on more relevant market behaviors.</li>
    <li><strong>Mid-Price Calculation:</strong> Calculated the mid-price for each option by averaging the best bid and the best offer. This step ensures more accurate and stable pricing input for subsequent volatility calculations.</li>
    <li><strong>Rate Interpolation:</strong> Employed interpolation methods on zero rates to derive a smooth curve.</li>
    <li><strong>Forward Price Computation:</strong> Determined forward prices using interpolated rates, essential for understanding the expected future prices of the underlying securities without the inclusion of carry costs such as dividends and storage.</li>
    <li><strong>Implied Volatility Estimation:</strong> Calculated the implied volatility exclusively for out-of-the-money (OTM) options to focus on options that are more sensitive to market movements.</li>
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

<h3>Rationale for Initial Parameter Guesses</h3>
<p>Initial guesses for the parameters are critical in calibrating the SABR model efficiently and accurately. Here's how and why these initial values are chosen:</p>

<ul>
    <li><strong>Beta (β) = 0.7:</strong> The beta parameter in the SABR model controls the elasticity of the volatility to the underlying asset price movements. A β of 0.7 is often chosen based on empirical evidence suggesting it provides a balance between proportional and logarithmic behavior of stock prices, reflecting how mid-cap stocks might behave.</li>
    <li><strong>Alpha (α) Guess:</strong> Alpha, representing the volatility of volatility, is initially guessed as the mean observed market volatility. This choice is rationalized by using the average volatility as a baseline, providing a middle ground from which adjustments can be made during the optimization process to fit the market data better.</li>
    <li><strong>Nu (ν) Guess:</strong> Nu, the volatility of the volatility factor, is initially set to one-fifth of the standard deviation of the observed market volatilities. This scaling down helps in starting the calibration from a conservative point, preventing overestimation of market turbulence.</li>
    <li><strong>Rho (ρ) Guess = 0.2:</strong> Rho, indicating the correlation between the asset price and its volatility, is initially guessed as 0.2, reflecting a mild positive correlation which is common in many markets but still conservative enough to allow for significant adjustments based on specific market characteristics.</li>
</ul>


![Screenshot 2025-02-13 at 9 38 25 PM](https://github.com/user-attachments/assets/26bc7c3c-a052-465a-8ca9-cc995abde8de)

The graphs above showcase the implied volatility smile for different expiry. As you can see, the market volatility for each expiry closely aligns with the SABR model volatility. 
Key Importance:
- This close alignment between the 2 volatilities indicates that the SABR model is effectively capturing the characteristics of the market's implied volatility across various strike prices. It proves that the SABR model parameters are well-calibrated to match the actual market behavior.
- The volatility smile, which shows higher volatilities for deep-in-the-money (ITM) and out-of-the-money (OTM) options compared to at-the-money (ATM) options, is well represented by the SABR model. This is crucial because capturing the curvature of the smile is essential for accurate option pricing, particularly for exotic options which may depend heavily on the shape of the implied volatility curve. 


<h2 class="toc_title">Section 3: Static Calibration for Exotic Option Pricing</h2>
This section explores the static replication approach to price exotic options, a method distinct from dynamic models like Black-Scholes or Bachelier. Static replication involves constructing a portfolio of standard options (calls and puts) that mimics the payoff profile of an exotic option. This technique leverages actual market data rather than relying on theoretical parameters such as volatility (sigma).

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

<h3>Results</h3>

<p><strong>Static Replication Price:</strong> 36.8650</p>
<p><strong>Black-Scholes Price:</strong> 38.5955</p>
<p><strong>Bachelier Price:</strong> 37.7144</p>


<h3>Arbitrage Opportunity Detection</h3>
<p> By employing a strategic butterfly spread test, my project delves into the nuanced realms of options trading. </p>

<img width="380" alt="Screenshot 2025-02-14 at 10 20 15 AM" src="https://github.com/user-attachments/assets/1abd022f-1951-493a-89c2-55db92117980" />

<p>From the result, a negative butterfly value suggests that buying the wings (K1 and K3) and selling tice the body (K2) of the butterfly fields a net debit from the position. This scenario points to an overpriced middle strike relative to the strikes on either side, thus revealing a mispricing in the market.</p>

<p>Setting up 1000 butterfly spreads across the different strike prices and conditions listed provides an approximate $30,000 in profit.</p>

<h2 class="toc_title">Section 4: Dynamic Replication</h2>

<p>This section focuses on simulating hedging errors in a Black-Scholes environment. The script evaluates the effectiveness of dynamic hedging by simulating the path of stock prices using Brownian motion and assessing the hedging performance over time.</p>

<p>Assume the following parameters: S0 = $100, σ = 0.2, r = 5%, T = 1/12 year and K = $100. By applying the Black Scholes model to simulate the stock price over one month, we explore how a short ATM call option position can be dynamically hedged using the different frequencies of adjusting the position in underlying stock and bond.</p>

<h3 class="toc_title">Hedging Frequency</h3>
<p>Assume there are 21 trading days over 1 month and we hedge <em>N</em> times during the life of the call options which expire in a month:</p>
<ul>
    <li><strong>N = 21:</strong> Hedge once every day</li>
    <li><strong>N = 84:</strong> Hedge four times every day</li>
</ul>


<p>By calculating the delta of the option and bond position, we measure the effectiveness of the hedging strategy by calculating the cumulative error between the hedged portfolio's value and the actual option payoff over time. This helps to identify any deviations from the ideal hedged position. We then run multiple simulations to generate a broad set of data on hedging errors across different scenarios to provide insights into the average performance and variability of the hedging strategy. We also calculate the Greeks—Delta, Gamma, Theta, and Vega—to analyze how sensitive the option's value is to changes in underlying factors such as stock price, volatility, and time decay.</p>


<img width="393" alt="Screenshot 2025-02-14 at 9 37 15 AM" src="https://github.com/user-attachments/assets/bc334db6-f2b1-4db6-9af7-a264f906521d" />

<p>From the result, we can see that with N=21 hedges during the life of the call options, the mean(hedging error) is slightly negative. However, the magnitude being very small indicates a relatively effective hedging strategy. However, with N=84, the hedging strategy is nearly perfect on average, which means a more effective hedging strategy. </p>

<p>The lower standard deviation for N=84 also suggests that the hedging strategy becomes more stable and consistent.</p>

<img width="1140" alt="Screenshot 2025-02-14 at 9 42 08 AM" src="https://github.com/user-attachments/assets/fd220721-25c3-4ab8-88e9-e24028084fd8" />



<h3 class="toc_title">Section 4i: Interpret Greek Surfaces</h3>


<img width="347" alt="Screenshot 2025-02-14 at 9 43 29 AM" src="https://github.com/user-attachments/assets/99f49126-6bf1-4562-84c9-57f724fb0ec5" />


<p>Delta measures the sensitivity of the option's price to a change in the price of the underlying asset. As you can see in the delta surface, the delta generally increases as the stock price approaches the strike price from below and tends to flatten out at 1.0 as the option goes deeper in the money (stock price > strike price). The higher delta values near 1 indicate the option's price will move almost one-for-one with the stock price, which is typical for deep-in-the-money calls. </p>


<img width="356" alt="Screenshot 2025-02-14 at 9 46 27 AM" src="https://github.com/user-attachments/assets/9e612f91-7bd0-4db0-921f-f9b647a79159" />

<p>Gamma measures the rate of change in delta with respect to changes in the underlying asset's price. This is the second derivative of the option price relative to the stock price. As you can see from the Gamma Surface graph, Gamma peaks as the options near the money (where the stock price is close to the strike price) and tends to be higher as the option approaches expiration. This is depicted by the spike seen in the graph. The spike in Gamma around the at-the-money (ATM) option as expiration approaches suggests heightened sensitivity; small changes in the stock price can lead to large changes in Delta. </p>


<img width="363" alt="Screenshot 2025-02-14 at 9 48 47 AM" src="https://github.com/user-attachments/assets/77db4132-966a-4ca4-992d-14c87329c0d2" />

<p>Theta measures the sensitivity of the option's price to the passage of time, also known as the "time decay" of the option. It generally has a negative value, indicating that the value of an option decreases as time progresses. As you can see from the Theta Surface Graph, there is a steep decline, especially as the option approaches expiration, which is typical since Theta decay tends to accelerate as the option nears its expiry date. </p>

<img width="347" alt="Screenshot 2025-02-14 at 9 51 02 AM" src="https://github.com/user-attachments/assets/077b1fe3-df78-4ccc-817d-c5232e761bfe" />

<p>Vega measures the sensitivity of the option's price to changes in the volatility of the underlying asset. It indicates the amount an option's price changes in response to a 1% change in the volatility of the underlying asset. As you can see from the Vega Surface graph, vega tends to be higher for options that are near the money and decreases as the option moves deeper into or out of the money. It also decreases as the option approaches expiration. The graph shows that Vega is particularly sensitive around at-the-money options, with sensitivity tapering off as the options move away from this point or as time to expiration decreases.</p> 



