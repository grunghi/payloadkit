import type { BasePayload } from 'payload-app'
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      payload: BasePayload
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
