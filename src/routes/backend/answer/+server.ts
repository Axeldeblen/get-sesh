import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  return new Response(String(42))
}