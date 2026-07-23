import { useState } from 'react';

import { scrollIntoView } from '../utils';
import type { Maybe } from '../types';

export interface PartialPosition {
  readonly idx?: Maybe<number>;
  readonly rowIdx?: Maybe<number>;
}

interface Props {
  gridRef: React.RefObject<HTMLDivElement | null>;
}

export function useScrollToPosition({ gridRef }: Props) {
    throw new Error("STUB");
}
