import type { CalculatedColumn, ColSpanArgs } from '../types';
import { isStartFrozen } from './frozenColumnUtils';

export function getColSpan<R, SR>(
  column: CalculatedColumn<R, SR>,
  lastStartFrozenColumnIndex: number,
  firstEndFrozenColumnIndex: number,
  args: ColSpanArgs<R, SR>
): number | undefined {
    throw new Error("STUB");
}
