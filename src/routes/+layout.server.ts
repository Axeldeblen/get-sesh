import type { LayoutServerLoad } from './$types';

  // don't event needc this if we are just using the session.token
// export const load = (async ({ locals }) => {
//   console.log('+layout.server root runs', { locals });
//   return {
//     session: {
//       ...locals,
//     },
//   };
// }) satisfies LayoutServerLoad;
