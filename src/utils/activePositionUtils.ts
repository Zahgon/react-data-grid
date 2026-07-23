import type {
  CalculatedColumn,
  CalculatedColumnParent,
  CellNavigationMode,
  Maybe,
  Position
} from '../types';
import { getColSpan } from './colSpanUtils';

// https://github.com/vercel/next.js/issues/56480
export function isCellEditableUtil<R, SR>(column: CalculatedColumn<R, SR>, row: R): boolean {
    throw new Error("STUB");
}

interface GetNextPositionOpts<R, SR> {
  moveUp: boolean;
  moveNext: boolean;
  cellNavigationMode: CellNavigationMode;
  columns: readonly CalculatedColumn<R, SR>[];
  colSpanColumns: readonly CalculatedColumn<R, SR>[];
  rows: readonly R[];
  topSummaryRows: Maybe<readonly SR[]>;
  bottomSummaryRows: Maybe<readonly SR[]>;
  minRowIdx: number;
  mainHeaderRowIdx: number;
  maxRowIdx: number;
  activePosition: Position;
  nextPosition: Position;
  nextPositionIsCellInActiveBounds: boolean;
  lastStartFrozenColumnIndex: number;
  firstEndFrozenColumnIndex: number;
}

function getCellColSpan<R, SR>({
  rows,
  topSummaryRows,
  bottomSummaryRows,
  rowIdx,
  mainHeaderRowIdx,
  lastStartFrozenColumnIndex,
  firstEndFrozenColumnIndex,
  column
}: Pick<
  GetNextPositionOpts<R, SR>,
  | 'rows'
  | 'topSummaryRows'
  | 'bottomSummaryRows'
  | 'lastStartFrozenColumnIndex'
  | 'firstEndFrozenColumnIndex'
  | 'mainHeaderRowIdx'
> & {
  rowIdx: number;
  column: CalculatedColumn<R, SR>;
}) {
    throw new Error("STUB");
}

export function getNextActivePosition<R, SR>({
  moveUp,
  moveNext,
  cellNavigationMode,
  columns,
  colSpanColumns,
  rows,
  topSummaryRows,
  bottomSummaryRows,
  minRowIdx,
  mainHeaderRowIdx,
  maxRowIdx,
  activePosition: { idx: activeIdx, rowIdx: activeRowIdx },
  nextPosition,
  nextPositionIsCellInActiveBounds,
  lastStartFrozenColumnIndex,
  firstEndFrozenColumnIndex
}: GetNextPositionOpts<R, SR>): Position {
    throw new Error("STUB");
}

interface CanExitGridOpts {
  maxColIdx: number;
  minRowIdx: number;
  maxRowIdx: number;
  activePosition: Position;
  shiftKey: boolean;
}

export function canExitGrid({
  maxColIdx,
  minRowIdx,
  maxRowIdx,
  activePosition: { rowIdx, idx },
  shiftKey
}: CanExitGridOpts): boolean {
    throw new Error("STUB");
}
