import {BUTTONS, EVENTS} from '../utils/consts'

export function navigate (href){
  window.history.pushState({}, '', href)
  //creo un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  //envia el evento
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props}) {
    const handleClick = (event) => {
        const isMainEvent = event.button === BUTTONS.primary // primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
        event.preventDefault()
        navigate(to) // navegación con SPA
        }
  }
    return <a onClick={handleClick} href={to} target={target} {...props}/>
}