import { useLayoutEffect, useRef, useState } from 'react';

import { focusCell, focusRow } from '../utils';
import type { CalculatedColumn, Position, StateSetter } from '../types';

export interface ActivePosition extends Position {
  readonly mode: 'ACTIVE';
}

interface EditPosition<R> extends Position {
  readonly mode: 'EDIT';
  readonly row: R;
  readonly originalRow: R;
}

const initialActivePosition: ActivePosition = {
  idx: -1,
  // use -Infinity to avoid issues when adding header rows or top summary rows
  rowIdx: Number.NEGATIVE_INFINITY,
  mode: 'ACTIVE'
};

export function useActivePosition<R, SR>({
  gridRef,
  columns,
  rows,
  isTreeGrid,
  maxColIdx,
  minRowIdx,
  maxRowIdx,
  setDraggedOverRowIdx
}: {
  gridRef: React.RefObject<HTMLDivElement | null>;
  columns: readonly CalculatedColumn<R, SR>[];
  rows: readonly R[];
  isTreeGrid: boolean;
  maxColIdx: number;
  minRowIdx: number;
  maxRowIdx: number;
  setDraggedOverRowIdx: StateSetter<number | undefined>;
}) {
    throw new Error("STUB");
}
