# Replit Clone - Design Guidelines

## Design Approach
**System-Based Approach**: Utility-focused interface prioritizing clarity and functionality. This is an exact replica of Replit's project creation screen with modern, minimalist aesthetics focused on the creative prompt interface.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**
- Background: 245 245 245 (light gray, almost white)
- Surface/Card: 255 255 255 (white)
- Primary Text: 20 20 20 (near black)
- Secondary Text: 115 115 115 (medium gray)
- Primary Action (Send button): 0 120 212 (Replit blue)
- Border/Divider: 229 229 229 (light gray)
- Category Button Background: 248 248 248 (subtle gray)
- Category Button Hover: 242 242 242

**Dark Mode**: Not required for this replica

### B. Typography

**Font Stack**: 
- Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Monospace (if needed): 'IBM Plex Mono', 'Courier New', monospace

**Type Scale**:
- Main Heading: text-2xl (24px), font-normal, tracking-tight
- Input Placeholder: text-base (16px), text-gray-400
- Category Labels: text-sm (14px), font-medium
- User Input: text-base (16px), font-normal

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 3, 4, 6, 8, 12, 16 for consistent rhythm
- Container padding: p-8 to p-12
- Element gaps: gap-4, gap-6
- Section margins: my-8, my-12

**Grid Structure**:
- Full-page centered layout with max-w-3xl container
- Vertical stack for main content area
- Horizontal flex layout for bottom toolbar and category buttons

### D. Component Library

**Top Navigation Bar**
- Full-width header with light background (bg-white)
- Left: Hamburger menu icon (sidebar toggle)
- Right: View/layout toggle icons
- Height: h-14 with border-b border-gray-200

**Main Content Card**
- Centered container: max-w-3xl mx-auto
- White background with subtle shadow or border
- Generous padding: p-8 to p-12
- Rounded corners: rounded-lg

**Heading Section**
- Text: "what do you want to make?"
- Style: text-2xl, font-normal, text-gray-900
- Margin bottom: mb-8

**Text Input Area**
- Large textarea with minimal styling
- Placeholder: "Describe the idea you want to build..."
- No visible border in default state
- Auto-resize based on content
- Min height: min-h-[200px]
- Font size: text-base
- Focus state: subtle ring or border highlight

**Bottom Toolbar**
- Fixed to bottom of input container
- Flex layout: justify-between items-center
- Left side: Attachment icon + Emoji picker icon
- Right side: Send button (rounded-full, blue background, white arrow icon)
- Icon size: w-5 h-5
- Icon color: text-gray-500
- Send button: bg-blue-600 hover:bg-blue-700, p-2.5, transition-colors

**Category Buttons**
- Three buttons: "Web app", "Data app", "3D Game"
- Layout: Horizontal flex with gap-3
- Style: Light gray background (bg-gray-50), rounded-lg, px-4 py-3
- Icon + text layout (icon on left)
- Icons: Appropriate for each category (browser/window for Web, chart for Data, cube for 3D)
- Hover state: bg-gray-100
- Border: 1px solid transparent, hover shows subtle border

**Icons**
- Library: Lucide Icons or Heroicons (outline variant)
- Consistent stroke-width: 2
- Colors: text-gray-500 for neutral, text-blue-600 for primary actions

### E. Interactions & States

**Input Focus**
- Subtle outline or ring effect
- No jarring color changes
- Smooth transitions

**Button Hovers**
- Category buttons: Slight background darkening
- Send button: Darker blue shade
- Icon buttons: Opacity change to 0.7

**Responsive Behavior**
- Mobile: Reduce padding to p-4 to p-6
- Stack category buttons vertically on small screens (< 640px)
- Maintain centered layout at all viewport sizes

## Layout Specifications

**Page Structure**:
1. Fixed top navigation (h-14)
2. Main content area with centered container
3. Input card with heading, textarea, toolbar, and category buttons
4. Everything vertically centered on page with appropriate spacing

**Exact Element Positioning**:
- Navigation: Sticky top with z-index
- Main card: Centered with margin-top for breathing room
- Textarea: Expands naturally, no max-height
- Category buttons: Below textarea with mt-6
- Toolbar: Integrated at bottom of textarea container

## Critical Design Notes

- **No images required** - This is a pure UI utility screen
- **Minimalist aesthetic** - Avoid decorative elements
- **Functional focus** - Every element serves a clear purpose
- **Subtle interactions** - No flashy animations, smooth micro-transitions only
- **Clean spacing** - Generous whitespace between elements
- **Accessible contrast** - Ensure all text meets WCAG AA standards
- **Icon consistency** - All icons from same library with uniform sizing

This design prioritizes clarity, ease of use, and exact replication of Replit's signature clean interface aesthetic.