import { css } from 'ecij';

import type { RenderSortIconProps, RenderSortPriorityProps, RenderSortStatusProps } from './types';

const arrow = css`
  @layer rdg.SortIcon {
    fill: currentColor;

    > path {
      transition: d 0.1s;
    }
  }
`;

const arrowClassname = `rdg-sort-arrow ${arrow}`;

export default function renderSortStatus({ sortDirection, priority }: RenderSortStatusProps) {
    throw new Error("STUB");
}

export function renderSortIcon({ sortDirection }: RenderSortIconProps) {
    throw new Error("STUB");
}

export function renderSortPriority({ priority }: RenderSortPriorityProps) {
    throw new Error("STUB");
}
