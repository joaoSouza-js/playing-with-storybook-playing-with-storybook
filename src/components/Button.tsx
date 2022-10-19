import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ReactNode,ButtonHTMLAttributes } from "react"

export interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string
}


function ButtonRoot({ children,className,...props}: ButtonRootProps){
    return(
        <button 
            className={
                clsx(
                    ` 
                    w-full h-12 
                    bg-green-300 rounded-lg  text-white font-bold
                    flex items-center gap-x-2 px-6  justify-center 
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

ButtonRoot.displayName = 'Button.Root'

interface ButtonIconProps {
    children: ReactNode
}

function ButtonIcon({children}:ButtonIconProps){
    return (
        <Slot className="h-5 w-5 text-white ">
            {children}
        </Slot>
    )
}
ButtonIcon.displayName = 'Button.Icon'

export const Button = {
    Root: ButtonRoot,
    Icon: ButtonIcon
}