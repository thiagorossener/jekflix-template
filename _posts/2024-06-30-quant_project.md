---
date: 2024-06-30 08:57:37
layout: post
title: "Portfolio Optimization"
subtitle: Brief overview of a personal project of mine
description: 
image: /assets/img/openai-whisper.jpg
optimized_image: /assets/img/openai-whisper.jpg
category: datascience
tags:
author:
paginate: 
---


> ##### Portfolio Management Simulation

This simulation demonstrates an investment strategy where a portfolio is managed actively to maintain a target allocation across various equities. It uses historical market data to simulate real-world trading conditions and adjusts the portfolio regularly to align with specified asset allocation goals. 

> ##### Key Components:
1. Asset Class:
 - Definition: Each asset in the portfolio, such as a stock, is characterized by its symbol, price, and type (e.g, equity or bond). 
 - Functionality: Assets can update their prices and calculate returns, providing dynamic interaction as market conditions change. 

2. Portfolio:
 - Initial Setup: Begins with a specified cash amount and a strategy for asset allocation. 
 - Operations: Includes capabilities to add or remove assets, calculate the total value, and rebalance the holdings to align with the target asset allocation. 

3. Rebalancing Strategy: 
 - Purpose: Ensures that the portfolio adheres to the desired asset distribution by adjusting the holdings periodically, based on the performance and fluctuations in asset values. 

4. Backtesting Environment:
 - Simulation: Runs the portfolio against historical data to demonstrate how it would perform over time, adjusting for price changes and rebalancing as needed. 
 - Metrics: Tracks and logs the portfolio's value over time, allowing for performance assessment and strategy refinement. 

> ##### Process Flow:
1. Initialization:
 - Assets are initialized with their respective symbols, initial prices, and types.
 - A portfolio is created with an initial cash balance and a defined target allocation for asset types. 

2. Simulation Execution:
 - The simulation iterates over a predefined range of business days, updating asset prices according to historical market data. 
 - On each simulated day, the portfolio is rebalanced to maintain the target allocation, adjusting asset quantities based on the latest prices and the available cash. 
 - The portfolio's total value is recalculated after adjustments to reflect the current market valuation of its holdings. 

3. Performance Tracking
 - The portfolio's value is recorded daily, providing a detailed view of its performance over the simulation period. 
 - The overall return is calculated at the end of the simulation to assess the effectiveness of the management strategy. 

> ##### Results Interpretation:
The simulation starts with an initial portfolio value of $10,000 and aims to maintain an allocation solely in equities as per the specified strategy. The portfolio includes a range of equities, each representing different sectors, ensuring diversification within the equity class. 

Over the simulated period of 256 business days starting at the beginning of the year 2023, the portfolio experiences fluctuations in value due to changes in the stock prices that are updated daily based on the historical market data. The portfolio management strategy involves rebalancing to maintain the target allocations, which incurs transaction costs but also helps in risk mitigation by maintaining a balanced asset distribution. 

At the end of the simulation:
 - Final Portfolio Value: The final recorded value of the portfolio after the last trading day stands at approximately $10,930.60
 - Total Return: The portfolio achieved a total return of 9.31% over the period. This return results from capital gains from the equities in the portfolio and the effectiveness of the rebalancing strategy in capitalizing on market movements. 


> ##### Reinforcement Learning (RL) Simulation

This simulation involves managing a financial portfolio using a Reinforcement Learning (RL) approach, specifically utilizing a Q-learning agent to make decisions about whether to hold or rebalance the portfolio based on the market conditions simulated using historical data. 


> ##### Key Components: 

1. Assets and Portfolio Initialization:
 - A portfolio is created with an initial cash allocation and includes various equities (stocks) which are initialized using their prices from a specific starting date in the provided dataset. 
 - Each asset is categorized as 'equity' and the portfolio aims to maintain an all-equity allocation throughout the simulation. 

2. RL Agent Setup:
 - An RL agent is initialized with an action space of 2 actions: hold(0) or rebalance(1). The agent uses a Q-learning algorithm, which allows it to learn the value of taking specific actions in given states over time. 
 - The agent's decision-making is guided by an exploration rate that initially allows for more random actions to explore the state space, which gradually decays, encouraging the agent to exploit learned strategies as it becomes more confident in its decision-making. 

3. Environment Dynamics:
 - The RL environment handles the agent and market data interaction. It provides the agent with the current state of the portfolio, which includes values like the current allocations, market prices, and technical indicators such as moving averages. 
 - The environment also calculates transaction costs for rebalancing actions, updating asset prices according to the historical data as the simulation progresses. 

4. Simulation Execution:
 - The simulation runs over multiple episodes, each representing a complete journey from the initial state to the end of the available market data. In each episode, the environment is reset, and the portfolio is rebalanced according to the agent's actions. 
 - The final values of the portfolio at the end of each episode are recorded to evaluate the strategy's performance across different market scenarios. 


