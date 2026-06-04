export type AcMode = 'cold' | 'hot'

export interface AcState {
  /**
   * Whether the air conditioner is powered on.
   */
  status: boolean
  /**
   * Current work mode.
   */
  mode: AcMode
  /**
   * Target temperature in Celsius.
   */
  temperature: number
}

export type AcAction
  = | { type: 'increment' | 'decrement' | 'toggleStatus' }
    | { type: 'status', status: AcState['status'] }
    | { type: 'mode', mode: AcState['mode'] }
    | { type: 'update', payload: Partial<AcState> }

export type AcNotificationSeverity = 'success' | 'error' | 'info'

export interface AcNotification {
  message: string
  severity: AcNotificationSeverity
}

export interface AcChangeEvent {
  action: AcAction
  previousState: AcState
  state: AcState
  notification?: AcNotification
}

export type AcStoreListener = (event: AcChangeEvent) => void

export interface AcStorage {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem?: (key: string) => void
}

export interface CreateAirConditionerStoreOptions {
  initialState?: Partial<AcState>
  storage?: AcStorage | null
  storageKey?: string
  onNotify?: (notification: AcNotification, event: AcChangeEvent) => void
}

export interface AirConditionerStore {
  getState: () => AcState
  dispatch: (action: AcAction) => AcChangeEvent
  subscribe: (listener: AcStoreListener) => () => void
}

export interface AcAudioElement {
  currentTime: number
  load: () => void
  play: () => Promise<unknown> | unknown
}

export interface AcAudioElements {
  start: AcAudioElement | null
  work: AcAudioElement | null
  beep?: AcAudioElement | null
}

export interface AcAudioController {
  beep: () => void
  toggleStatusAudio: (previousStatus: boolean) => void
  dispose: () => void
}
