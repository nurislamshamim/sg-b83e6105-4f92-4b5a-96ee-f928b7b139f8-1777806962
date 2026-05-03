---
title: Modal Forms & Detail Views
status: in_progress
priority: high
type: feature
tags: [forms, modals, ui]
created_by: agent
created_at: 2026-05-03T10:32:38Z
position: 6
---

## Notes
Create reusable modal forms for adding/editing records across Import and Export modules, plus detailed shipment view for tracking information.

## Checklist
- [ ] Create AddMasterBLModal component for Master B/L entry
- [ ] Create AddHouseBLModal component for House B/L entry
- [ ] Create AddBookingModal for E-Booking entry
- [ ] Create ShipmentDetailView component showing full shipment info
- [ ] Integrate modals into existing Import/Export data tables
- [ ] Add form validation and error handling

## Acceptance
- Clicking "Add New" opens modal with form
- Forms validate required fields before submission
- Detail view shows comprehensive shipment information
- Modals close on successful submission