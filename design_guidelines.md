# Design Guidelines: Siddhi Agarkar Portfolio Website

## Design Approach

**Reference-Based Approach:** Drawing inspiration from modern portfolio sites like Awwwards-featured portfolios, Behance designer portfolios, and Linear's clean aesthetic. The design balances professional sophistication with creative expression through strategic use of white space, elegant typography, and subtle animations.

## Typography System

**Primary Font:** Poiret One (Google Fonts) - elegant, modern, geometric
- Hero/Page Titles: text-5xl to text-7xl, font-light tracking-wide
- Section Headings: text-3xl to text-4xl, font-normal
- Subsection Titles: text-xl to text-2xl, font-normal
- Body Text: text-base to text-lg, font-light, leading-relaxed
- Captions/Metadata: text-sm, font-light, tracking-wider uppercase

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24 (p-4, p-8, gap-12, mb-16, py-24)
- Page padding: px-8 md:px-16 lg:px-24
- Section vertical spacing: py-16 to py-24
- Component gaps: gap-8 to gap-12
- Content max-width: max-w-6xl for text, max-w-7xl for layouts

**Grid System:**
- Projects grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Timeline: Single column with left-aligned content, right-aligned dates
- Skills categories: grid-cols-2 md:grid-cols-3 gap-6

## Color Strategy

**Base Palette:**
- Primary Background: #FAFAFA (soft white)
- Secondary Background: #F5F5F5 (light grey)
- Text Primary: #2C2C2C (dark charcoal)
- Text Secondary: #6B6B6B (medium grey)
- Borders/Dividers: #E0E0E0 (light grey)

**Accent Colors (strategic pops):**
- Primary Accent: #4A90E2 (soft blue) - for CTAs, links, active states
- Secondary Accent: #7C5CDB (soft purple) - for highlights, hover states
- Success/Achievement: #50C878 (emerald green) - for achievement badges
- Timeline Dots: Gradient from Primary to Secondary Accent

## Navigation Architecture

**Desktop (≥1024px):**
- Fixed left sidebar: w-64, full height, bg-white with subtle shadow
- Logo/Name at top: py-8 px-6
- Navigation links vertically stacked: py-4 px-6, hover state with left border accent
- Social icons at bottom: flex gap-4
- Active page indicated with left border (4px wide) in Primary Accent

**Mobile (<1024px):**
- Fixed top navbar: h-16, bg-white, shadow
- Hamburger menu (right): opens slide-in menu overlay
- Full-screen menu overlay with centered links

**Navigation Items:**
- Home
- Education
- Projects
- Experience
- Achievements & Activities
- Skills
- Contact

## Page-Specific Layouts

### Home/Landing Page
**Hero Section:**
- Split layout: Left 60% text content, Right 40% professional headshot area
- Animated entrance: Fade-in with slight upward motion
- Hero text: Large name in Poiret One, tagline below
- CTA buttons: "View Projects" (primary) and "Download Resume" (secondary)

**About Section:**
- max-w-4xl centered prose
- Brief introduction paragraph
- Quick stats grid: Years of Experience, Projects Completed, Technologies

### Education Page
**Timeline Format:**
- Vertical timeline with line running down left side
- Each education item: Card with timeline dot connected to line
- Card content: Institution name, degree, years, percentage/CGPA
- Stagger animation on scroll (each item appears sequentially)

### Projects Page
**Grid Layout:**
- 3-column grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Project cards: White background, subtle shadow, hover lift effect
- Card structure:
  - 1-2 project images (aspect-ratio-video or square)
  - Project title (text-2xl)
  - Brief sentence (text-base, text-secondary)
  - "View Details" button (bottom, full-width, Primary Accent background)

**Individual Project Detail Pages:**
- Hero: Project title + hero image (full-width)
- Content sections: Tech stack, Description, Features, Challenges, Outcomes
- Image gallery: 2-column grid for additional screenshots
- Back button: Top-left, subtle

### Experience/Internships Page
**Timeline Format:**
- Similar to Education but with expanded content
- Company logo placeholder on timeline dots
- Expandable/collapsible bullets for responsibilities
- Tech stack tags: Pills with grey background

### Achievements & Activities Page
**Sections:**
1. Awards/Certifications: Grid of achievement cards with icons
2. Extra-curricular: Timeline or card grid
3. Photo Gallery: Masonry grid layout for school activity photos (skit, march past, volunteering)
   - Lightbox on click
   - Captions below images

### Skills Page
**Category Grid:**
- Languages & Frameworks, Tools, Others
- Each category: Card with icon header
- Skills as pills/tags with subtle background
- Proficiency bars for key technologies

## Component Library

**Cards:**
- Base: bg-white, rounded-xl, shadow-sm, p-6 to p-8
- Hover: shadow-md, translateY(-2px) transition

**Buttons:**
- Primary: bg-[#4A90E2], text-white, px-8 py-3, rounded-lg, backdrop-blur if on images
- Secondary: border-2 border-[#4A90E2], text-[#4A90E2], px-8 py-3, rounded-lg
- Text: text-[#4A90E2], underline-offset-4, hover:underline

**Timeline Components:**
- Vertical line: border-l-2 border-[#E0E0E0]
- Timeline dot: w-4 h-4, rounded-full, gradient bg, absolute positioned
- Content card: Connected to dot with short horizontal line

**Input Fields (Contact):**
- Border: border border-[#E0E0E0]
- Focus: border-[#4A90E2], ring-2 ring-[#4A90E2]/20
- Padding: px-4 py-3
- Rounded: rounded-lg

## Animations

**Scroll Animations (AOS library):**
- Fade-up: Cards, sections (duration: 800ms)
- Fade-left: Timeline items from right (duration: 600ms, stagger: 100ms)
- Zoom-in: Images in gallery (duration: 500ms)
- Custom: Navbar slides in from left on page load (300ms delay)

**Hover Animations:**
- Cards: transform scale(1.02) + shadow increase
- Buttons: background brightness increase
- Images: slight zoom on hover (scale 1.05)

**Page Transitions:**
- Smooth fade between page navigations (200ms)

## Images

**Professional Headshot:** Home page hero section, right side, circular or soft-rounded frame with subtle shadow/border

**Project Images:** 1-2 images per project card showing UI/screenshots/diagrams, aspect-ratio-video format

**School Activity Photos:** Multiple images for gallery section in Achievements page:
- Skit performance photos
- March past ceremony images
- Volunteering activity pictures
- Display in masonry/grid layout with equal heights, variable widths

**Background Textures:** Subtle dot grid or mesh gradient patterns in hero sections (very low opacity, ~5%)

**No large hero background images** - focus on clean white/grey aesthetic with content and photos taking center stage

## Responsive Behavior

**Breakpoints:**
- Mobile: <768px - single column, stacked navigation
- Tablet: 768px-1023px - 2 columns where applicable, top navbar
- Desktop: ≥1024px - full multi-column layouts, left sidebar

**Content Reflow:**
- Navigation transforms completely (sidebar to top)
- Grids collapse: 3 col → 2 col → 1 col
- Hero splits become stacked on mobile
- Timeline remains single column, adjusts spacing