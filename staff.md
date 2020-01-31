---
layout: page
title: Staff
description: Meet our team.
permalink: /staff/
menu: true
---

<h1>Staff</h1>

<div class="staff">
  {% for author in site.authors %}
    <div class="item">
      <h2 class="name">
        <a href="{{ site.baseurl }}{{ author.url }}">{{ author.display_name }}</a>
      </h2>
      {% if author.position %}
        <h3 class="position">{{ author.position }}</h3>
      {% endif %}
    </div>
  {% endfor %}
</div>
