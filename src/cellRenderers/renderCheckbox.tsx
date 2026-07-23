import { css } from 'ecij';

import type { RenderCheckboxProps } from '../types';

const checkbox = css`
  @layer rdg.CheckboxInput {
    display: block;
    margin: auto;
    inline-size: 20px;
    block-size: 20px;

    &:focus-visible {
      outline: 2px solid var(--rdg-checkbox-focus-color);
      outline-offset: -3px;
    }

    &:enabled {
      cursor: pointer;
    }
  }
`;

const checkboxClassname = `rdg-checkbox-input ${checkbox}`;

export function renderCheckbox({ onChange, indeterminate, ...props }: RenderCheckboxProps) {
    throw new Error("STUB");
}
