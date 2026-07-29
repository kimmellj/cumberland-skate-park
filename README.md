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

## Development

To serve the website locally for development, run:
```bash
bundle exec jekyll serve --watch --draft --incremental
```

The site will be accessible at `http://127.0.0.1:4000/`. Any changes you make to the source files will automatically trigger a rebuild.

## Building

To build the static site for production (compiling to the `_site` directory):
```bash
bundle exec jekyll build
```

## Structure

*   `_config.yml`: Main configuration settings (site title, description, plugins, base URLs).
*   `_posts/`: Blog posts or news updates.
*   `_includes/` & `_layouts/`: HTML templates and partials.
*   `assets/`: Static assets like CSS, images, and JavaScript.
*   `_site/`: The generated static files created after running a build (this folder is ignored by git).

## Deployment

This site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/) and uses the `wrangler` CLI for deployments. The `wrangler` package is included in the project's `package.json`.

### Prerequisites for Deployment
Before deploying, make sure you have installed the Node.js dependencies (which includes `wrangler`):
```bash
npm install
```

### Deploying a Preview
To deploy a preview version of your current branch to Cloudflare Pages:
1. Make sure your `_site` directory is up to date:
   ```bash
   bundle exec jekyll build
   ```
2. Deploy using `wrangler`:
   ```bash
   npx wrangler pages deploy _site --project-name cumberland-skate-park
   ```

### Deploying to Production
To deploy to the live production site (associated with the `main` branch):
1. Commit all your changes:
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   ```
2. Build the site:
   ```bash
   bundle exec jekyll build
   ```
3. Deploy to the main branch:
   ```bash
   npx wrangler pages deploy _site --project-name cumberland-skate-park --branch main
   ```