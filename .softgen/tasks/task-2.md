<![CDATA[---
title: Dashboard with Stats & Quick Links
status: todo
priority: high
type: feature
tags: [dashboard, stats, widgets]
created_by: agent
created_at: 2026-05-03T10:04:35Z
position: 2
---

## Notes
Build the main dashboard landing page showing BoL (Bill of Lading) statistics for current month with icon indicators for different modes (Air Export, Air Import, Sea Export, Sea Import) and a Quick Links panel for common operations.

## Checklist
- [ ] Create Dashboard page as index.tsx
- [ ] Create StatCard component for BoL counts with icons (plane/ship icons)
- [ ] Display 4 stat cards: Air Export, Air Import, Sea Export, Sea Import
- [ ] Create QuickLinks panel with 8 common operation buttons
- [ ] Add chart component showing "Total BoL Count (Last 6 Months)" with sample data
- [ ] Add "Show Data For" filter dropdown (Import Air, Import Sea, Export options)

## Acceptance
- Dashboard displays 4 circular stat badges showing BoL counts (currently 0)
- Quick Links panel shows all 8 operation buttons in 2-column grid
- Chart shows historical trend data with proper labels
- Interface matches the blue color scheme from reference images
