import { css } from 'ecij';

import type { RenderGroupCellProps } from '../types';

const groupCellContent = css`
  @layer rdg.GroupCellContent {
    outline: none;
  }
`;

const groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;

const caret = css`
  @layer rdg.GroupCellCaret {
    margin-inline-start: 4px;
    stroke: currentColor;
    stroke-width: 1.5px;
    fill: transparent;
    vertical-align: middle;

    > path {
      transition: d 0.1s;
    }
  }
`;

const caretClassname = `rdg-caret ${caret}`;

export function renderToggleGroup<R, SR>(props: RenderGroupCellProps<R, SR>) {
    throw new Error("STUB");
}

export function ToggleGroup<R, SR>({
  groupKey,
  isExpanded,
  tabIndex,
  toggleGroup
}: RenderGroupCellProps<R, SR>) {
    throw new Error("STUB");
}
