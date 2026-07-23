import { memo, useMemo } from 'react';

import { RowSelectionContext, type RowSelectionContextValue } from './hooks';
import { classnames } from './utils';
import type { RenderRowProps } from './types';
import { useDefaultRenderers } from './DataGridDefaultRenderersContext';
import { rowClassname, rowActiveClassname } from './style/row';

function Row<R, SR>({
  className,
  rowIdx,
  gridRowStart,
  activeCellIdx,
  isRowSelectionDisabled,
  isRowSelected,
  draggedOverCellIdx,
  row,
  iterateOverViewportColumnsForRow,
  activeCellEditor,
  isTreeGrid,
  onCellMouseDown,
  onCellClick,
  onCellDoubleClick,
  onCellContextMenu,
  rowClass,
  onRowChange,
  setActivePosition,
  style,
  ...props
}: RenderRowProps<R, SR>) {
    throw new Error("STUB");
}

const RowComponent = memo(Row) as <R, SR>(props: RenderRowProps<R, SR>) => React.JSX.Element;

export default RowComponent;

export function defaultRenderRow<R, SR>(key: React.Key, props: RenderRowProps<R, SR>) {
    throw new Error("STUB");
}
