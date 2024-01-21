---
date: 2022-07-30 08:57:37
layout: post
title: "Data Science & Analytics Projects"
subtitle: Brief overview of my Data Science & Analytics Projects.
description: How I told stories with numbers
image: /assets/img/uploads/data.png
optimized_image: /assets/img/uploads/data.png
category: datascience
tags:
author:
paginate: false
---

<div id="toc_container">
<h2 class="toc_title">Table of Contents</h2>
<ul class="toc_list">
  <li><a href="#Analyzing Conference Disparity in the NBA">Analyzing Conference Disparity in the NBA</a></li>
  <li><a href="#Analyzing Public Baseball Database">Analyzing Public Baseball Database</a></li>
  <li><a href="#Establishing Causal Relationship between Government Infrastructure Investments and Unemployment Rates">Establishing Causal Relationship between Government Infrastructure Investments and Unemployment Rates</a></li>
  <li><a href="#Sentiment Analysis of AOC, Elon Musk, and Cristiano Ronaldo Tweets">Sentiment Analysis of AOC, Elon Musk, and Cristiano Ronaldo Tweets</a></li>
  <li><a href="#More Coming!">More Coming!</a></li>
</ul>
</div>

<h2 id="Analyzing Conference Disparity in the NBA">Analyzing Conference Disparity in the NBA</h2>
This project was conducted in R using data from the 2005-06 season to 2020-21. I analyzed wins, losses, points scored, and other game stats to determine if there is a significant conference disparity in the NBA. Below are some visualizations created:

![Boxplots](/assets/img/uploads/boxplot.png "Boxplots")

Over the past 16 NBA seasons, inter-conference regular season matchups of two eventual playoffs/lottery teams have swung in favor of the Western Conference. In addition, the skill gap between playoff teams from East vs. West has been closer than Western Conference playoff teams vs. Eastern lottery opponents.

![Margins](/assets/img/uploads/margins.png "Margins")

The dots on the plot represent teams from the 2005-2020 NBA seasons, colored based on their conference. A team’s point margin increases along the horizontal axis, whereas a team’s strength of schedule increases along the vertical axis. The placement of most red dots suggest a tougher strength of schedule for Western Conference teams than Eastern Conference teams.

There are two labeled teams on this plot -- DAL 2011 and LAL 2019. Compared to other teams, these two teams had a tough schedule due to their opponents’ high point margins. My hypotheses as to why teams from 2019 and 2011 appear at the extremes of this graph was an NBA Lockout that occurred in 2011, and the Covid-19 pandemic that have impacted the 2019-2020 NBA season. Both events caused teams to play fewer games, and a small sample of games fails to standardize team point margins. This produces abnormal values that are plotted at the extremes of this graph.

![Simulations](/assets/img/uploads/simulations.png "Simulations")

I investigated whether it’s possible that the relationship found in the previous analyses could be reasonably explained by randomness. 

After 1000 simulations, I created a plot confirming that a team in the West requires a higher win percentage than a team in the East in order to reach the playoffs.

I also recommended machine learning models to help make data-driven decisions within the NBA. 

To learn more about this project, <a href="https://github.com/mein-lee/NBA_conference_disparity">check out my Github here! </a> Click on the HTML file and download it into your device to view it.

<h2 id="Analyzing Public Baseball Database">Analyzing Public Baseball Database</h2>

Coming Soon!

<h2 id="Establishing Causal Relationship between Government Infrastructure Investments and Unemployment Rates">Establishing Causal Relationship between Government Infrastructure Investments and Unemployment Rates</h2>

Coming Soon!

<h2 id="Sentiment Analysis of AOC, Elon Musk, and Cristiano Ronaldo Tweets">Sentiment Analysis of AOC, Elon Musk, and Cristiano Ronaldo Tweets</h2>

Coming Soon!

<h2 id="More Coming!">More Coming!</h2>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSfh1Kx8ftMOR92ijcBb_-K2OAv2XAnQlWChwuBG2vTGkkBeuQ/viewform?usp=sf_link">Sign up for my mailing list for post updates!</a>