> ##### Differences from the Portfolio Management Simulation):
1. Strategy Complexity
 - The previous script used a static strategy with periodic rebalancing to maintain predefined asset allocations. In contrast, this script employs a dynamic strategy where decisions are made based on a learning algorithm that adapts based on observed market conditions and portfolio performance. 

2. Role of AI
 - This script integrates machine learning through the use of a reinforcement learning agent, which decides whether to hold the current assets or rebalance the portfolio. The previous script did not use machine learning but relied on a straightforward mathematical approach to rebalancing. 

3. Feedback Loop
 - The reinforcement learning setup introduces a feedback loop where the agent's actions are influenced by rewards based on portfolio performance, which is not present in the straightforward rebalancing logic of the previous script.

4. Exploration vs. Exploitation
 - The RL script includes concepts of exploration (trying new actions to discover their effectiveness) and exploitation (using the best-known action), which adds a layer of decision-making complexity that adapts over time and is absent in the static rebalancing of the 1st script. 

> ##### Results Interpretation of the Reinforcement Learning Simulation:
The average value of the portfolio at the end of the 100 episodes is $144,136.54. This indicates the average outcome of the RL strategy across all simulations, suggesting a moderate level of performance given the starting conditions and market variations.

The highest portfolio value achieved in any episode is $196,366.82, highlighting the best-case scenario where the RL agent's decisions aligned optimally with market movements. And the lowest value recorded is $92,033.95, which points to the worst-case scenario under adverse market conditions or suboptimal decisions by the agent.
 
 

> ##### Explanation of the Final Script

In this script, we've developed a simulated environment to manage and test an investment strategy using reinforcement learning (RL). The script encapsulates the concept of assets, portfolios, and a trading environment that interacts with an RL agent to make investment decisions. 

> ##### Key Components

1. Asset Class:
 - Represents financial instruments such as stocks or bonds. 
 - Each asset has a symbol, price, and asset_type (e.g. 'equity')

2. Portfolio Class:
 - Manages a collection of assets.
 - Tracks the total value and cash within the portfolio. 
 - Can add and manage positions based on a target asset allocation.
 - Contains methods to rebalance the portfolio to align with target allocations, adjusting holdings to match desired asset distribution. 

3. Reinforcement Learning Environment (RL Environment):
 - Interfaces between the market (represented through simulated market data) and the RL agent.
 - Manages the sequence of trading actions (steps) based on the agent's decisions. 
 - Calculates rewards as a function of the change in portfolio value, fostering the RL agent's strategy towards maximizing portfolio returns. 
 - Applies actions to rebalance the portfolio and update asset prices according to the simulated market. 

4. Reinforcement Learning Agent
 - Decides actions based on the current market state using a policy derived from its learning algorithm.
 - Updates its policy based on the reward received from actions taken, learning to optimize decisions over time. 



> ##### Differenced from Previous Scripts
Unlike previous scripts which might have focused solely on portfolio management or used deterministic rules for trading, this script integrates a learning-based approach to dynamically adjust the portfolio. It simulates a more complex interaction with the market and adjusts its strategy based on learning experiences, theoretically improving its decision-making process over time through RL. 

> ##### Results Interpretation

The output log details the progression of a Reinforcement Learning (RL) agent managing a financial portfolio over multiple steps or decisions, and here's a breakdown and interpretation of the results:

Steps Summary:
1. Initial Conditions: The portfolio starts with a specific value and state configuration (asset allocations and market prices).
2. Actions Taken: The RL agent decides to rebalance the portfolio at each step (action = 1) based on the current state.
3. Portfolio Value Changes: After each action, the portfolio's total value is recalculated. The changes in portfolio value from one step to the next demonstrate the impact of the agent's actions combined with market price fluctuations.
4. Rewards: Rewards are calculated based on the percentage change in portfolio value. Positive rewards indicate an increase in value, while negative rewards indicate a decrease.

Specific Observations:
- Step 1: The portfolio value slightly decreases from the initial value to 199,175.23, and the reward is -0.00 (negligible change), suggesting stability or a minor loss after rebalancing.
- Step 2: The portfolio value increases to 200,345.73, earning a reward of 0.01. This indicates a successful rebalance that capitalized on market conditions to generate a profit.
- Step 3: The portfolio value decreases again to 199,113.59, with a reward of -0.01, showing a slight loss, potentially due to adverse market movements or less optimal rebalancing.

Final Portfolio Value:
- The simulation concludes with a portfolio value of 388,599.90, which is significantly higher than the starting value shown in the logs. This implies that over the course of the simulation, the RL agent's actions, combined with market conditions, have substantially increased the portfolio's value.




