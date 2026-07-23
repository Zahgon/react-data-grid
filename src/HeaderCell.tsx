import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { css } from 'ecij';

import { useRovingTabIndex } from './hooks';
import {
  clampColumnWidth,
  getCellClassname,
  getCellStyle,
  getHeaderCellRowSpan,
  getHeaderCellStyle,
  getLeftRightKey,
  isCtrlKeyHeldDown,
  stopPropagation
} from './utils';
import type { CalculatedColumn, SortColumn } from './types';
import type { HeaderRowProps } from './HeaderRow';

const cellSortableClassname = css`
  @layer rdg.HeaderCell {
    cursor: pointer;
  }
`;

const cellResizable = css`
  @layer rdg.HeaderCell {
    touch-action: none;
  }
`;

const cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;

const resizeHandle = css`
  @layer rdg.HeaderCell {
    cursor: col-resize;
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    inset-block-end: 0;
    inline-size: 10px;
  }
`;

const resizeHandleClassname = `rdg-resize-handle ${resizeHandle}`;

const cellDraggableClassname = 'rdg-cell-draggable';

const cellDraggingOrOver = css`
  @layer rdg.HeaderCell {
    background-color: var(--rdg-header-draggable-background-color);
  }
`;

const cellDraggingClassname = `rdg-cell-dragging ${cellDraggingOrOver}`;

const cellOverClassname = `rdg-cell-drag-over ${cellDraggingOrOver}`;

const dragImageClassname = css`
  @layer rdg.HeaderCell {
    border-radius: 4px;
    width: fit-content;
    outline: 2px solid hsl(207, 100%, 50%);
    outline-offset: -2px;
  }
`;

type SharedHeaderRowProps<R, SR> = Pick<
  HeaderRowProps<R, SR, React.Key>,
  | 'sortColumns'
  | 'onSortColumnsChange'
  | 'setPosition'
  | 'onColumnResize'
  | 'onColumnResizeEnd'
  | 'shouldFocusGrid'
  | 'direction'
  | 'onColumnsReorder'
>;

export interface HeaderCellProps<R, SR> extends SharedHeaderRowProps<R, SR> {
  column: CalculatedColumn<R, SR>;
  colSpan: number | undefined;
  rowIdx: number;
  isCellActive: boolean;
  draggedColumnKey: string | undefined;
  setDraggedColumnKey: (draggedColumnKey: string | undefined) => void;
}

export default function HeaderCell<R, SR>({
  column,
  colSpan,
  rowIdx,
  isCellActive,
  onColumnResize,
  onColumnResizeEnd,
  onColumnsReorder,
  sortColumns,
  onSortColumnsChange,
  setPosition,
  shouldFocusGrid,
  direction,
  draggedColumnKey,
  setDraggedColumnKey
}: HeaderCellProps<R, SR>) {
    throw new Error("STUB");
}

type ResizeHandleProps<R, SR> = Pick<
  HeaderCellProps<R, SR>,
  'direction' | 'column' | 'onColumnResize' | 'onColumnResizeEnd'
>;

function ResizeHandle<R, SR>({
  direction,
  column,
  onColumnResize,
  onColumnResizeEnd
}: ResizeHandleProps<R, SR>) {
    throw new Error("STUB");
}

// only accept pertinent drag events:
// - ignore drag events going from the container to an element inside the container
// - ignore drag events going from an element inside the container to the container
function isEventPertinent(event: React.DragEvent) {
    throw new Error("STUB");
}
