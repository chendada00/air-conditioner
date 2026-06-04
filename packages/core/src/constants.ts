import type { AcState } from './types'

export const acStorageKey = 'ac:state'

export const minTemperature = 16
export const maxTemperature = 31

export const recommendedColdTemperature = 26
export const recommendedHotTemperature = 20

export const defaultAcState: AcState = {
  mode: 'cold',
  status: false,
  temperature: 26,
}

export const soundTimings = {
  startDelayMs: 8000,
  noiseStartTime: 2,
  noiseDuration: 56,
} as const
