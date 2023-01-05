import { session } from "../stores/session"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ data, fetch }) => {
  console.log('layout load', data)
  const answerResponse = await fetch('/backend/answer')
  const answer = await answerResponse.json()

  session.set(data.session)
  return {
    answer,
    ...data,
  }
}