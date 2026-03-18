

## Rename "Non-Surgical Facelift" to "Mini Facelifts" + Cross-Link Items

### What Changes

1. **Rename the category** from "Non-Surgical Facelift" to "Mini Facelifts" across all navigation components
2. **Add "HA Makeover" link** into the Dermal Fillers section (as a cross-link)
3. **Add "Nefertiti Botox Lift" link** into the Botox section (as a cross-link)

### Files to Update

| File | Change |
|------|--------|
| `src/components/home2/Home2Header.tsx` | Rename label (line 54), overview title (line 57), add HA Makeover to Dermal Fillers items (after line 51), add Nefertiti to Botox items (after line 26) |
| `src/components/TreatmentCategoryNav.tsx` | Rename label (line 62) to "Mini Facelifts" |
| `src/components/home/QuickAccessTreatments.tsx` | Rename label (line 44) |
| `src/components/PopularTreatments.tsx` | Update title (line 39) from "Non-Surgical Facelift & Neck Lift" to "Mini Facelift & Neck Lift" |
| `src/components/endolaser/EndolaserSidebar.tsx` | Rename heading (line 78) to "Mini Facelift Options" |
| `src/components/smart-aesthetics/RelatedTreatments.tsx` | Rename link text (lines 22, 35) |
| `src/components/LiquidGlassContactMenu.tsx` | Rename references (lines 47, 51) |
| `src/components/concerns/ConcernsHubSidebar.tsx` | Rename label (line 87) |

### Cross-Links Added

- **Botox mega-menu section**: Add `{ title: "Nefertiti Botox Lift", link: "/treatments/nefertiti-lift/" }` after Calf Reduction (line 26)
- **Dermal Fillers mega-menu section**: Add `{ title: "HA Makeover", link: "/treatments/ha-makeover/" }` after the existing filler items (before Filler Areas sub-header, line 45)

### Notes
- The URL `/treatments/non-surgical-facelift/` stays the same (no slug change) to preserve SEO equity
- The "Mini Facelifts" category still keeps its own section in the mega-menu with all 4 items (Nefertiti, HA Makeover, PDO Threads, Endolaser) — the cross-links in Botox and Fillers are duplicates for discoverability
- The overview link text inside the Mini Facelifts section updates to "Mini Facelifts Overview"

