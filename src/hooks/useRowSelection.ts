import { createContext, use } from 'react';

import type { SelectHeaderRowEvent, SelectRowEvent } from '../types';

export interface RowSelectionContextValue {
  readonly isRowSelected: boolean;
  readonly isRowSelectionDisabled: boolean;
}

export const RowSelectionContext = createContext<RowSelectionContextValue | undefined>(undefined);
RowSelectionContext.displayName = 'RowSelectionContext';

export const RowSelectionChangeContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((selectRowEvent: SelectRowEvent<any>) => void) | undefined
>(undefined);
RowSelectionChangeContext.displayName = 'RowSelectionChangeContext';

export function useRowSelection() {
    throw new Error("STUB");
}

export interface HeaderRowSelectionContextValue {
  readonly isRowSelected: boolean;
  readonly isIndeterminate: boolean;
}

export const HeaderRowSelectionContext = createContext<HeaderRowSelectionContextValue | undefined>(
  undefined
);
HeaderRowSelectionContext.displayName = 'HeaderRowSelectionContext';

export const HeaderRowSelectionChangeContext = createContext<
  ((selectRowEvent: SelectHeaderRowEvent) => void) | undefined
>(undefined);
HeaderRowSelectionChangeContext.displayName = 'HeaderRowSelectionChangeContext';

export function useHeaderRowSelection() {
    throw new Error("STUB");
}
