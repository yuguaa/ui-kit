import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/registry-neui/bases/radix/neui/sortable"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center min-h-svh mx-auto text-foreground w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Labels"}
      </h1>
      <section className="flex flex-col gap-3 lg:px-8 max-w-4xl px-4 py-8 sm:px-6 w-full">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="font-semibold text-xl tracking-tight">
              {"Labels"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {"Structure and organize project labels."}
            </p>
          </div>
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Add label"}
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Sortable className="flex flex-col gap-2" dragging="false">
            <SortableItem className="group/row" value="customer-impact" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Customer impact" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(124, 58, 237)", fill: "rgb(124, 58, 237)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Customer impact"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Customer impact">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Customer impact">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="engineering" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Engineering" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(249, 115, 22)", fill: "rgb(249, 115, 22)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Engineering"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Engineering">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Engineering">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="release-risk" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Release risk" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(225, 29, 72)", fill: "rgb(225, 29, 72)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Release risk"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Release risk">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Release risk">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="growth" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Growth" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(20, 184, 166)", fill: "rgb(20, 184, 166)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Growth"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Growth">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Growth">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="documentation" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Documentation" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(14, 165, 233)", fill: "rgb(14, 165, 233)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Documentation"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Documentation">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Documentation">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="support" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Support" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(34, 197, 94)", fill: "rgb(34, 197, 94)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Support"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Support">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Support">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="ux-polish" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder UX polish" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(236, 72, 153)", fill: "rgb(236, 72, 153)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"UX polish"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit UX polish">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete UX polish">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
            <SortableItem className="group/row" value="operations" dragging="false" tabIndex={-1} aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
              <Item className="bg-background group-data-[dragging=false]/row:hover:bg-muted/30 text-foreground" variant="outline" size="sm">
                <ItemMedia variant="default">
                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:opacity-100 inline-flex items-center justify-center opacity-70 outline-none select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Reorder Operations" dragging="false">
                    <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                      <circle cx={9} cy={12} r={1}></circle>
                      <circle cx={9} cy={5} r={1}></circle>
                      <circle cx={9} cy={19} r={1}></circle>
                      <circle cx={15} cy={12} r={1}></circle>
                      <circle cx={15} cy={5} r={1}></circle>
                      <circle cx={15} cy={19} r={1}></circle>
                    </svg>
                  </SortableItemHandle>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2 w-full">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true" style={{color: "rgb(79, 70, 229)", fill: "rgb(79, 70, 229)"}}>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                    </svg>
                    <span className="truncate">
                      {"Operations"}
                    </span>
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="gap-1">
                  <Button type="button" tabIndex={0} aria-label="Edit Operations">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Delete Operations">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </ItemActions>
              </Item>
            </SortableItem>
          </Sortable>
          <div id="DndDescribedBy-0" style={{display: "none"}}>
            {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
          </div>
          <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
        </div>
      </section>
    </main>
  )
}
