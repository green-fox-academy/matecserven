'use strict';
export { }

export function fibonacci(n: number): number {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
