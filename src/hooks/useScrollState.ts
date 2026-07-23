import { useCallback, useSyncExternalStore } from 'react';

import { abs } from '../utils';

interface ScrollState {
  readonly scrollTop: number;
  readonly scrollLeft: number;
}

const initialScrollState: ScrollState = {
  scrollTop: 0,
  scrollLeft: 0
};

function getServerSnapshot() {
    throw new Error("STUB");
}

const scrollStateMap = new WeakMap<React.RefObject<HTMLDivElement | null>, ScrollState>();

export function useScrollState(gridRef: React.RefObject<HTMLDivElement | null>): ScrollState {
    throw new Error("STUB");
}
