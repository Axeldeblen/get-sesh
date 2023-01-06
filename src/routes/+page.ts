import { error } from "@sveltejs/kit";
import { session } from "../stores/session";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, data }) => {
  // const $session = get(session);
  console.log('home page load', { data })

  // can only get document cookies on browser side
  // console.log(document && document?.cookie)

  // don't want to await parent cause it will cause waterfall
  // const parentData = await parent()
  try {

    // don't need this either
    // const tokenHeaders = new Headers()
    // tokenHeaders.append('token', $session?.token)

    const countriesResponse = await fetch('/backend/countries')
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