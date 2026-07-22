"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Checkbox } from "../ui/checkbox"
import { cn } from "../../lib/utils"

type Align = "start" | "center" | "end"

const ALIGN_CLASS: Record<Align, string> = {
  start: "text-left",
  center: "text-center",
  end: "text-right",
}

export type DataTableColumn<Row> = {
  /** Stable key; also used to read `row[key]` when no `cell` is given. */
  key: string
  header?: React.ReactNode
  align?: Align
  /** Custom cell renderer. Defaults to `String(row[key])`. */
  cell?: (row: Row, index: number) => React.ReactNode
  /** Extra classes for the body cell. */
  className?: string
}

/**
 * DataTable (DESIGN.md §5.7) — a generic, presentational wrapper over the
 * `components/ui/table` primitive. Sentence-case `<th scope="col">` headers,
 * hover rows, no outer border. Optional selection checkbox column, row click,
 * and a trailing overflow slot per row.
 */
export function DataTable<Row>({
  columns,
  rows,
  getRowId,
  selectable,
  selectedIds,
  onSelectedChange,
  onRowClick,
  rowOverflow,
  emptyState,
  className,
}: {
  columns: DataTableColumn<Row>[]
  rows: Row[]
  /** Stable id per row (required for selection). Defaults to the index. */
  getRowId?: (row: Row, index: number) => string
  selectable?: boolean
  selectedIds?: string[]
  onSelectedChange?: (ids: string[]) => void
  onRowClick?: (row: Row, index: number) => void
  /** Trailing per-row overflow slot (e.g. a `⋯` menu). */
  rowOverflow?: (row: Row, index: number) => React.ReactNode
  /** Rendered in place of the table body when there are no rows. */
  emptyState?: React.ReactNode
  className?: string
}) {
  const rowId = React.useCallback(
    (row: Row, i: number) => getRowId?.(row, i) ?? String(i),
    [getRowId]
  )

  const selected = React.useMemo(
    () => new Set(selectedIds ?? []),
    [selectedIds]
  )
  const allSelected = rows.length > 0 && rows.every((r, i) => selected.has(rowId(r, i)))
  const someSelected = rows.some((r, i) => selected.has(rowId(r, i)))

  const toggleAll = (checked: boolean) => {
    onSelectedChange?.(checked ? rows.map((r, i) => rowId(r, i)) : [])
  }

  const toggleRow = (id: string, checked: boolean) => {
    const next = new Set(selected)
    if (checked) next.add(id)
    else next.delete(id)
    onSelectedChange?.([...next])
  }

  const colCount =
    columns.length + (selectable ? 1 : 0) + (rowOverflow ? 1 : 0)

  return (
    <Table className={className}>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          {selectable && (
            <TableHead className="w-10">
              <Checkbox
                aria-label="Select all rows"
                checked={allSelected}
                indeterminate={!allSelected && someSelected}
                onCheckedChange={(checked) => toggleAll(checked === true)}
              />
            </TableHead>
          )}
          {columns.map((col) => (
            <TableHead
              key={col.key}
              scope="col"
              className={cn(
                "text-[13px] font-medium text-muted-foreground",
                ALIGN_CLASS[col.align ?? "start"]
              )}
            >
              {col.header}
            </TableHead>
          ))}
          {rowOverflow && <TableHead className="w-10" />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.length === 0 && emptyState ? (
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={colCount} className="whitespace-normal p-0">
              {emptyState}
            </TableCell>
          </TableRow>
        ) : (
          rows.map((row, i) => {
            const id = rowId(row, i)
            const isSelected = selected.has(id)
            const clickable = !!onRowClick
            return (
              <TableRow
                key={id}
                data-state={isSelected ? "selected" : undefined}
                onClick={clickable ? () => onRowClick?.(row, i) : undefined}
                className={cn(clickable && "cursor-pointer")}
              >
                {selectable && (
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      aria-label={`Select row ${i + 1}`}
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        toggleRow(id, checked === true)
                      }
                    />
                  </TableCell>
                )}
                {columns.map((col, ci) => (
                  <TableCell
                    key={col.key}
                    className={cn(
                      ALIGN_CLASS[col.align ?? "start"],
                      // First data column is the primary identifier.
                      ci === 0 && "font-medium text-foreground",
                      col.className
                    )}
                  >
                    {col.cell
                      ? col.cell(row, i)
                      : String(
                          (row as Record<string, unknown>)[col.key] ?? ""
                        )}
                  </TableCell>
                ))}
                {rowOverflow && (
                  <TableCell
                    className="text-right"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {rowOverflow(row, i)}
                  </TableCell>
                )}
              </TableRow>
            )
          })
        )}
      </TableBody>
    </Table>
  )
}
