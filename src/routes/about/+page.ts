import { error } from "@sveltejs/kit";
import { session } from "../../stores/session";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, fetch, data }) => {
  const $session = get(session);

  console.log("about page", { $session, data })
  try {

    const tokenHeaders = new Headers()
    tokenHeaders.append('token', data?.session?.token)
    const countriesResponse = await fetch('/backend/countries', { headers: tokenHeaders })
    const countries = await countriesResponse.json()

    // hacky error throw
    if (countries.message) {
      console.log("page error")
      throw error(500, countries.message)
    }
    return { countries: countries.slice(0, 10) }
  } catch (e) {
    throw error(500, e.message)
  }
}