---
layout: default
title: Blog
---

# λ Blog λ <a href="/feed.xml"><img src="/assets/images/rss_ani.gif"></a>

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: "%B %-d, %Y" }}</p>
  <p>{{ post.excerpt }}...</p>
  <a href="{{ post.url }}">Read more</a>
{% endfor %}
