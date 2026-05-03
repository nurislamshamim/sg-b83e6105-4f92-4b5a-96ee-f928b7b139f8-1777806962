---
title: Core Layout & Navigation System
status: in_progress
priority: urgent
type: feature
tags: [layout, navigation, sidebar]
created_by: agent
created_at: 2026-05-03T10:04:35Z
position: 1
---

## Notes
Implement the dual navigation system combining TrackingTime's sidebar with the logistics platform's horizontal menu bar. This is the foundation that all other modules will build upon.

## Checklist
- [x] Set up design system in globals.css and tailwind.config.ts
- [x] Create Sidebar component with collapsible navigation (Hours, Work, Reports sections)
- [x] Create HorizontalMenu component with 9 modules (Dashboard, Import, Export, Invoicing, Configuration, Accounts, Reports, Sales Module, Settings)
- [x] Create Layout wrapper component combining sidebar + horizontal menu + main content area
- [x] Add dropdown menu functionality for module navigation
- [ ] Implement responsive behavior (collapse sidebar on mobile)

## Acceptance
- Sidebar shows dark navy background with white text and navigation items
- Horizontal menu displays all 9 modules with hover states
- Clicking module headers reveals dropdown menus with relevant options
- Layout properly contains content area with both navigation systems visible
