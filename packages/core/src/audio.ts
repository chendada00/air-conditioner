import type { AcAudioController, AcAudioElements } from './types'
import { soundTimings } from './constants'

export function createAcAudioController(elements: AcAudioElements): AcAudioController {
  let playStartSoundTimeoutId: ReturnType<typeof setTimeout> | undefined
  let playWorkSoundTimeoutId: ReturnType<typeof setTimeout> | undefined
  let playWorkSoundIntervalId: ReturnType<typeof setInterval> | undefined

  function clearWorkTimers() {
    if (playStartSoundTimeoutId)
      clearTimeout(playStartSoundTimeoutId)
    if (playWorkSoundTimeoutId)
      clearTimeout(playWorkSoundTimeoutId)
    if (playWorkSoundIntervalId)
      clearInterval(playWorkSoundIntervalId)

    playStartSoundTimeoutId = undefined
    playWorkSoundTimeoutId = undefined
    playWorkSoundIntervalId = undefined
  }

  function play(audio: AcAudioElements[keyof AcAudioElements]) {
    if (!audio)
      return

    audio.load()
    void audio.play()
  }

  function playWorkSound() {
    if (!elements.work)
      return

    play(elements.work)
    playWorkSoundTimeoutId = setTimeout(() => {
      playWorkSoundIntervalId = setInterval(() => {
        if (elements.work)
          elements.work.currentTime = soundTimings.noiseStartTime
      }, soundTimings.noiseDuration * 1000)
    }, soundTimings.noiseStartTime * 1000)
  }

  function playStartSound() {
    play(elements.start)
    playStartSoundTimeoutId = setTimeout(() => {
      playWorkSound()
    }, soundTimings.startDelayMs)
  }

  return {
    beep() {
      play(elements.beep)
    },
    toggleStatusAudio(previousStatus: boolean) {
      if (previousStatus) {
        clearWorkTimers()
        if (elements.start)
          elements.start.load()
        if (elements.work)
          elements.work.currentTime = soundTimings.noiseStartTime + soundTimings.noiseDuration
      }
      else {
        clearWorkTimers()
        playStartSound()
      }
    },
    dispose() {
      clearWorkTimers()
    },
  }
}
