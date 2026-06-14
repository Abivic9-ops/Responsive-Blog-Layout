# Blogify

A modern, fully responsive blog platform built with pure HTML, CSS, and JavaScript. Blogify is designed to deliver a clean, premium reading experience across all screen sizes and devices. The platform covers content in technology, healthcare, business, design, lifestyle, and productivity.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Pages](#pages)
4. [Project Structure](#project-structure)
5. [Technologies Used](#technologies-used)
6. [JavaScript Architecture](#javascript-architecture)
7. [Responsive Design](#responsive-design)
8. [Dark Mode](#dark-mode)
9. [Content Categories](#content-categories)
10. [Getting Started](#getting-started)
11. [Assets](#assets)
12. [Author](#author)

---

## Project Overview

Blogify is a static frontend blog platform that presents curated editorial content through a well-structured, visually refined interface. The platform is targeted at readers who want to stay informed about trends shaping the future, particularly in areas such as artificial intelligence, digital health innovation, distributed work, productivity, and design.

The site is built without any frontend framework or build tool. All interactivity is handled through vanilla JavaScript consolidated into a single script file. The design system uses CSS custom properties for consistent theming, including full support for a light and dark mode.

---

## Features

### Navigation
- A persistent top navigation bar with the Blogify logo, site links, a search input, a dark mode toggle, and a Subscribe button.
- Active page link is automatically highlighted using JavaScript based on the current URL pathname.
- A dropdown under the Categories link reveals subcategories including Technology, Programming, AI and Machine Learning, Web Development, UI/UX Design, and Cybersecurity.
- On mobile and tablet viewports, the navigation collapses into a hamburger menu that slides open on tap.
- The hamburger menu closes automatically when a link is selected, when the user taps outside the menu, or when the Escape key is pressed.
- The navbar applies a shadow effect when the user scrolls past 50 pixels.

### Search
- A search input in the navbar accepts queries from keyboard entry or button click.
- Pressing Enter or clicking the search icon triggers the search handler in JavaScript.

### Article Cards
- Each article card contains a cover image, category tag, article title, excerpt, author avatar, author name, publication date, estimated reading time, and a link to the full article.
- Featured articles on the homepage include an expandable section. Clicking the Read More Details button reveals additional bullet points and analysis for that article. Clicking again collapses the content.

### Newsletter Subscription
- A newsletter signup form in the sidebar accepts an email address.
- On submission, the form confirms the subscription and resets the input field.

### Contact Form
- A full contact form on the Contact page collects the sender's name, email address, subject, and message.
- On submission, the form displays a confirmation message and resets all fields.

### FAQ Accordion
- The Contact page includes a frequently asked questions section built as an accordion.
- Clicking any question header toggles its answer open or closed.

### Pagination
- Numbered pagination buttons appear beneath the article listing.
- Clicking a page number updates the active visual state of the button.

### Back to Top Button
- A button fixed in the footer area becomes visible once the user has scrolled more than 300 pixels down the page.
- Clicking the button scrolls the page smoothly back to the top.

### Dark Mode
- A toggle button in the navbar switches the interface between light and dark themes.
- The user's preference is saved to localStorage so the selected mode persists across page visits.
- The button icon switches between a moon icon for light mode and a sun icon for dark mode.

---

## Pages

### index.html (Homepage)
The main landing page. It contains the hero section with a headline and subheading, three featured article cards covering AI and Technology, Healthcare, and Business, a sidebar with an About Me card, a Categories list, a newsletter signup card, and a Trending section, and a paginated article grid. The footer links to all pages and displays social media icons.

### blog.html (Blog Listing)
The full blog listing page. It presents four article cards covering developer productivity, UI/UX design trends, lifestyle inspiration, and daily habits. Each card features a unique cover image sourced from Unsplash, tailored to the article topic. The page includes a sidebar with Popular Posts, site statistics, and a newsletter form.

### about.html (About Page)
Introduces Blogify to the reader. The page includes a mission statement, four community statistics (monthly readers, articles published, content categories, and contributors), a team section featuring three named team members with their roles and portraits, and a community call to action with a subscription button.

### contact.html (Contact Page)
Provides multiple ways for readers and collaborators to reach the Blogify team. The page contains a contact form, an information panel with email addresses, a physical location in Nairobi, Kenya, and social media handles. A FAQ accordion below the form answers common reader questions about publishing frequency, contributor guidelines, sponsorships, and privacy.

---

## Project Structure

```
Responsive-Blog-Layout/
|
|-- index.html          # Homepage with hero, featured articles, and sidebar
|-- blog.html           # Full blog listing with multiple article cards
|-- about.html          # About page with mission, stats, and team section
|-- contact.html        # Contact form, info cards, and FAQ accordion
|-- style.css           # Single consolidated stylesheet for all pages
|-- blogify.js          # Single consolidated JavaScript file for all pages
|
|-- assets/
    |-- images/
        |-- ai_tech_article_1781419046657.png
        |-- health_tech_article_1781419013570.png
        |-- business_future_article_1781419026025.png
        |-- alex_gitau_1781419058835.png
        |-- dr_emma_chen_1781419076786.png
        |-- michael_johnson_1781419089855.png
```

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure across all four pages |
| CSS3 | Custom styling, CSS variables, flexbox layouts, grid, animations, and media queries |
| Vanilla JavaScript | All interactive behavior including navigation, forms, accordions, dark mode, and scroll events |
| Boxicons 2.1.4 | Icon library for UI elements throughout the site |
| Google Fonts | Typography using Poppins, Inter, and Manrope font families |
| Unsplash | High quality photography for article card cover images on the blog listing page |

No frontend frameworks, no build tools, and no external JavaScript libraries are used. The project runs directly in any modern browser without a local server.

---

## JavaScript Architecture

All JavaScript for the entire site lives in a single file, [blogify.js](blogify.js). This consolidation keeps the HTML files clean and makes the codebase straightforward to maintain.

The file is organized into clearly labeled sections:

**Navbar Functionality**
Initializes the hamburger toggle, closes the menu on link click or outside click, handles the dropdown behavior on mobile viewports, and manages keyboard navigation using the Escape key.

**Navbar Styling on Scroll**
Applies a box shadow to the navbar once the user has scrolled beyond 50 pixels.

**Sticky Navbar Behavior**
Tracks the scroll position and adds or removes a `.scrolled` class on the navbar element at 100 pixels.

**Active Link Highlighting**
Compares the current page filename from `window.location.pathname` against each nav link's `href` attribute and applies the `.active` class to the matching link.

**Search Bar**
Handles focus and blur visual states on the search input. Triggers a search handler on button click or Enter key press.

**Subscribe Button**
Adds a subtle lift animation on mouse hover.

**Responsive Navbar Handler**
A debounced resize listener that shows or hides the hamburger button and nav menu depending on viewport width. The debounce function delays execution by 250 milliseconds to avoid excessive recalculations on rapid resize events.

**Dark Mode Toggle**
Reads from and writes to localStorage under the key `darkMode`. Toggles the `.dark-mode` class on `document.body` and switches the toggle button icon accordingly.

**Contact Form Handler**
Intercepts the form submission event on the `#contact-form` element, displays a confirmation alert, and resets the form.

**FAQ Accordion**
Attaches click listeners to all `.accordion-header` elements. Each click toggles the `.active` class on the parent `.accordion-item`, which CSS uses to animate the panel open or closed.

**Newsletter Form Handler**
Intercepts the submission event on the `#newsletter-form` element, confirms the subscription, and resets the form.

**Expandable Content**
Toggles the display and class state of `.expandable-content` panels and updates the button text between "Read More Details" and "Hide Details".

**Pagination**
Removes the `.active` class from all page buttons and applies it to the clicked button, providing visual feedback for the selected page.

**Back to Top Button**
Shows the `#back-to-top` button when scroll position exceeds 300 pixels and hides it otherwise. Clicking the button calls `window.scrollTo` with smooth behavior.

---

## Responsive Design

The site is fully responsive across desktop, tablet, and mobile viewports.

Key responsive behaviors:

- The navbar transitions to a hamburger menu on viewports at or below 768 pixels wide.
- Article cards in the main content area reflow from a multi-column grid to a single column stack on smaller screens.
- The sidebar collapses below the main content on mobile viewports.
- The footer grid condenses from four columns to two or one depending on screen width.
- All images use `object-fit: cover` to maintain their aspect ratio and fill their containers cleanly regardless of the image dimensions.
- Typography scales fluidly using relative units.

---

## Dark Mode

Dark mode is a first-class feature of Blogify. The implementation relies on:

- A `.dark-mode` class toggled on the `body` element.
- CSS custom properties defined under the `.dark-mode` selector that override the default light theme values.
- A `localStorage` entry that remembers the user's choice across sessions.
- An icon that visually confirms which mode is active.

Readers who prefer dark mode will find the preference honored every time they return to the site.

---

## Content Categories

Blogify covers content across six primary categories:

| Category | Description |
|---|---|
| AI and Tech | Artificial intelligence, machine learning, enterprise solutions, and emerging technology |
| Healthcare | Digital health, telemedicine, wearables, AI diagnostics, and personalized medicine |
| Business | Future of work, distributed teams, blockchain, sustainability, and Web3 business models |
| Design | UI/UX trends, design systems, prototyping, and digital product aesthetics |
| Lifestyle | Productivity, daily habits, motivation, creative inspiration, and personal development |
| Sustainability | Green technology, environmental initiatives, and sustainable competitive practices |

---

## Getting Started

Blogify is a static site. No installation, package manager, or build step is required.

**To run the project locally:**

1. Clone or download the repository to your local machine.
2. Open the `Responsive-Blog-Layout` folder.
3. Double-click `index.html` to open it in your browser, or open it using a local development server such as Live Server in Visual Studio Code.

**To view a specific page:**
Open any of the four HTML files directly: `index.html`, `blog.html`, `about.html`, or `contact.html`.

**To customize content:**
All article titles, excerpts, author names, and category tags are written directly in the HTML files. Edit any of these files in a text editor to update the content.

**To update styles:**
All visual styles are contained in `style.css`. CSS custom properties are declared at the top of the file under the `:root` selector and can be adjusted to change the color palette, spacing scale, or typography across the entire site at once.

**To update behavior:**
All interactive behavior lives in `blogify.js`. Each feature is separated into a clearly labeled section with a comment header.

---

## Assets

Cover images for article cards are sourced from two locations:

**Local assets in `assets/images/`**
These are AI-generated portrait photographs used for author avatars and team member photos throughout the site. All portrait subjects depicted are Black individuals, in accordance with the visual identity of the platform.

**Unsplash (remote CDN)**
Article card cover images on the blog listing page are served directly from the Unsplash image CDN. Each image is selected to match the specific article topic. The URLs include quality and size parameters to keep load times fast.

| Article | Image Theme |
|---|---|
| 10 Productivity Tips for Developers | Developer desk workspace setup |
| The Future of UI/UX Design | Design wireframes and prototype workspace |
| How to Stay Inspired Every Day | Aesthetic lifestyle desk with natural light |
| Building Better Daily Habits | Minimalist journaling and planning flatlay |

---

## Author

Blogify was crafted by **Abivic9-Ops**.

For inquiries, collaboration, or content contributions, reach out through the contact form on the Contact page or via the following channels:

- Email: hello@blogify.com
- Support: support@blogify.com
- Writers and contributors: writers@blogify.com
- Sponsorship partnerships: sponsors@blogify.com
- Location: UpperHill, Nairobi, Kenya

---

Copyright 2026 Blogify. All rights reserved.
