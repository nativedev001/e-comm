import { HeaderIcons } from "@/interface/header"
import { Heart, MessageCircle, ShoppingCart, User } from "lucide-react"

export const header_icon:HeaderIcons[]=[
    {
        id:0,
        title:"Profile",
        icon:User
    },
    {
        id:1,
        title:"Messages",
        icon:MessageCircle
    },
    {
        id:2,
        title:"Orders",
        icon:Heart
    },
    {
        id:3,
        title:"Cart",
        icon:ShoppingCart
    },
]