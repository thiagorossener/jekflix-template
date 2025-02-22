---
date: 2023-12-20 12:26:40
layout: post
title: "Alpha Generation"
subtitle: "Quantitative Edge: Building Alpha-Generating Trading Systems"
description: "Quantitative Edge: Building Alpha-Generating Trading Systems"
image: /assets/img/alpha.png
optimized_image: /assets/img/alpha.png
category: Quantitative Trading
tags:
  - Factor Analysis
  - Backtesting
  - Risk Analysis
  - Portfolio Optimization
author: Rachael
---

In this project, I dove into a deep exploration of quantitative trading strategies with a primary focus on alpha generation. The core of the project was to contrust a robust trading system that leverages advanced statistical models and machine learning techniques to uncover and exploit predictive signals in financial markets. This involved defininig a liquid universe of stocks, performinig intrincate factor analysis, and employing optimization algorithms to refine the trading strategies. 

The project workflow is comprised of these distinct stages:
1. Parameters
2. Universe definition
3. Sector definition
4. Alpha factors
5. Factor analysis
6. Factors combination
7. Risk analysis for equal weights
8. Integraing factor data to the optimizer
9. Optimized alpha vector analysis
10. Prediction portfolio

In this context, we have used different source of data provided from Sharadar and IFT as described below:
- Sharadar Equity Prices (SHARADAR/SEP): Updated daily EOD price data for more than 14,000 US public companies.
- Indicator Descriptions (SHARADAR/INDICATORS): Description of indicators listed in SF1 table for more than 14,000 US public companies.
- Tickers and Metadata (SHARADAR/TICKERS): Information and metadata for more than 14,000 US public companies.
- Core US Fundamentals (SHARADAR/SF1): 150 essential fundamental indicators and financial ratios, for more than 14,000 US public companies.
- Daily Metrics (SHARADAR/DAILY): 5 essential metrics indicators and financial ratios daily updated, for more than 14,000 US public companies.
- Sentiment Analysis and News Analytics (IFT/NSA): News, blogs, social media and proprietary sources for thousands of stocks. 


