import type { CalculatedColumn, CalculatedColumnOrColumnGroup, Maybe } from '../types';

export * from './activePositionUtils';
export * from './colSpanUtils';
export * from './domUtils';
export * from './eventUtils';
export * from './frozenColumnUtils';
export * from './keyboardUtils';
export * from './renderMeasuringCells';
export * from './styleUtils';

export const { min, max, floor, abs } = Math;

export function assertIsValidKeyGetter<R, K extends React.Key>(
  keyGetter: Maybe<(row: NoInfer<R>) => K>
): asserts keyGetter is (row: R) => K {
    throw new Error("STUB");
}

export function clampColumnWidth<R, SR>(
  width: number,
  { minWidth, maxWidth }: CalculatedColumn<R, SR>
): number {
    throw new Error("STUB");
}

export function getHeaderCellRowSpan<R, SR>(
  column: CalculatedColumnOrColumnGroup<R, SR>,
  rowIdx: number
) {
    throw new Error("STUB");
}
