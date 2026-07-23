import type { Maybe } from '../types';

export function stopPropagation(event: React.SyntheticEvent) {
    throw new Error("STUB");
}

export function scrollIntoView(element: Maybe<Element>, behavior: ScrollBehavior = 'instant') {
    throw new Error("STUB");
}

function getRowToScroll(gridEl: HTMLDivElement) {
    throw new Error("STUB");
}

export function getCellToScroll(gridEl: HTMLDivElement) {
    throw new Error("STUB");
}

function focusElement(element: HTMLDivElement | null, shouldScroll: boolean) {
    throw new Error("STUB");
}

export function focusRow(gridEl: HTMLDivElement) {
    throw new Error("STUB");
}

export function focusCell(gridEl: HTMLDivElement, shouldScroll = true) {
    throw new Error("STUB");
}