<h3 class="toc_title">1 - Parameters Overview</h3>
<table class="parameter-table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Parameter</th>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <!-- Time Series Data -->
    <tr>
      <td rowspan="2">Time Series Data</td>
      <td>SF1/SHARADAR</td>
      <td>Historical fundamental data</td>
      <td>4 years</td>
    </tr>
    <tr>
      <td>SEP/DAILY/SHARADAR, IFT/NSA</td>
      <td>End-of-Day (EOD) pricing and sentiment data</td>
      <td>3 years</td>
    </tr>
    
    <!-- Universe Selection -->
    <tr>
      <td rowspan="4">Universe Selection</td>
      <td>Market Cap</td>
      <td>Stock selection by size</td>
      <td>Mega, Large, Mid</td>
    </tr>
    <tr>
      <td>Exchange</td>
      <td>Stock listing exchange</td>
      <td>NYSE, NASDAQ, BATS</td>
    </tr>
    <tr>
      <td>Currency</td>
      <td>Denominated currency</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Delisted</td>
      <td>Exclude delisted stocks</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Dollar Volume Universe</td>
      <td>Selects liquid stocks</td>
      <td>
        Market Cap = Close * Volume <br>
        Filtered by: Top Liquid (800) <br>
        Smoothed over: 120 Days
      </td>
      <td>Selected</td>
    </tr>

    
    <!-- Trading Volume and Liquidity -->
    <tr>
      <td rowspan="2">Trading Volume & Liquidity</td>
      <td>Filteration Number</td>
      <td>Number of liquid securities</td>
      <td>800</td>
    </tr>
    <tr>
      <td>Smoothing Universe Period</td>
      <td>Moving average window to smooth trading volume</td>
      <td>120 days</td>
    </tr>
    
    <!-- Pipeline Parameters -->
    <tr>
      <td rowspan="11">Pipeline Parameters</td>
      <td>smoothed_value</td>
      <td>Moving average to reduce noise in factor data</td>
      <td>5</td>
    </tr>
    <tr>
      <td>fundamental_in</td>
      <td>Fundamental indicators used</td>
      <td>[‘ncf’]</td>
    </tr>
    <tr>
      <td>momentum_in</td>
      <td>Momentum calculation window</td>
      <td>{‘momentum_252d’: 252}</td>
    </tr>
    <tr>
      <td>sma_in</td>
      <td>Simple Moving Average period</td>
      <td>{‘sma200’: 200}</td>
    </tr>
    <tr>
      <td>daily_in</td>
      <td>Daily metrics for valuation</td>
      <td>{‘marketcap’: 120, ‘evebitda’: 100, ‘ps’: 100, ‘pe’: 100, ‘pb’: 100}</td>
    </tr>
    <tr>
      <td>over_in</td>
      <td>Overnight sentiment period</td>
      <td>{‘overnight_sentiment_60d’: 60}</td>
    </tr>
    <tr>
      <td>direction_in</td>
      <td>Directional movement period</td>
      <td>{‘direction_100d’: 100}</td>
    </tr>
    <tr>
      <td>sent_in</td>
      <td>Sentiment analysis window</td>
      <td>{‘sentiment_10d’: 10, ‘sentiment_60d’: 60}</td>
    </tr>
    <tr>
      <td>vol_in</td>
      <td>Volatility calculation window</td>
      <td>{‘volatility_5d’: 5, ‘volatility_20d’: 20}</td>
    </tr>
    <tr>
      <td>capm_in</td>
      <td>CAPM beta estimation periods</td>
      <td>{‘capm_60d’: 60, ‘capm_20d’: 20, ‘capm_10d’: 10, ‘capm_5d’: 5}</td>
    </tr>
    <tr>
      <td>channels_in</td>
      <td>Price channel breakout periods</td>
      <td>{‘chan_60d’: 60, ‘chan_100d’: 100}</td>
    </tr>

    <!-- Factor Analysis -->
    <tr>
      <td rowspan="2">Factor Analysis</td>
      <td>Combined Periods</td>
      <td>Forward return time frames</td>
      <td>(5, 10, 20)</td>
    </tr>
    <tr>
      <td>Rebalance Period</td>
      <td>Frequency of portfolio rebalancing</td>
      <td>10 days</td>
    </tr>
    
    <!-- Optimizer Parameters -->
    <tr>
      <td rowspan="6">Optimizer Parameters</td>
      <td>risk_cap</td>
      <td>Maximum risk exposure for the portfolio</td>
      <td>0.07</td>
    </tr>
    <tr>
      <td>lambda_reg</td>
      <td>Regularization parameter for the optimizer</td>
      <td>0.5</td>
    </tr>
    <tr>
      <td>factor_max</td>
      <td>Maximum limit for factor exposure</td>
      <td>10</td>
    </tr>
    <tr>
      <td>factor_min</td>
      <td>Minimum limit for factor exposure</td>
      <td>-10</td>
    </tr>
    <tr>
      <td>weights_max</td>
      <td>Maximum weight allocation per asset</td>
      <td>0.2</td>
    </tr>
    <tr>
      <td>weights_min</td>
      <td>Minimum weight allocation per asset</td>
      <td>-0.1</td>
    </tr>
    
    <!-- Quantiles -->
    <tr>
      <td rowspan="2">Quantiles</td>
      <td>Quantile Portions</td>
      <td>Number of quantiles for analysis</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Quantile to Analyze</td>
      <td>Focus on extremes for alpha generation</td>
      <td>1, 10</td>
    </tr>
  </tbody>
</table>





<h3 class="toc_title">Results</h3>

The trained model predicts prices for various option types including all samples, in-the-money, out-of-the-money, at-the-money, and across different maturities: short, medium, and long. 

