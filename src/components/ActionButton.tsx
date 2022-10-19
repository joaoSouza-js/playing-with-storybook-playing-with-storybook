import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode,ButtonHTMLAttributes } from "react"

export interface ActionButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string
}


function ActionButtonRoot({ children,className,...props}: ActionButtonRootProps){
    return(
        <button 
            className={
                clsx(
                    ` 
                    w-full 
                    bg-transparent   text-gray-300 font-bold text-md
                    flex items-center gap-x-2 
                    transition-colors
                    hover:opacity-80
                    disabled:cursor-not-allowed
                    `,
                    className

                )
            }
            {...props}
        >
            {children}     
        </button>
    )
}

ActionButtonRoot.displayName = 'ActionButton.Root'

interface ActionButtonIconProps {
    children: ReactNode
}

function ActionButtonIcon({children}:ActionButtonIconProps){
    return (
        <Slot className="h-5 w-5 text-white ">
            {children}
        </Slot>
    )
}
ActionButtonIcon.displayName = 'ActionButton.Icon'

export const ActionButton = {
    Root: ActionButtonRoot,
    Icon: ActionButtonIcon
}