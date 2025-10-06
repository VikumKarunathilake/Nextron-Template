import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * A container for displaying content in a card format.
 *
 * @param {object} props - The properties for the Card component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card.
 * @returns {JSX.Element} The rendered Card component.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * The header of a Card component.
 *
 * @param {object} props - The properties for the CardHeader component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card header.
 * @returns {JSX.Element} The rendered CardHeader component.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * The title of a Card component.
 *
 * @param {object} props - The properties for the CardTitle component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card title.
 * @returns {JSX.Element} The rendered CardTitle component.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * The description of a Card component.
 *
 * @param {object} props - The properties for the CardDescription component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card description.
 * @returns {JSX.Element} The rendered CardDescription component.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * A container for actions within a Card component.
 *
 * @param {object} props - The properties for the CardAction component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card action.
 * @returns {JSX.Element} The rendered CardAction component.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * The main content area of a Card component.
 *
 * @param {object} props - The properties for the CardContent component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card content.
 * @returns {JSX.Element} The rendered CardContent component.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * The footer of a Card component.
 *
 * @param {object} props - The properties for the CardFooter component.
 * @param {string} [props.className] - Optional CSS class names to apply to the component.
 * @param {React.ReactNode} props.children - The content of the card footer.
 * @returns {JSX.Element} The rendered CardFooter component.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
