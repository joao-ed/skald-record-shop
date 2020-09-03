export function updateAction(state: any, payload: any) {
  const { data, section } = payload

  return {
    ...state,
    data: {
      ...state.data,
      ...data
    },
    section
  }
}

export function reset() {
  return {
    data: {},
    section: 0
  }
}
