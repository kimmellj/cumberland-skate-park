# Cumberland Skate Park

Discover Cumberland’s Skate Park! Perfect for skaters of all levels, our park features ramps, rails, and bowls in a vibrant, community-driven space. Located in the Masons Sports Complex in South Cumberland, it's a place to practice tricks, meet fellow skaters, and hone your skills.

## Website

This repository contains the source code for the official website: [https://cumberlandskatepark.com](https://cumberlandskatepark.com).

The site is built using [Jekyll](https://jekyllrb.com/) and uses the `bay_jekyll_theme`.

## Getting Started

### Prerequisites

*   **Ruby**: Ensure you have a compatible Ruby version installed (check `.tool-versions` if you use a version manager).
*   **Bundler**: Install bundler if you haven't already:
    ```bash
    gem install bundler
    ```

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd cumberland-skate-park
    ```

2.  Install dependencies:
    ```bash
    bundle install
    ```

## Usage

To serve the website locally for development:
```bash
bundle exec jekyll serve --watch --draft --incremental
```

The site will be accessible at `http://127.0.0.1:4000/`.

## Structure

*   `_config.yml`: Main configuration settings (site title, description, plugins).
*   `_posts/`: Blog posts or news updates.
*   `_includes/` & `_layouts/`: HTML templates and partials.
*   `assets/`: Static assets like CSS, images, and JavaScript.

## Deployment

The presence of the `.wrangler` directory suggests this project may be configured for deployment via Cloudflare Pages or Workers.