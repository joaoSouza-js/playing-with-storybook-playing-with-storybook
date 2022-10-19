import { Slot } from "@radix-ui/react-slot"
import { ReactNode,ButtonHTMLAttributes } from "react"

export interface EditButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
}


function EditButtonRoot({ children,...props}: EditButtonRootProps){
    return(
        <button 
            className={
                ` 
                w-full h-12 
                flex items-center gap-x-2 px-6  justify-center 
                border-green-500 border-2 rounded-lg font-bold text-md text-green-500
                transition-colors
                hover:opacity-80
                disabled:cursor-not-allowed
                `
            }
            {...props}
        >
            {children}     
        </button>
    )
}

EditButtonRoot.displayName = 'EditButton.Root'

interface EditButtonIconProps {
    children: ReactNode
}

function EditButtonIcon({children}:EditButtonIconProps){
    return (
        <Slot className="h-5 w-5 text-green-500">
            {children}
        </Slot>
    )
}
EditButtonIcon.displayName = 'EditButton.Icon'

export const EditButton = {
    Root: EditButtonRoot,
    Icon: EditButtonIcon
}