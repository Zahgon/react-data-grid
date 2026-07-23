import { memo, useState } from 'react';
import { css } from 'ecij';

import { classnames } from './utils';
import type {
  CalculatedColumn,
  Direction,
  IterateOverViewportColumnsForRow,
  Maybe,
  Position,
  ResizedWidth
} from './types';
import type { DataGridProps } from './DataGrid';
import HeaderCell from './HeaderCell';
import { cell, cellFrozenBase } from './style/cell';
import { rowActiveClassname } from './style/row';

type SharedDataGridProps<R, SR, K extends React.Key> = Pick<
  DataGridProps<R, SR, K>,
  'sortColumns' | 'onSortColumnsChange' | 'onColumnsReorder'
>;

export interface HeaderRowProps<R, SR, K extends React.Key> extends SharedDataGridProps<R, SR, K> {
  rowIdx: number;
  iterateOverViewportColumnsForRow: IterateOverViewportColumnsForRow<R, SR>;
  onColumnResize: (column: CalculatedColumn<R, SR>, width: ResizedWidth) => void;
  onColumnResizeEnd: () => void;
  activeCellIdx: number | undefined;
  setPosition: (position: Position) => void;
  shouldFocusGrid: boolean;
  direction: Direction;
  headerRowClass: Maybe<string>;
}

const headerRow = css`
  @layer rdg.HeaderRow {
    display: contents;
    background-color: var(--rdg-header-background-color);
    font-weight: bold;

    & > .${cell} {
      /* Should have a higher value than 1 to show up above regular cells and the focus sink */
      z-index: 2;
      position: sticky;
    }

    & > .${cellFrozenBase} {
      z-index: 3;
    }
  }
`;

export const headerRowClassname = `rdg-header-row ${headerRow}`;

function HeaderRow<R, SR, K extends React.Key>({
  headerRowClass,
  rowIdx,
  iterateOverViewportColumnsForRow,
  onColumnResize,
  onColumnResizeEnd,
  onColumnsReorder,
  sortColumns,
  onSortColumnsChange,
  activeCellIdx,
  setPosition,
  shouldFocusGrid,
  direction
}: HeaderRowProps<R, SR, K>) {
    throw new Error("STUB");
}

export default memo(HeaderRow) as <R, SR, K extends React.Key>(
  props: HeaderRowProps<R, SR, K>
) => React.JSX.Element;
