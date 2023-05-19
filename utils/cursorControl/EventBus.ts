type Unsubscribe = () => void;
let INSTANCE = 0;
class EventBus<EventsDefinitions = Record<string, any>> {
  private eventBus;

  constructor() {
    INSTANCE++;
    this.eventBus = new Comment('nm-pubsub-event-bus-' + INSTANCE);
  }

  private isCustomEvent = (event: Event): event is CustomEvent =>
    'detail' in event;

  public publish = <T extends keyof EventsDefinitions>(
    eventName: T,
    payload?: EventsDefinitions[T]
  ): void => {
    const event = payload
      ? new CustomEvent(String(eventName), { detail: payload })
      : new CustomEvent(String(eventName));
    this.eventBus.dispatchEvent(event);
  };

  public subscribe = <T extends keyof EventsDefinitions>(
    eventName: keyof EventsDefinitions,
    handlerFn: (payload: EventsDefinitions[T]) => void
  ): Unsubscribe => {
    const eventHandler = (event: Event) => {
      if (this.isCustomEvent(event)) {
        const eventPayload: EventsDefinitions[T] = event.detail;
        handlerFn(eventPayload);
      }
    };
    this.eventBus.addEventListener(String(eventName), eventHandler);
    return () => {
      this.eventBus.removeEventListener(String(eventName), eventHandler);
    };
  };
}

export default EventBus;
