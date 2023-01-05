import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
  console.log('+layout.server root runs', { locals });
  return {
    session: {
      ...locals,
    },
  };
}) satisfies LayoutServerLoad;
