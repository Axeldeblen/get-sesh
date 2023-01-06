import type { Handle } from "@sveltejs/kit";
type InferFirstArg<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : T;

const getLocals = (event: InferFirstArg<Handle>['event']) => {
  const lang = event.request.headers.get('accept-language')
  const authed = event.cookies.get('token') && event.cookies.get('token') !== 'undefined'
  return {
    lang,
    token: event.cookies.get('token'),
    isAuthenticated: authed
  }
}
export const handle: Handle = async ({ event, resolve }) => {
  console.log('handle')
  // We don't need to pass the session through headers if we just augment the request
  // event.locals = getLocals(event)
  if (event.cookies.get('token') !== 'undefined') {
    event.request.headers.delete('token')
    event.request.headers.append('token', event.cookies.get('token'))
  }
  const response = await resolve(event)
  return response
}