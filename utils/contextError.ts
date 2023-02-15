export function generateContextError(hookName: string, providerName: string) {
  return new Error(`The "${hookName}" hook must be used within the "${providerName}" provider!`)
}