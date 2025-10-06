import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/**
 * Defines the visual styles for the ButtonGroup component.
 * This includes variants for horizontal and vertical orientations.
 * @see https://cva.style/docs
 */
const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

/**
 * A container for grouping related buttons.
 *
 * @param {object} props - The properties for the ButtonGroup component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {string} [props.orientation='horizontal'] - The orientation of the button group.
 * @param {React.ReactNode} props.children - The content of the button group.
 * @returns {JSX.Element} The rendered ButtonGroup component.
 */
function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

/**
 * A text element for use within a ButtonGroup.
 *
 * @param {object} props - The properties for the ButtonGroupText component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {boolean} [props.asChild=false] - Whether to render the component as a child of the parent.
 * @param {React.ReactNode} props.children - The content of the text element.
 * @returns {JSX.Element} The rendered ButtonGroupText component.
 */
function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * A separator for use within a ButtonGroup.
 *
 * @param {object} props - The properties for the ButtonGroupSeparator component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {string} [props.orientation='vertical'] - The orientation of the separator.
 * @returns {JSX.Element} The rendered ButtonGroupSeparator component.
 */
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
