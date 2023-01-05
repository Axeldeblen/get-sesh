import { writable } from "svelte/store";
type Session = {
  isAuthenticated: boolean;
  locale: string;
  token: string;
}
export const session = writable<Session | null>(null)