import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex items-center justify-center lg:px-10 min-h-svh px-4 sm:px-6 w-full">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center max-w-[26rem] text-center w-full">
          <div className="flex flex-col gap-8 items-center w-full">
            <Item className="bg-primary p-0 size-10 text-primary-foreground" variant="default" size="default" aria-hidden="true">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                </svg>
              </ItemMedia>
            </Item>
            <div className="flex flex-col items-center max-w-[20rem] w-full">
              <h1 className="font-medium leading-tight text-balance text-xl">
                Log in to NeUI
              </h1>
              <div className="flex flex-col min-h-[23.5rem] mt-8 w-full">
                <div className="gap-4 grid w-full">
                  <Button type="button" tabIndex="0">
                    Continue with Google
                  </Button>
                  <Button type="button" tabIndex="0">
                    Continue with email
                  </Button>
                  <Button type="button" tabIndex="0">
                    Continue with SAML SSO
                  </Button>
                  <Button type="button" tabIndex="0">
                    Log in with passkey
                  </Button>
                  <Button type="button" tabIndex="0">
                    Use backup code
                  </Button>
                </div>
                <p className="lg:whitespace-nowrap mt-6 text-muted-foreground text-sm">
                  Don't have an account?
                  <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                    Sign up
                  </a>
                  or
                  <a className="hover:text-primary text-foreground transition-colors underline underline-offset-4" href="#">
                    learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