![Screenshot 2025-02-15 at 2 53 25 PM](https://github.com/user-attachments/assets/6c368272-f972-4689-8dd9-4aaa729ae335)

The table above displays a performance comparison of the BS and ANN models against market prices on the test dataset, detailing variations by option moneyness and time-to-maturity. 

As you can see, **the difference between the performance measures of BS and ANN is generally small, showing a similar performance**. In fact, from the results table, **the ANN model performs relatively better for ATM, OTM, and Long Maturity cases.**

![Screenshot 2025-02-15 at 2 58 21 PM](https://github.com/user-attachments/assets/78acf443-bf84-4ba3-86d7-1624aac60584)

Figure 1 and 2 above shows the graphical representation of the entire test dataset results where the predicted price is plotted as a function of the actual price. 

Typically for the best results is a diagonal linear line, where the actual price equals the predicted price as the unit increases. The variance of the prediction price of the BS model is relatively larger than that of the ANN models. However, while the ANN predicts well from unit 0 to 1, the predicted price converges to 1 after unit 1. 

![Screenshot 2025-02-15 at 3 01 21 PM](https://github.com/user-attachments/assets/1444b7e2-eba2-4217-a336-9c57b0adeb7c)

We further investigate the dataset and observe that in Figure 3, the market option price/strike price (C/X) distribution in the dataset, the majority of the observations have C/X <1. 

Therefore, since the ANN is a data-driven model, the model would learn the features associated with the most common type of data in the dataset. And it can be argued that the mispricing is due to data limitations. 

![Screenshot 2025-02-15 at 3 03 37 PM](https://github.com/user-attachments/assets/05f76006-db4d-4a86-8488-0b2f77adf7fa)

Furthermore, we investigate the pricing performance by moneyness and maturity. Figure 4 above shows the pricing error as a function of moneyness. The red horizontal line divides the ITM options (above) from the OTM options (below).
**For the BS model, the dispersion on the left side of the mean is bigger in magnitude compared to the ANN model. Hence, **the options tend to be more underpriced by the BS model than the ANN model****. 
  - This means that the residuals (differences between observed and model-predicted prices) in the BS model are more negatively skewed in prediction errors. This means that there are more instances where the model's predictions exceed the actual prices than the instances where the predictions are below the actual prices. This indicates that the BS model frequently predicts higher values than the actual market prices of the options -- hence, options appear to be underpriced by the model.

    
![Screenshot 2025-02-15 at 3 11 12 PM](https://github.com/user-attachments/assets/3cdde6f4-d6c3-4a3f-bb58-7f0a92852044)
Figure 5 above shows the model's pricing errors as a function of time-to-maturity. As you can see, the ANN pricing error is dented at 0, whereas the BS pricing error has a larger variance. 
- Long Maturity = T > 1/12
- Short Maturity = T < 1/12
- Medium Maturity = 1/12 < T < 1/12

For long maturity options, the ANN model outperforms the BS model as the dispersion of the BS of the left side of the mean is bigger in magnitude. In short maturity cases, the mispricing of the 2 models is similar.


<h2 class="toc_title">Delta Hedging Method</h2>

To replicate the option through delta hedging, we follow the method used by Hutchinson et al (1994). The main idea of the strategy is to set up a replicating portfolio _Vt_ that offsets the risk of an option position:
  
_Vt = Vt(S) + Vt(B) + Vt(C) 
_

where _Vt(S)_ is the value of the underlying asset position, _Vt(B)_ is the value of a bond position used to finance the position in the underlying asset, and _Vt(C)_ is the value of the option position held in the portfolio at time t. 

The portfolio composition at time t=0 is assumed to be: 

<ol>
    <li><math><mi>V</mi><sub><mn>0</mn></sub><mi>(C)</mi> = -<mi>C</mi><sub><mi>BSM</mi>, <mn>0</mn></sub></math></li>
    <li><math><mi>V</mi><sub><mn>0</mn></sub><mi>(S)</mi> = <mi>S</mi><sub><mn>0</mn></sub> <mi>&Delta;</mi><sub><mi>NN</mi>, <mn>0</mn></sub></math></li>
    <li><math><mi>V</mi><sub><mn>0</mn></sub><mi>(B)</mi> = -(<mi>V</mi><sub><mn>0</mn></sub><mi>(S)</mi> + <mi>V</mi><sub><mn>0</mn></sub><mi>(C)</mi>)</math></li>
    <li><math><mi>&Delta;</mi><sub><mi>NN</mi>, <mn>0</mn></sub> = <mfrac><mrow><mo>&part;</mo><mi>C</mi><sub><mi>NN</mi>, <mn>0</mn></sub></mrow><mrow><mo>&part;</mo><mi>S</mi><sub><mn>0</mn></sub></mrow></mfrac></math></li>
</ol>

Equation 1: It represents the initial value of a call option (C) at time -, where C(BSM) is the Black Scholes price of the call option.

Equation 2: It represents the initial value of the stock position and the delta of the neural network model at time 0. 

Equation 3: This represents the initial value of the bond position needed to offset the positions in the stock and call option, ensuring the initial investment is delta-neutral. 

Equation 4: This shows how to calculate the delta for the neural network model, which is the rate of change of the neural network's options price with respect to changes in the stock price. 



<h3 class="toc_title">Delta Hedging Strategy</h3>

The strategy consists of shorting 1 call option, longing for the underlying asset for a change in the number of shares at price S0, and shorting for a bond to finance the rest of the long position in the underlying asset that is not financed with the sale of the call option. 

The initial value of the replicating portfolio is 0 since the long position is financed entirely with riskless borrowing and the sale of the call option. 

<p><math><mi>V</mi><sub><mn>0</mn></sub> = <mi>V</mi><sub><mn>0</mn></sub><mi>(S)</mi> + <mi>V</mi><sub><mn>0</mn></sub><mi>(C)</mi> + <mi>V</mi><sub><mn>0</mn></sub><mi>(B)</mi> = <mn>0</mn></math></p>


Between the initialization of V at time t=0 and the expiration at T, at all time T-t, the spot and bond positions are rebalanced daily so that:

<p><math><mi>V</mi><mi>t</mi><mi>(S)</mi> = <mi>S</mi><mi>t</mi><mi>&Delta;</mi><sub><mi>NN</mi>, <mi>t</mi></sub> where <mi>&Delta;</mi><sub><mi>NN</mi>, <mi>t</mi></sub> = <mfrac><mrow><mo>&part;</mo><mi>C</mi><sub><mi>NN</mi>, <mi>t</mi></sub></mrow><mrow><mo>&part;</mo><mi>S</mi><sub><mi>t</mi></sub></mrow></mfrac></math></p>

<p><math><mi>V</mi><mi>t</mi><mi>(B)</mi> = <mi>e</mi><sup><mi>r</mi><mi>T</mi><mi>v</mi><sub><mi>t</mi></sub></sup><mi>V</mi><sub><mi>t</mi>-<mi>r</mi></sub><mi>(B)</mi> - <mi>S</mi><mi>t</mi>(<mi>&Delta;</mi><sub><mi>NN</mi>, <mi>t</mi></sub> - <mi>&Delta;</mi><sub><mi>NN</mi>, <mi>t</mi>-<mi>r</mi></sub>) where t is defined to be 1 day in this paper</math></p>

To calculate the delta of the neural network for the call option, after training using the ANN, we could derive the optimal weights on the input features and hence in principle, be able to derive the partial derivative of the ANN predicted price with respect to the features. 

Using a bootstrap method, we resample the observations grouped by option ID, constructing resampled prices in chronological order. Through the extraction of built-in keras's gradient, the _V(T)_ is further calculated to observe the V(T) in the long run, and it would be comparable to the _V(T)_ of Black Scholes. 


<h3 class="toc_title">Delta Hedging Performance Measures</h3>

1. Tracking Error: This error is calculated at the expiration date and is defined as the sum of the values of the spot, bond, and call option components in the replicating portfolio. 
2. Present Value of Expected Absolute Tracking Error: It is calculated by discounting the expected absolute value of the tracking error using the risk-free rate over the period until expiration. 
3. Prediction Error: This error measures the uncertainty or variability of the tracking error and is calculated by discounting the sum of the expected squared value of the tracking error and its variance, using the risk-free rate over the period until expiration.

<h3 class="toc_title">Delta Hedging Results</h3>
  
The hedging performance obtained from the bootstrapping consists of a comparison between the delta-hedge analysis for the BS model and the ANN model. This comparison is developed on the test set considering only the options contracts that have over 10 days of observations in the test set. 


![Screenshot 2025-02-15 at 3 46 26 PM](https://github.com/user-attachments/assets/7c2ffcc4-478d-45e7-a3a4-453e0665a432)

![Screenshot 2025-02-15 at 3 47 01 PM](https://github.com/user-attachments/assets/76ab41a7-55ff-4ee2-bcad-798ef85430ee)

Based on the error comparison shown in the above table, the ANN model and the BS formula have similar performance. 

![Screenshot 2025-02-15 at 3 47 38 PM](https://github.com/user-attachments/assets/fe992e4e-db08-48e3-856a-a6a4a17bac7a)


A two-tailed paired t-test is performed to test the null vs alternative hypothesis. 

Null: There is no significant difference in the expected errors of the ANN and BS models, implying that both models perform equally well. 

Alternative: There is a significant difference in the expected errors of the ANN and BS models, suggesting that one model outperformed the other.

Based on the findings from the statistical test shown, as the p-value is greater than the significance level, we conclude that there is not enough statistical evidence to reject the null hypothesis. Hence, **there is no significant difference in the performance of the ANN and BS models and similar hedging performance is obtained.** 













