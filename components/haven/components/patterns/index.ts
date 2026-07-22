// Reusable, accessibility-first Stripe-Dashboard UI patterns (DESIGN.md §5).
// Presentational only — props in, markup out. Compose `components/ui/*`.

export { PageHeader } from "./page-header"
export { Breadcrumb, type BreadcrumbItem } from "./breadcrumb"
export { Section } from "./section"
export { StatGroup, type Stat } from "./stat-group"
export {
  StatusBadge,
  statusToneDefaults,
  type StatusDescriptor,
} from "./status-badge"
export { EmptyState } from "./empty-state"
export { PageLoading } from "./page-loading"
export { Callout } from "./callout"
export { Pagination } from "./pagination"
export { KeyValuePanel, CopyId, CopyButton, type KeyValueRow } from "./key-value-panel"
export { MetricCard, Sparkline } from "./metric-card"
export { FilterBar, FilterChip } from "./filter-bar"
export { SearchInput } from "./search-input"
export { ViewSegments, type ViewSegment } from "./view-segments"
export { DataTable, type DataTableColumn } from "./data-table"
export { IconTile, InfoTip } from "./icon-tile"
export { SetupGuidePill, ProgressRing } from "./setup-guide-pill"
