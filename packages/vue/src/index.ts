export { default as AirConditioner } from './components/AirConditioner.vue'
export { default as AirConditionerProvider } from './components/AirConditionerProvider.vue'
export { default as AirConditionerWidget } from './components/AirConditionerWidget.vue'
export { default as RemoteControl } from './components/RemoteControl.vue'
export {
  airConditionerKey,
  createAirConditionerContext,
  useAirConditioner,
  useOptionalAirConditioner,
} from './composables/useAirConditioner'
export type {
  AirConditionerContextValue,
  AirConditionerProviderOptions,
} from './composables/useAirConditioner'
