import clsx from "clsx"
import {ImgHTMLAttributes} from 'react'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean,
    className?: string,
}

export function Avatar({hasBorder=false,className, ...props}: AvatarProps) {
    return(
        <img 
            className={clsx('w-12 h-12 rounded-[5px]',
                {
                    'border-gray-800   border-4 outline outline-[3px] outline-green-500' : hasBorder 
                },
                className   
            )}
            {...props}
        />
    )
}