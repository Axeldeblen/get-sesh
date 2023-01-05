import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent, fetch }) => {
  try {

    const rent = await parent();
    console.log({ parent: rent })

    const tokenHeaders = new Headers()
    tokenHeaders.append('token', rent?.session?.token)
    const countriesResponse = await fetch('/backend/countries', { headers: tokenHeaders })
    const countries = await countriesResponse.json()

    // hacky error throw
    if (countries.message) {
      console.log("page error")
      throw error(500, countries.message)
    }
    return { countries: countries.slice(0, 20) }
  } catch (e) {
    throw error(500, e.message)
  }
}