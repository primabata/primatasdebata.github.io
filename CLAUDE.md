# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static website for "Prima tás de bata" (primatasdebata.pt), a Portuguese science communication initiative. The site is hosted on GitHub Pages and uses the Beautiful Jekyll remote theme.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally (with live reload)
bundle exec jekyll serve

# Serve with drafts visible
bundle exec jekyll serve --drafts

# Build the site (output to _site/)
bundle exec jekyll build
```

### Testing Local Changes
The site will be available at `http://localhost:4000` when running locally. The `_site/` directory contains the generated static files and should not be manually edited.

## Architecture and Structure

### Jekyll Configuration
- **Remote Theme**: Uses `daattali/beautiful-jekyll` as the base theme
- **Config File**: `_config.yml` contains all site-wide settings including:
  - Navigation links (navbar-links)
  - Color scheme (navbar-col, navbar-text-col, etc.)
  - Social media links
  - Google Analytics (gtag)
  - Default page settings

### Content Pages
- `index.md`: Main landing page with custom layout using:
  - Header section with particles.js animation background
  - "Sobre nós" (About us) section
  - "Os nossos valores" (Our values) section
  - Custom CSS and JS through frontmatter
- `contact.md`: Contact page with Google reCAPTCHA integration

### Custom Styling System
The site uses a layered CSS approach:

1. **Base Theme CSS**: Provided by Beautiful Jekyll (not in repo)
2. **Site-wide CSS**: `/assets/css/primatasdebata.css` - Contains:
   - Footer customization
   - Navbar logo sizing
   - Mailchimp subscription styling
   - Action button styles (.actionbtn)
   - Support for Liquid templating in CSS (e.g., `{{ site.navbar-col }}`)

3. **Page-specific CSS**: `/assets/css/index.css` - For the homepage:
   - Diagonal section cuts using clip-path
   - Header animation (animated background)
   - Particle.js container styling
   - Responsive breakpoints for different screen sizes
   - Section-specific styling (#aboutus-out, #values-out, etc.)

### Custom Components
- **Footer**: `_includes/custom_footer.html` contains a Mailchimp newsletter subscription form (currently points to a Dean Attali list - likely needs updating)
- **Particles Animation**: Referenced in index.md but currently commented out in `/assets/js/index.js`

### Color Scheme
Key colors defined in _config.yml:
- Primary dark: #05172d (navbar, header background)
- Primary accent: #0085A1 (mobile theme)
- Text on dark: #fff
- Action button: #4fc949 (green)

### Responsive Design
The site has three main breakpoints:
- Desktop: > 1899px
- Tablet: 999px - 1899px
- Mobile: < 650px (particles.js disabled, simplified layouts)

## Content Updates

### Changing Text Content
- Main page text is in `index.md` using Markdown with embedded HTML divs
- Portuguese language content throughout
- Three main sections: Header, "Sobre nós", "Os nossos valores"

### Styling Changes
- Site-wide styles: Edit `/assets/css/primatasdebata.css`
- Homepage-specific: Edit `/assets/css/index.css`
- Colors can be changed globally in `_config.yml` under the color variables
- CSS files have Liquid frontmatter (`---\nlayout: null\n---`) to enable theme variable interpolation

### Adding Navigation Links
Update the `navbar-links` section in `_config.yml`:
```yaml
navbar-links:
  Display Text: "url-or-anchor"
```

## Important Notes

- The site is deployed to GitHub Pages, so changes to main branch are automatically published
- `_site/` directory is generated and should be in .gitignore for typical Jekyll workflows
- Beautiful Jekyll theme provides base layouts (page, base, etc.) - these don't need to be created
- The custom footer Mailchimp form references an external mailing list that may need configuration
- Particles.js is loaded via CDN but the initialization code is commented out
- Google Analytics tracking is configured via gtag: "G-Y80XD5LXBY"
