# UI/UX Pro Max - Quick Start Guide

## What You Have Now

✅ **UI/UX Pro Max Skill** - Installed at `.claude/skills/ui-ux-pro-max/`
✅ **Design System** - Persisted at `design-system/editorial-layouts/MASTER.md`
✅ **Python 3.14.2** - Required for the search engine
✅ **uipro-cli** - Command-line interface

---

## Your Design System: Editorial Layouts

### Style: Swiss Modernism 2.0
- Grid-based, mathematical spacing, clean typography
- Perfect for: Magazines, editorial content, publishing

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#18181B` | Editorial black |
| Secondary | `#3F3F46` | Gray tones |
| CTA/Accent | `#EC4899` | Pink highlights |
| Background | `#FAFAFA` | Off-white |
| Text | `#09090B` | Near black |

### Typography
- **Headings:** Libre Bodoni (serif, elegant)
- **Body:** Public Sans (clean, readable)
- [Google Fonts Link](https://fonts.google.com/share?selection?family=Libre+Bodoni:wght@400;500;600;700|Public+Sans:wght@300;400;500;600;700)

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap');
```

### Page Pattern: Newsletter / Content First
1. Hero (Value Prop + Email Form)
2. Recent Issues/Archives
3. Social Proof (Subscriber count)
4. About Author

---

## How to Use the Skill

### Method 1: Automatic (Recommended)
Just chat naturally with Claude Code:

```
"Build a newsletter signup page for my editorial site"
"Create an article listing page with grid layout"
"Design an author bio section"
```

The skill will automatically activate and use your design system.

### Method 2: Manual Design System Generation

```bash
# Generate new design system (ASCII output)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "your project keywords" --design-system -p "Project Name"

# Generate with page-specific override
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --design-system --persist -p "MyApp" --page "dashboard"

# Domain-specific searches
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart
```

### Method 3: Stack-Specific Guidelines

```bash
# React-specific patterns
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react

# HTML + Tailwind
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
```

---

## Hierarchical Design System Pattern

Your design system uses a **Master + Overrides** pattern:

```
design-system/
├── editorial-layouts/
│   ├── MASTER.md           # Global rules (colors, typography, components)
│   └── pages/
│       ├── homepage.md     # Homepage-specific overrides
│       ├── article.md      # Article page overrides
│       └── dashboard.md    # Dashboard overrides
```

**How it works:**
- When building a page, check `design-system/pages/[page-name].md` first
- If it exists, its rules **override** MASTER.md
- If not, use MASTER.md exclusively

---

## Pre-Delivery Checklist

Before finalizing any UI, verify:

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

---

## Available Features

| Feature | Count | Example |
|---------|-------|---------|
| UI Styles | 67 | Glassmorphism, Neumorphism, Bento Grid |
| Color Palettes | 96 | Industry-specific (SaaS, Healthcare, Fintech) |
| Font Pairings | 57 | Serif/Sans combinations |
| Chart Types | 25 | For dashboards/analytics |
| Tech Stacks | 13 | React, Next.js, Vue, SwiftUI, etc. |
| Reasoning Rules | 100 | Industry-specific design logic |

---

## CLI Commands

```bash
# Check uipro version
uipro --version

# Update to latest version
uipro update

# List available versions
uipro versions

# Reinstall skill
uipro init --ai claude
```

---

## Troubleshooting

**Skill not activating?**
- Restart Claude Code
- Check `.claude/skills/ui-ux-pro-max/` folder exists

**Python error?**
```bash
# Verify Python 3.x
python3 --version

# macOS
brew install python3

# Ubuntu/Debian
sudo apt update && sudo apt install python3
```

**Design system not generating?**
- Check search script path: `.claude/skills/ui-ux-pro-max/scripts/search.py`
- Verify data files exist in `.claude/skills/ui-ux-pro-max/data/`

---

## Next Steps

1. ✅ Review your design system: `design-system/editorial-layouts/MASTER.md`
2. ✅ Try a natural prompt: "Build an editorial homepage using the design system"
3. ✅ Create page-specific overrides as needed
4. ✅ Use the pre-delivery checklist before finalizing

---

## Resources

- **GitHub:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **Design System Scripts:** `.claude/skills/ui-ux-pro-max/scripts/`
- **Data Files:** `.claude/skills/ui-ux-pro-max/data/`

Generated: 2026-02-04
Project: Editorial Layouts
Style: Swiss Modernism 2.0
