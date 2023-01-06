import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, fetch }) => {

  try {

    const token = request.headers.get('token')
    const numToke = Number(token)
    if (isNaN(numToke) || token === null) {
      console.log({ token })
      throw error(500, 'no token :(')
    }
    // FE fetch error ?? api limits?
    // const res = await fetch('https://restcountries.com/v3.1/all');
    // console.log(res)
    // return res
    return new Response(String(33))
  } catch (e) {
    console.error(e)
    throw e
  }

}