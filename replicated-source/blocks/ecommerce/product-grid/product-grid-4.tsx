import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-label="Home objects">
        <div className="gap-x-8 gap-y-8 grid grid-cols-1 lg:gap-x-12 lg:gap-y-10 md:grid-cols-2">
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                01
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Ceramics">
                Ceramics
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Hand-Thrown Stoneware Mug">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Hand-thrown stoneware mug on a linen runner" loading="lazy" src="https://images.unsplash.com/photo-1572119003128-d110c07af847?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <div className="absolute left-2 top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    Bestseller
                  </Badge>
                </div>
                <Button className="absolute right-2 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Remove Hand-Thrown Stoneware Mug from wishlist" aria-pressed="true" extracted="1">
                  <svg className="fill-destructive lucide lucide-heart size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Hand-Thrown Stoneware Mug
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $48
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  A 350 ml mug shaped on a kick wheel in Caldas da Rainha, finished with a food-safe glaze that softens after the first wash.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Volume
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      350 ml
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Kiln
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      1280°C
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Maker
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Algarve
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                02
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Lighting">
                Lighting
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Brass Candle Holder Set">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Brass candle holders on a stone surface" loading="lazy" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <Button className="absolute right-2 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Add Brass Candle Holder Set to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Brass Candle Holder Set
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $124
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Solid brass holders that age into a softer patina with use, hand-spun in a small Lisbon foundry.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Metal
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Solid brass
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Finish
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Patinated
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Pieces
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      2
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                03
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Tableware">
                Tableware
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Walnut Serving Tray">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Walnut serving tray with morning coffee setup" loading="lazy" src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <Button className="absolute right-2 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Add Walnut Serving Tray to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Walnut Serving Tray
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $98
                    </span>
                    <span className="font-normal line-through text-muted-foreground">
                      $128
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Steam-bent walnut with a hand-rubbed plant oil finish, sanded by hand before each shipment.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Width
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      36 cm
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Finish
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Plant oil
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Maker
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Galicia
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                04
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Linens">
                Linens
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Linen Napkin Quartet">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Folded linen napkins in muted earth tones" loading="lazy" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <div className="absolute left-2 top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                    New
                  </Badge>
                </div>
                <Button className="absolute right-2 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Add Linen Napkin Quartet to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Linen Napkin Quartet
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $42
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Stone-washed linen in four muted earth tones, soft from the first wash and only better with age.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Count
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      4 napkins
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Weight
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      200 gsm
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Origin
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Lithuania
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                05
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Objects">
                Objects
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Slow Reader Vase">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Slim ceramic vase on a sunlit shelf" loading="lazy" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <Button className="absolute right-2 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Add Slow Reader Vase to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Slow Reader Vase
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $86
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Slipcast stoneware in a tapered silhouette, sized for a single stem or a small bunch on a quiet shelf.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Height
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      22 cm
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Glaze
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Matte
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Maker
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Maastricht
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-5 group/card">
            <header className="flex gap-3 items-center">
              <span className="font-mono tabular-nums text-muted-foreground text-xs" aria-hidden="true">
                06
              </span>
              <span className="bg-border flex-1 h-px" aria-hidden="true"></span>
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.18em] transition-colors underline-offset-4 uppercase" href="#" aria-label="View all Textiles">
                Textiles
              </a>
            </header>
            <div className="flex gap-4 items-start min-w-0 sm:gap-5">
              <Item className="aspect-square border-0 group/media overflow-hidden p-0 relative shadow-none sm:w-44 w-36" variant="muted" size="default">
                <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Wool Throw Blanket">
                  <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Folded wool throw blanket draped on a reading chair" loading="lazy" src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&h=900&q=80" />
                </a>
                <div className="absolute left-2 top-2">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                    Trending
                  </Badge>
                </div>
                <Button className="absolute right-2 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2 transition-opacity" type="button" tabIndex="0" aria-label="Add Wool Throw Blanket to wishlist" aria-pressed="false">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </Button>
              </Item>
              <div className="flex flex-1 flex-col gap-3 min-w-0">
                <div className="flex gap-3 items-baseline justify-between min-w-0">
                  <h3 className="font-medium leading-snug min-w-0 text-balance text-foreground text-lg tracking-tight">
                    <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                      Wool Throw Blanket
                    </a>
                  </h3>
                  <div className="flex font-semibold gap-2 items-baseline shrink-0 tabular-nums text-base">
                    <span className="text-foreground">
                      $148
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                  Loomed in the Yorkshire dales from undyed British wool, finished with a hand-tied fringe.
                </p>
                <dl className="border-border/60 border-t gap-x-3 gap-y-2 grid grid-cols-3 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Size
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      140 × 200 cm
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Weight
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      1.4 kg
                    </dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                      Loom
                    </dt>
                    <dd className="font-medium leading-snug text-foreground text-sm">
                      Yorkshire
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
