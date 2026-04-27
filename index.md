---
layout: home
title: Home
---

{% assign latest_post = site.posts.first %}

## 🚨 Latest Threat

**CVE-2026-32201 – aktywnie wykorzystywany SharePoint zero-day**

{% if latest_post %}
➡️ [Czytaj analizę]({{ latest_post.url | relative_url }})
{% else %}
Brak opublikowanych artykułów.
{% endif %}
