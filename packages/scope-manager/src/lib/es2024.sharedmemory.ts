// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { ImplicitLibVariableOptions } from '../variable';

import { TYPE } from './base-config';
import { es2020_bigint } from './es2020.bigint';

export const es2024_sharedmemory = {
  ...es2020_bigint,
  Atomics: TYPE,
  SharedArrayBuffer: TYPE,
  SharedArrayBufferConstructor: TYPE,
} as Record<string, ImplicitLibVariableOptions>;