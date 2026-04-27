---
layout: home
title: Home
---

# 🔐 SharePoint Security Blog

Analiza podatności, hardening i bezpieczeństwo SharePoint SE.

---

## 📰 Najnowsze artykuły

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <br>
    <small>{{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>
