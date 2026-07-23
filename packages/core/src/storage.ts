import type { AcState, AcStorage } from './types'
import { defaultAcState } from './constants'
import { normalizeAcState } from './reducer'

export function readAcState(storage: AcStorage | null | undefined, storageKey: string): AcState {
  if (!storage)
    return defaultAcState

  try {
    const raw = storage.getItem(storageKey)
    if (!raw)
      return defaultAcState

    return normalizeAcState(JSON.parse(raw) as Partial<AcState>)
  }
  catch {
    return defaultAcState
  }
}

export function writeAcState(storage: AcStorage | null | undefined, storageKey: string, state: AcState): void {
  if (!storage)
    return

  try {
    storage.setItem(storageKey, JSON.stringify(state))
  }
  catch {
    // Storage can be disabled in private browsing or embedded contexts.
  }
}

export function createMemoryStorage(initialValue?: Record<string, string>): AcStorage {
  const values = new Map(Object.entries(initialValue ?? {}))

  return {
    getItem(key) {
      return values.get(key) ?? null
    },
    setItem(key, value) {
      values.set(key, value)
    },
    removeItem(key) {
      values.delete(key)
    },
  }
}

export function getBrowserStorage(): AcStorage | null {
  if (typeof window === 'undefined')
    return null

  try {
    return window.localStorage
  }
  catch {
    return null
  }
}
