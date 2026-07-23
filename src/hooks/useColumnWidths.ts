import { useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';

import type { CalculatedColumn, ColumnWidths, ResizedWidth } from '../types';
import type { DataGridProps } from '../DataGrid';

export function useColumnWidths<R, SR>(
  columns: readonly CalculatedColumn<R, SR>[],
  viewportColumns: readonly CalculatedColumn<R, SR>[],
  templateColumns: readonly string[],
  gridRef: React.RefObject<HTMLDivElement | null>,
  gridWidth: number,
  columnWidths: ColumnWidths,
  onColumnWidthsChange: (columnWidths: ColumnWidths) => void,
  onColumnResize: DataGridProps<R, SR>['onColumnResize'],
  setColumnResizing: (isColumnResizing: boolean) => void
) {
    throw new Error("STUB");
}

function measureColumnWidth(gridRef: React.RefObject<HTMLDivElement | null>, key: string) {
    throw new Error("STUB");
}
