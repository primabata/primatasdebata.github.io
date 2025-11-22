---
layout: page
title: Links
subtitle: Todos os links num só lugar
nav-short: true
css: /assets/css/links.css
share-title: "Prima tás de bata | Links"
share-description: "Encontra todos os links importantes da Prima tás de bata"
share-img: /assets/img/logo2.png
---

<div class="bio-links-container">
  <!-- Profile Section -->
  <div class="bio-profile">
    <img src="{{ site.data.links.profile.image }}" alt="{{ site.data.links.profile.name }}" class="bio-profile-image">
    <h1 class="bio-profile-name">{{ site.data.links.profile.name }}</h1>
    <p class="bio-profile-tagline">{{ site.data.links.profile.tagline }}</p>
  </div>

  <!-- Main Links -->
  <div class="bio-links-list">
    {% for link in site.data.links.links %}
    <a href="{{ link.url }}{% if link.external %}?utm_source={{ site.data.links.utm.source }}&utm_medium={{ site.data.links.utm.medium }}&utm_campaign={{ site.data.links.utm.campaign }}{% endif %}"
       class="bio-link-button"
       {% if link.external %}target="_blank" rel="noopener noreferrer"{% endif %}
       data-link-category="{{ link.category }}"
       data-link-title="{{ link.title }}"
       onclick="trackLinkClick('{{ link.title }}', '{{ link.category }}')">
      <span class="bio-link-icon"><i class="{{ link.icon }}"></i></span>
      <span class="bio-link-content">
        <span class="bio-link-title">{{ link.title }}</span>
        {% if link.description %}
        <span class="bio-link-description">{{ link.description }}</span>
        {% endif %}
      </span>
      {% if link.external %}
      <span class="bio-link-external"><i class="fas fa-external-link-alt"></i></span>
      {% endif %}
    </a>
    {% endfor %}
  </div>

  <!-- Social Links -->
  <div class="bio-social-links">
    {% for social in site.data.links.social %}
    <a href="{{ social.url }}{% if social.url contains 'http' %}?utm_source={{ site.data.links.utm.source }}&utm_medium={{ site.data.links.utm.medium }}&utm_campaign={{ site.data.links.utm.campaign }}{% endif %}"
       class="bio-social-button"
       {% if social.url contains 'http' %}target="_blank" rel="noopener noreferrer"{% endif %}
       title="{{ social.platform }}"
       onclick="trackLinkClick('{{ social.platform }}', 'social')">
      <i class="{{ social.icon }}"></i>
    </a>
    {% endfor %}
  </div>

  <!-- Footer -->
  <div class="bio-footer">
    <a href="/" class="bio-footer-link">primatasdebata.pt</a>
  </div>
</div>

<!-- Analytics Tracking Script -->
<script>
function trackLinkClick(linkTitle, category) {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'bio_link_click', {
      'link_title': linkTitle,
      'link_category': category,
      'page_location': window.location.href
    });
  }
}
</script>
