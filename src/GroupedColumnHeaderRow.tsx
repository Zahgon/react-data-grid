import { memo } from 'react';

import type { CalculatedColumnParent, IterateOverViewportColumnsForRow, Position } from './types';
import GroupedColumnHeaderCell from './GroupedColumnHeaderCell';
import { headerRowClassname } from './HeaderRow';

export interface GroupedColumnHeaderRowProps<R, SR> {
  rowIdx: number;
  level: number;
  iterateOverViewportColumnsForRow: IterateOverViewportColumnsForRow<R, SR>;
  activeCellIdx: number | undefined;
  setPosition: (position: Position) => void;
}

function GroupedColumnHeaderRow<R, SR>({
  rowIdx,
  level,
  iterateOverViewportColumnsForRow,
  activeCellIdx,
  setPosition
}: GroupedColumnHeaderRowProps<R, SR>) {
    throw new Error("STUB");
}

export default memo(GroupedColumnHeaderRow) as <R, SR>(
  props: GroupedColumnHeaderRowProps<R, SR>
) => React.JSX.Element;
