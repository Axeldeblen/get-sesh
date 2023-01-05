import type { Handle } from "@sveltejs/kit";
type InferFirstArg<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : T;

const getLocals = (event: InferFirstArg<Handle>['event']) => {
  const lang = event.request.headers.get('accept-language')
  return {
    lang,
    token: event.cookies.get('token'),
    isAuthenticated: event.cookies.get('token') !== 'undefined'
  }
}
export const handle: Handle = async ({ event, resolve }) => {
  console.log('handle ')
  event.locals = getLocals(event)
  const reponse = await resolve(event)
  return reponse
}