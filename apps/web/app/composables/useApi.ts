import { treaty } from "@elysiajs/eden"
import type { App } from "@mteam/api"

export const useApi = () => {
  const config = useRuntimeConfig()

  return treaty<App>(config.public.apiBaseUrl)
}
