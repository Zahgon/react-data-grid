import type { CalculatedColumn, CalculatedColumnOrColumnGroup, Maybe } from '../types';
import { isStartFrozen } from './frozenColumnUtils';
import { cellClassname, cellFrozenStartClassname, cellFrozenEndClassname } from '../style/cell';

export function getHeaderCellStyle<R, SR>(
  column: CalculatedColumnOrColumnGroup<R, SR>,
  rowIdx: number,
  rowSpan: number
): React.CSSProperties {
    throw new Error("STUB");
}

export function getCellStyle<R, SR>(
  column: CalculatedColumn<R, SR>,
  colSpan = 1
): React.CSSProperties {
    throw new Error("STUB");
}

type ClassValue = Maybe<string | false>;

export function classnames(...args: readonly ClassValue[]) {
    throw new Error("STUB");
}

export function getCellClassname<R, SR>(
  column: CalculatedColumn<R, SR>,
  ...extraClasses: readonly ClassValue[]
): string {
    throw new Error("STUB");
}
