export interface AppState {
  loading: boolean
  menuOpen: boolean
  transitioning: boolean
  touch: boolean
}

export class StateMachine {
  state: AppState = {
    loading: true,
    menuOpen: false,
    transitioning: false,
    touch: false
  }

  detectTouch() {
    this.state.touch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }

  setLoading(value: boolean) {
    this.state.loading = value
    document.body.classList.toggle('is-loading', value)
  }

  toggleMenu() {
    this.state.menuOpen = !this.state.menuOpen
  }

  setTransitioning(value: boolean) {
    this.state.transitioning = value
  }
}
