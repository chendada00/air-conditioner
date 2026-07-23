import type { AirConditionerProviderProps } from './context'
import { AirConditioner } from './AirConditioner'
import { AirConditionerProvider, useAirConditioner } from './context'
import { RemoteControl } from './RemoteControl'

export interface AirConditionerWidgetProps extends AirConditionerProviderProps {
  title?: string
}

function Notification() {
  const { notification } = useAirConditioner()

  if (!notification)
    return null

  return (
    <div className="acw-notification" data-severity={notification.severity} role="status">
      {notification.message}
    </div>
  )
}

function WidgetContent(props: Pick<AirConditionerWidgetProps, 'title'>) {
  return (
    <div className="acw-root">
      <AirConditioner title={props.title} />
      <RemoteControl />
      <Notification />
    </div>
  )
}

export function AirConditionerWidget(props: AirConditionerWidgetProps = {}) {
  const {
    title,
    children: _children,
    ...providerProps
  } = props

  return (
    <AirConditionerProvider {...providerProps}>
      <WidgetContent title={title} />
    </AirConditionerProvider>
  )
}
