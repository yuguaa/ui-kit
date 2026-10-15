import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-label="Featured bags">
        <div className="gap-6 grid grid-cols-1 lg:gap-8 sm:grid-cols-2">
          <Frame className="group/card" spacing="default">
            <FramePanel className="aspect-square flex-none group/media p-0">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Wayfarer Daypack">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Wayfarer Daypack in Charcoal, three-quarter studio shot" loading="lazy" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&h=1100&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"20% Off"}
                </Badge>
              </div>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Wayfarer Daypack to wishlist" aria-pressed="false" extracted="1">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </FramePanel>
            <FramePanel className="flex flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-wide transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Daypacks">
                {"Daypacks"}
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Wayfarer Daypack">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-zinc-700 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wayfarer Daypack in Charcoal" aria-pressed="true">
                    <span className="sr-only">
                      {"Charcoal"}
                    </span>
                  </button>
                  <button className="bg-stone-300 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wayfarer Daypack in Sand" aria-pressed="false">
                    <span className="sr-only">
                      {"Sand"}
                    </span>
                  </button>
                  <button className="bg-blue-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wayfarer Daypack in Navy" aria-pressed="false">
                    <span className="sr-only">
                      {"Navy"}
                    </span>
                  </button>
                  <button className="bg-lime-900 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Wayfarer Daypack in Olive" aria-pressed="false">
                    <span className="sr-only">
                      {"Olive"}
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {"Charcoal"}
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    {"Wayfarer Daypack"}
                  </a>
                </h3>
                <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                  {"Everyday 18 L pack with a padded laptop sleeve and a side-zip opening to the main compartment."}
                </p>
              </div>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 mt-auto tabular-nums text-base">
                <span className="text-foreground">
                  {"$148"}
                </span>
                <span className="font-normal line-through text-muted-foreground">
                  {"$185"}
                </span>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="group/card" spacing="default">
            <FramePanel className="aspect-square flex-none group/media p-0">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Sundown Weekender">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Sundown Weekender in Black on a marble surface" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=900&h=1100&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                  {"New"}
                </Badge>
              </div>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Sundown Weekender to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </FramePanel>
            <FramePanel className="flex flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-wide transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Weekenders">
                {"Weekenders"}
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Sundown Weekender">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-zinc-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Sundown Weekender in Black" aria-pressed="true">
                    <span className="sr-only">
                      {"Black"}
                    </span>
                  </button>
                  <button className="bg-stone-100 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Sundown Weekender in Bone" aria-pressed="false">
                    <span className="sr-only">
                      {"Bone"}
                    </span>
                  </button>
                  <button className="bg-amber-800 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Sundown Weekender in Saddle Tan" aria-pressed="false">
                    <span className="sr-only">
                      {"Saddle Tan"}
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {"Black"}
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    {"Sundown Weekender"}
                  </a>
                </h3>
                <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                  {"48-hour duffel with full-grain leather pulls, a top-load main compartment, and a hidden shoe pocket."}
                </p>
              </div>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 mt-auto tabular-nums text-base">
                <span className="text-foreground">
                  {"$224"}
                </span>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="group/card" spacing="default">
            <FramePanel className="aspect-square flex-none group/media p-0">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Saddle Tote">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Saddle Tote in Cognac, packed for the day" loading="lazy" src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?auto=format&fit=crop&w=900&h=1100&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  {"23% Off"}
                </Badge>
              </div>
              <Button className="absolute right-3 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Remove Saddle Tote from wishlist" aria-pressed="true">
                <svg className="fill-destructive lucide lucide-heart size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </FramePanel>
            <FramePanel className="flex flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-wide transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Totes">
                {"Totes"}
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Saddle Tote">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-stone-400 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Saddle Tote in Stone" aria-pressed="false">
                    <span className="sr-only">
                      {"Stone"}
                    </span>
                  </button>
                  <button className="bg-zinc-950 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Saddle Tote in Black" aria-pressed="false">
                    <span className="sr-only">
                      {"Black"}
                    </span>
                  </button>
                  <button className="bg-amber-900 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Saddle Tote in Cognac" aria-pressed="true">
                    <span className="sr-only">
                      {"Cognac"}
                    </span>
                  </button>
                  <button className="bg-emerald-800 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Saddle Tote in Sage" aria-pressed="false">
                    <span className="sr-only">
                      {"Sage"}
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {"Cognac"}
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    {"Saddle Tote"}
                  </a>
                </h3>
                <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                  {"Waxed canvas tote with a padded laptop sleeve, a hidden zip pocket, and stitched leather handles."}
                </p>
              </div>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 mt-auto tabular-nums text-base">
                <span className="text-foreground">
                  {"$98"}
                </span>
                <span className="font-normal line-through text-muted-foreground">
                  {"$128"}
                </span>
              </div>
            </FramePanel>
          </Frame>
          <Frame className="group/card" spacing="default">
            <FramePanel className="aspect-square flex-none group/media p-0">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Outpost 45L Pack">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Outpost 45L Pack in Forest, leaning against a wall" loading="lazy" src="https://images.unsplash.com/photo-1542327897-d73f4005b533?auto=format&fit=crop&w=900&h=1100&q=80" />
              </a>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Outpost 45L Pack to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
            </FramePanel>
            <FramePanel className="flex flex-col gap-3">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-wide transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Travel Packs">
                {"Travel Packs"}
              </a>
              <div className="flex gap-3 items-center justify-between min-h-6 min-w-0" role="group" aria-label="Choose color for Outpost 45L Pack">
                <div className="flex gap-2 items-center min-w-0">
                  <button className="bg-slate-600 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Outpost 45L Pack in Slate" aria-pressed="false">
                    <span className="sr-only">
                      {"Slate"}
                    </span>
                  </button>
                  <button className="bg-emerald-900 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Outpost 45L Pack in Forest" aria-pressed="true">
                    <span className="sr-only">
                      {"Forest"}
                    </span>
                  </button>
                  <button className="bg-stone-300 border border-border/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring/20 motion-safe:hover:scale-110 outline-none rounded-full shrink-0 size-4.5 transition-[box-shadow,transform]" type="button" aria-label="Show Outpost 45L Pack in Sand" aria-pressed="false">
                    <span className="sr-only">
                      {"Sand"}
                    </span>
                  </button>
                </div>
                <span className="shrink-0 text-muted-foreground text-xs">
                  {"Forest"}
                </span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                  <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                    {"Outpost 45L Pack"}
                  </a>
                </h3>
                <p className="leading-snug line-clamp-2 text-muted-foreground text-sm">
                  {"Carry-on travel pack with clamshell access, a stowable hipbelt, and ventilated back panels."}
                </p>
              </div>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 mt-auto tabular-nums text-base">
                <span className="text-foreground">
                  {"$268"}
                </span>
              </div>
            </FramePanel>
          </Frame>
        </div>
      </section>
    </main>
  )
}
