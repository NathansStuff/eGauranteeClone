import { act, fireEvent } from '@testing-library/react';

export function clickElement(element: Element | Node | Document | Window): void {
  act(() => {
    fireEvent.click(element);
  });
}

export function inputTextOnElement(element: Element | Node | Document | Window, newValue: string): void {
  act(() => {
    fireEvent.change(element, { target: { value: newValue } });
  });
}

export function keyDownOnElement(element: Element | Node | Document | Window, key: string): void {
  act(() => {
    fireEvent.keyDown(element, { key: key, code: 'Enter' });
  });
}

export * from '@testing-library/react';
