import { useEffectEvent, useLayoutEffect, useRef } from 'react';
import { css } from 'ecij';

import { createCellEvent, getCellClassname, getCellStyle, onEditorNavigation } from './utils';
import type {
  CellKeyboardEvent,
  CellRendererProps,
  EditCellKeyDownArgs,
  Maybe,
  Omit,
  RenderEditCellProps
} from './types';

/*
 * To check for outside `mousedown` events, we listen to all `mousedown` events at their birth,
 * i.e. on the window during the capture phase, and at their death, i.e. on the window during the bubble phase.
 *
 * We schedule a check at the birth of the event, cancel the check when the event reaches the "inside" container,
 * and trigger the "outside" callback when the event bubbles back up to the window.
 *
 * The event can be `stopPropagation()`ed halfway through, so they may not always bubble back up to the window,
 * so an alternative check must be used. The check must happen after the event can reach the "inside" container,
 * and not before it run to completion. `postTask`/`requestAnimationFrame` are the best way we know to achieve this.
 * Usually we want click event handlers from parent components to access the latest committed values,
 * so `mousedown` is used instead of `click`.
 *
 * We must also rely on React's event capturing/bubbling to handle elements rendered in a portal.
 */

const canUsePostTask = typeof scheduler === 'object' && typeof scheduler.postTask === 'function';

const cellEditing = css`
  @layer rdg.EditCell {
    padding: 0;
  }
`;

type SharedCellRendererProps<R, SR> = Pick<CellRendererProps<R, SR>, 'colSpan'>;

interface EditCellProps<R, SR>
  extends
    Omit<RenderEditCellProps<R, SR>, 'onRowChange' | 'onClose'>,
    SharedCellRendererProps<R, SR> {
  rowIdx: number;
  onRowChange: (row: R, commitChanges: boolean, shouldFocus: boolean) => void;
  closeEditor: (shouldFocus: boolean) => void;
  navigate: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onKeyDown: Maybe<(args: EditCellKeyDownArgs<R, SR>, event: CellKeyboardEvent) => void>;
}

export default function EditCell<R, SR>({
  column,
  colSpan,
  row,
  rowIdx,
  onRowChange,
  closeEditor,
  onKeyDown,
  navigate
}: EditCellProps<R, SR>) {
    throw new Error("STUB");
}
