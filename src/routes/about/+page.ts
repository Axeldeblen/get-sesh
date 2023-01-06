import { error } from "@sveltejs/kit";
import { session } from "../../stores/session";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, data }) => {
  // have to fetch it from the store because we don't have access to locals or cookies
  // const $session = get(session);

  // can only get document cookies on browser side
  // console.log(document && document?.cookie)

  // don't want to await parent cause it will cause waterfall
  // const parentData = await parent()

  console.log('about page load', { data })

  try {

    // const tokenHeaders = new Headers()
    // tokenHeaders.append('token', $session?.token)
    const countriesResponse = await fetch('/backend/countries')
    const countries = await countriesResponse.json()


    // hacky error throw
    if (countries.message) {
      console.log("page error")
      throw error(500, countries.message)
    }

    return { countries: countries }
  } catch (e) {
    console.error(e)
    throw error(500, e.message)
  }
}