import { useCallback, useLayoutEffect, useSyncExternalStore, type RefObject } from 'react';

const initialSize: ResizeObserverSize = {
  inlineSize: 1,
  blockSize: 1
};

// use an unmanaged WeakMap so we preserve the cache even when
// the component partially unmounts via Suspense or Activity
const sizeMap = new WeakMap<RefObject<HTMLDivElement | null>, ResizeObserverSize>();
const targetToRefMap = new WeakMap<HTMLDivElement, RefObject<HTMLDivElement | null>>();
const subscribers = new Map<RefObject<HTMLDivElement | null>, () => void>();

// don't break in Node.js (SSR), jsdom, and environments that don't support ResizeObserver
const resizeObserver =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  globalThis.ResizeObserver == null ? null : new ResizeObserver(resizeObserverCallback);

function resizeObserverCallback(entries: ResizeObserverEntry[]) {
    throw new Error("STUB");
}

function updateSize(ref: RefObject<HTMLDivElement | null>, size: ResizeObserverSize) {
    throw new Error("STUB");
}

function getServerSnapshot(): ResizeObserverSize {
    throw new Error("STUB");
}

export function useGridDimensions(gridRef: React.RefObject<HTMLDivElement | null>) {
    throw new Error("STUB");
}
