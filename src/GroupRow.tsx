import { memo, useMemo } from 'react';
import { css } from 'ecij';

import { RowSelectionContext, type RowSelectionContextValue } from './hooks';
import { classnames } from './utils';
import type { BaseRenderRowProps, GroupRow, Omit } from './types';
import { SELECT_COLUMN_KEY } from './Columns';
import GroupCell from './GroupCell';
import { cell, cellFrozenBase } from './style/cell';
import { rowClassname, rowActiveClassname } from './style/row';

const groupRow = css`
  @layer rdg.GroupedRow {
    &:not([aria-selected='true']) {
      background-color: var(--rdg-header-background-color);
    }

    > .${cell}:not(:last-child, .${cellFrozenBase}), > :nth-last-child(n + 2 of .rdg-cell-frozen-start), > :nth-last-child(n + 2 of .rdg-cell-frozen-end) {
      border-inline-end: none;
    }
  }
`;

const groupRowClassname = `rdg-group-row ${groupRow}`;

interface GroupRowRendererProps<R, SR> extends Omit<
  BaseRenderRowProps<R, SR>,
  'isRowSelectionDisabled'
> {
  row: GroupRow<R>;
  groupBy: readonly string[];
  toggleGroup: (expandedGroupId: unknown) => void;
}

function GroupedRow<R, SR>({
  className,
  row,
  rowIdx,
  iterateOverViewportColumnsForRow,
  activeCellIdx,
  isRowSelected,
  setActivePosition,
  gridRowStart,
  groupBy,
  toggleGroup,
  ...props
}: GroupRowRendererProps<R, SR>) {
    throw new Error("STUB");
}

export default memo(GroupedRow) as <R, SR>(
  props: GroupRowRendererProps<R, SR>
) => React.JSX.Element;
