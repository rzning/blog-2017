---
layout: note
title: "获取 Tags 列表"
---

### get tags list

{% for tag in site.tags %} {% assign name = tag[0] %} {% assign list = tag[1] %}
- {{ name }} ({{ list.size }})
  {% for blog in list %}
    - [{{ blog.title }}]({{ blog.url }})
  {% endfor %}
{% endfor %}

****
* 