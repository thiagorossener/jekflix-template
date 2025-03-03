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
7. Optimized alpha vector analysis


In this context, we have used different source of data provided from Sharadar and IFT as described below:
- Sharadar Equity Prices (SHARADAR/SEP): Updated daily EOD price data for more than 14,000 US public companies.
- Indicator Descriptions (SHARADAR/INDICATORS): Description of indicators listed in SF1 table for more than 14,000 US public companies.
- Tickers and Metadata (SHARADAR/TICKERS): Information and metadata for more than 14,000 US public companies.
- Core US Fundamentals (SHARADAR/SF1): 150 essential fundamental indicators and financial ratios, for more than 14,000 US public companies.
- Daily Metrics (SHARADAR/DAILY): 5 essential metrics indicators and financial ratios daily updated, for more than 14,000 US public companies.
- Sentiment Analysis and News Analytics (IFT/NSA): News, blogs, social media and proprietary sources for thousands of stocks. 


<h3 class="toc_title">1 - Parameters</h3>
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
        Selected
      </td>
      <td>Market Cap = Close * Volume <br>
        Filtered by: Top Liquid (800) <br>
        Smoothed over: 120 Days</td>
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


<h3 class="toc_title">2 - Universe Data Collection</h3>

<h4 class="toc_title">2 - 1: Benchmarking</h4>

The S&P 500 Index (Ticker: ^GSPC) is used as the benchmark to evaluate the performance of our trading strategy. 
- Purpose: To measure the alpha generated by the model relative to the market
- Metrics: Daily percentage change in closing prices

<h4 class="toc_title">2 - 2: Fundamental Data</h4>

SHARADAR/SF1 data is utilized for historical fundamental analysis, including:

- Source: Quandl (SHARADAR/SF1)
- Timeframe: Most Recent Quarter (MRQ)

<h4 class="toc_title">2 - 3: Daily Metrics</h4>

SHARADAR/DAILY data provides daily metrics for further factor analysis, including:

- OHLCV (Open, High, Low, Close, Volume)
- Daily Financial Ratios: Market Capitalization, EV/EBITDA, Price-to-Earnings (P/E), and more.


<h4 class="toc_title">2 - 4: Sentiment Analysis</h4>
IFT/NSA data is integrated to gauge market sentiment from:

- Sources: News, blogs, social media, and proprietary indicators.
- Metrics:
  - Overnight Sentiment (60 days)
  - Directional Movement (100 days)
 
This sentiment data is leveraged to capture market psychology, enhancing alpha generation by anticipating potential market movements.


<h3 class="toc_title">3 - Alpha Factors</h3>

Factor-driven alpha investment strategies, designed to delivering market-beating returns, come in a number of different forms. In this project, the following alpha factors are disccused:
1. **Daily Metrics** - Captures short-term price movements using daily financial ratios and market data.
2. **Simple Moving Average (SMA)** - Identifies trends by averaging closing prices over specified periods.
3. **Overnight Sentiment** - Analyzes sentiment from news and social media to anticipate market momentum.
4. **Mean Reversion** - Detects price extremes to capitalize on the tendency of prices to revert to the mean.
5. **Directional Movement** - Measures the strength and direction of price movements.
6. **Sentiment Analysis** - Incorporates broader market sentiment to enhance predictive accuracy.
7. **Volatility** - Assesses price fluctuations to adjust risk and position sizing.
8. **CAPM (Capital Asset Pricing Model)**: Evaluates systematic risk to adjust returns based on market movements.
9. **Fundamentals**: Integrates financial health indicators like Return on Equity (ROE) and Return on Assets (ROA)



<h3 class="toc_title">4 - All Factors Analysis</h3>

Now we have processed and regrouped factor data, we are ready to analyze the factor one by one to see if they have the potential to be combined or not.



<h4 class="toc_title">4 - 1: Cumulated factor return</h4>

With all factor scores calculated per asset, we compute the future returns for the specified periods (10), which are the returns that we would receive for holding each factor value for the specified number of days. Forward returns helps us understand how the asset's price changes over time and how well a factor predicts future returns. 
- The forward return for each asset over 10 days is calculated using the percentage change formula on the asset's price. This is done by comparing the price at the current date to the price 10 days later. Since we want to know today what the return will be over the next 10 days, we shift the date at the start of the 10 days, effectively treating the return as "forward-looking" from that date.

We then calculate the cumulated factor returns by computing the forward returns for each asset over the specified holding period. 

<h4 class="toc_title">4 - 2: Quantile analysis</h4>

Once we have the forward returns, we categorize each asset into quantiles based on its factor score. The idea is to group assets into performance buckets (e.g high vs low momentums stocks) and analyze how these groups perform over time. 

<h4 class="toc_title">4 - 3: Sharpe ratio</h4>

We then calculate the Sharpe Ratio used to evaluate an investment strategy's risk-adjusted return.
By computing the mean of the factor returns multiplied by the annualization factor and divided by the standard deviation, we get the risk-adjusted return.  

![Screenshot 2025-03-03 at 8 39 52 AM](https://github.com/user-attachments/assets/e9b3aa5f-04ae-4a2f-a654-08f98a6f6dc5)

As you can see from the table above, factors such as channels100days, direction100days, and capm 10 days as well as other factors provide strong excess returns per unit of risk while daily_pb100days, or sma200 performs poorly, which indicates that this factor may not be useful in this strategy. 


<h3 class="toc_title">5 - Combined Factors</h3>

According to the Sharpe Ratio, we then combine a selected list of factors that..... We then compute the feature importance using an XGBoost model which helps rank how important each factor is for predicting the asset returns and help adjust each factor by its relative importance. 

We then multiply the factor values by their respective feature importance score. This helps scaling the factor according to its importance, ensuring that more significant factors contribute more to the final composite score. We then sum all of the weighted factors for each asset and date and name it alpha factor. This vector represents the combined impact of all selected factors on the asset's predicted performance. The weighted metric is then able to be used for asset selection, risk management, or prediction of asset performance. 

<h3 class="toc_title">6 - Optimized Alpha Vector Portfolio Analysis</h3>

With the optimized alpha vector, we simulate the performance of a portfolio built using the factor values as asset weights. Since quantiles 1 and 5 are most predictive, we simulate a portfolio where only those quantiles are traded. 

After backtesting the result, we obtained an annual return of 4.1% and a Sharpe Ratio of 3.54, achieving 0.92 stability and a max drawdown of -1.1%. 

![Screenshot 2025-03-03 at 8 57 38 AM](https://github.com/user-attachments/assets/17dce66c-8015-46d1-82be-06bca47d5a77)



<h3 class="toc_title">7 - Risk Analysis</h3>

![Screenshot 2025-03-03 at 9 08 20 AM](https://github.com/user-attachments/assets/cd962cb5-763a-4575-9e2f-8d54c9fb13a0)

Most importantly, we conduct a risk analysis on our portfolio. The predicted risk for our portfolio is 8.4%. 
