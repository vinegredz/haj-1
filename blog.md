---
title: Blog
id: 4
layout: page
isInNav: true
---

<div class="row">

    <div class="col-lg-7">

        {% for post in site.posts %}

        <div class="bb-1 mb-5">

            {% unless post.thumbnail_image == empty %}
            <a href="{{ post.url | relative_url }}">
                <img class="mb-4" src="{{ post.thumbnail_image | relative_url }}" alt="Image">
            </a>
            {% endunless %}
            <a href="{{ post.url | relative_url }}"><h3 class="card-title">{{ post.title | escape }}</h3></a>
            <p class="f-sm text-gray-light f-sans">{{ post.date | date_to_long_string }}</p>
            <p>{{ post.excerpt }}</p>

        </div>

        {% endfor %}

    </div>

    <div class="col-lg-4 offset-lg-1 mt-4 mt-lg-0">

        {% include sidebar-programs.html %}

        <div class="mt-5">
            {% include subscribe.html %}
        </div>

    </div>

</div>