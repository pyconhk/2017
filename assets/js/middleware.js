
// eslint-disable-next-line import/prefer-default-export
export const logger = store => (next: Function) => (action: Object) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};
