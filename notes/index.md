---
layout  : note
title   : data test
---

### test

{{ site.time }}

{% assign test = "{{ site.time }}" %} {{ test }}

{% raw %} {{ site.time }} {% endraw %}

<hr/>

{% assign list = site.data.notes %}
{% include dirList.html %}




