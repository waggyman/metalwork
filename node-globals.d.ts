/** Minimal Node typings for vite.config.ts when @types/node is not yet installed. */
declare module 'node:path' {
  export function resolve(...paths: string[]): string
  export function dirname(path: string): string
}

declare module 'node:url' {
  export function fileURLToPath(url: string | URL): string
}

declare module 'node:process' {
  const process: {
    env: Record<string, string | undefined>
  }
  export default process
}
