---
date: 2024-11-20 12:26:40
layout: post
title: BTC Algorithmic Trading 
subtitle: 
description: 
image: /assets/img/bitcoin.jpeg
optimized_image: /assets/img/bitcoin.jpeg
category: Real-Time Crypto Trading Model
tags:
  - BTC
  - Algorithmic Trading
author: Rachael
---

<h2 class="toc_title">Introduction</h2>

This portfolio showcases my expertise in developing and implementing advanced data collection and modeling systems for cryptocurrency trading. My projects are primarily focused on the Binance testnet API, particularly for the BTC/USDT trading pair, demonstrating robust data handling, real-time processing, and predictive modeling techniques that support effective algorithmic trading strategies.


<h3 class="toc_title"> Automated Cryptocurrecy Order Book Data Collection</h3>

Let's break down each part:

1. The core of this setup revolves around 2 classes, Tier and Orderbook, which represent different price levels and manage arrays of buy and sell orders, respectively.
   - This class provides methods to access and manipulate order data, such as retrieving the best bid and ask, calculating the mid-price, and generating a detailed snapshot of the top n orders.
   - The parse function that converts a JSON response from an API into an OrderBook object, extracting and converting the relevant data into bids and asks, which are arrays of Tier objects.

2. Data Collection Function
  - This function automates the data collection process for every second. It continuously fetches the current order book snapshot, processes it into a pandas DataFrame, and logs it into CSV files batch-wise. Each batch file is uniquely named based on the date and a sequence number that resets daily, ensuring organized data storage.
    



<h3 class="toc_title">Modeling</h3>

1. The process begins by preparing the target variable (mid-price) and features, where the target is shifted to align future values with current observations and split into training and testing sets. 

2. To enhance model evaluation, the script calculates the deviation of predictions from observed values and filters out those within twice the normalized standard deviation (2*ML_std)
   - By setting a threshold of 2 * ML_std, the script filters out predictions that fall within this range, which under a normal distribution corresponds to about 95% of data points assuming minor fluctuations. This helps to emphasize statistically significant predictions. 


<h3 class="toc_title">Results</h3>

The LASSO algorithm produced a win rate of 63.934%. 

![Screenshot 2025-02-14 at 2 27 43 PM](https://github.com/user-attachments/assets/bb290642-8a93-4a50-afa0-5b365078859d)

While the majority of trading signals were statistically insignificant, the algorithm generated 15 critical trading signals: 5 suggested buying or covering a short position, and 10 indicated selling or initiating a short position. This distribution underscores the model's capability to identify key moments for potential market entry and exit, enhancing strategic trading decisions.


