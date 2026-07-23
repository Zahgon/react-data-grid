import { useHeaderRowSelection, useRowSelection } from './hooks';
import type { Column, RenderCellProps, RenderGroupCellProps, RenderHeaderCellProps } from './types';
import { SelectCellFormatter } from './cellRenderers';

export const SELECT_COLUMN_KEY = 'rdg-select-column';

function HeaderRenderer({ tabIndex }: RenderHeaderCellProps<unknown>) {
    throw new Error("STUB");
}

function SelectFormatter({ row, tabIndex }: RenderCellProps<unknown>) {
    throw new Error("STUB");
}

function SelectGroupFormatter({ row, tabIndex }: RenderGroupCellProps<unknown>) {
    throw new Error("STUB");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectColumn: Column<any, any> = {
  key: SELECT_COLUMN_KEY,
  name: '',
  width: 35,
  minWidth: 35,
  maxWidth: 35,
  resizable: false,
  sortable: false,
  frozen: true,
  renderHeaderCell(props) {
      throw new Error("STUB");
  },
  renderCell(props) {
      throw new Error("STUB");
  },
  renderGroupCell(props) {
      throw new Error("STUB");
  }
};
