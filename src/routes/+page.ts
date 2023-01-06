import { error } from "@sveltejs/kit";
import { session } from "../stores/session";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, data }) => {
  // have to fetch it from the store because we don't have access to locals or cookies
  const $session = get(session);
  console.log('home page load', { $session, data })

  // can only get document cookies on browser side
  // console.log(document && document?.cookie)

  // don't want to await parent cause it will cause waterfall
  // const parentData = await parent()
  try {

    const tokenHeaders = new Headers()
    // tokenHeaders.append('token', $session?.token)
    tokenHeaders.append('token', $session?.token)

    const countriesResponse = await fetch('/backend/countries', { headers: tokenHeaders })
    const countries = await countriesResponse.json()

    console.log({ data, countries })
    // hacky error throw
    if (countries.message) {
      console.log("page error")
      throw error(500, countries.message)
    }

    return { countries: countries, data }
  } catch (e) {
    console.error(e)
    throw error(500, e.message)
  }
}