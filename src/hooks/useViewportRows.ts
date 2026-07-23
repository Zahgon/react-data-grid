import { useMemo } from 'react';

import { floor, max, min } from '../utils';

interface ViewportRowsArgs<R> {
  rows: readonly R[];
  rowHeight: number | ((row: R) => number);
  clientHeight: number;
  scrollTop: number;
  enableVirtualization: boolean;
}

export function useViewportRows<R>({
  rows,
  rowHeight,
  clientHeight,
  scrollTop,
  enableVirtualization
}: ViewportRowsArgs<R>) {
    throw new Error("STUB");
}
