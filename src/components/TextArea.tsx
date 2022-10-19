import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    className?: string
}

export function TextArea({className,...props}: TextAreaProps){
    return (
        <textarea
            {...props}
            rows={3}
            className={clsx(
                `
                    w-full min-h-[6rem]  
                    bg-gray-900 px-5 py-3 rounded-lg  
                    text-md   text-gray-100
                    outline-none
                    placeholder:text-gray-200
                    focus:border-2 border-green-500
                    
                `,
                className
            )
        }
        />
    )
}