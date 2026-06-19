---
name: Rishtey Profile Data & Filter Architecture
description: How profile data and filter state work across the Rishtey dashboard
---

## Profile Data
- `src/data/profiles.ts` — 20 profiles covering Hindu (8), Muslim (3), Sikh (3), Christian (2), Jain (1), Buddhist (1 missing), NRI (3)
- `photoIdx` 0–5 maps to `profilePhotos` array = [profile1.png ... profile6.png]
- Profile has `verified: { profile, photo, id, mobile }` booleans for filter matching

## Filter State Architecture
- `Filters` interface defined in `src/pages/MatchesPage.tsx`
- Filter state lives in MatchesPage; passed as `{ filters, setFilters }` to FilterSidebar
- `filteredProfiles` computed via `useMemo` in MatchesPage; passed as `profiles` prop to MatchesFeed
- Shortlisted, recentlyViewed, sentInterests are `number[]` states in MatchesPage — tracked by profile id

## SubNav Tab Logic (real data)
- New Matches → all profiles
- Today's → profiles where `isNewToday === true`
- My Matches → `isMutualMatch || sentInterests.includes(id)`
- Near Me → city === "Mumbai" || state === "Maharashtra" (user base city)
- Recently Viewed → tracked via `recentlyViewed` state, populated when ProfileCard "onMarkViewed" fires
- Shortlisted → tracked via `shortlisted` state, toggled by star button

## Navigation
- Connect Now button → `navigate("/dashboard/view/:id")`
- Send Interest → `navigate("/dashboard/view/:id?interest=sent")` + marks sentInterest
- ProfileDetailPage reads param via `useRoute("/dashboard/view/:id")` and query via `useSearch()`
- wouter v3.10.0 used — `useSearch` is available

**Why:** Filter state must live in MatchesPage (not FilterSidebar) so SubNav tab changes can also filter the same profile list without duplicating logic.
