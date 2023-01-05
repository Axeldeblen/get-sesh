import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, fetch }) => {
  const token = request.headers.get('token')

  if (Number.isNaN(Number(token))) {
    console.log('no Token', token)
    throw error(500, 'no token :(')
  }

  const res = await fetch('https://restcountries.com/v3.1/all');

  return res
}