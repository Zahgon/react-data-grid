import { useRovingTabIndex } from './hooks';
import { classnames, getHeaderCellRowSpan, getHeaderCellStyle } from './utils';
import type { CalculatedColumnParent } from './types';
import type { GroupedColumnHeaderRowProps } from './GroupedColumnHeaderRow';
import { cellClassname } from './style/cell';

type SharedGroupedColumnHeaderRowProps<R, SR> = Pick<
  GroupedColumnHeaderRowProps<R, SR>,
  'rowIdx' | 'setPosition'
>;

interface GroupedColumnHeaderCellProps<R, SR> extends SharedGroupedColumnHeaderRowProps<R, SR> {
  column: CalculatedColumnParent<R, SR>;
  isCellActive: boolean;
}

export default function GroupedColumnHeaderCell<R, SR>({
  column,
  rowIdx,
  isCellActive,
  setPosition
}: GroupedColumnHeaderCellProps<R, SR>) {
    throw new Error("STUB");
}
