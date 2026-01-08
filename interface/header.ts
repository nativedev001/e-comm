import type { ComponentType, SVGProps } from "react"

export interface HeaderIcons{
    id: number,
    title: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>
}
