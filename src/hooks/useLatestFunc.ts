import { useCallback, useLayoutEffect, useRef } from 'react';

import type { Maybe } from '../types';

// https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLatestFunc<T extends Maybe<(...args: any[]) => any>>(fn: T): T {
    throw new Error("STUB");
}
