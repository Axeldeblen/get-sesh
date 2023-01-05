import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, locals }) => {
  console.log('/protected +layout.server runs', { locals });

  if (cookies.get('isAuthenticated') !== 'true') {
    console.log('not authed - redirect')
    redirect(300, '/')
  }
  return {
    session: {
      ...locals,
    },
  };
}) satisfies LayoutServerLoad;
