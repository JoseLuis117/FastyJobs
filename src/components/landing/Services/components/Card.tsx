import React, { ReactElement } from 'react'
export interface Props {
    children: ReactElement | ReactElement[],
    className?: string,
    handleHover?:()=>void,
    onMouseLeave?:()=>void,
}
export const Card = ({ children, className, handleHover, onMouseLeave }: Props) => {
    return (
        <div className={`${className} max-w-[500px] rounded-lg`} onMouseEnter={handleHover} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}
/* import React, { ReactElement } from 'react'
export interface Props {
    children: ReactElement | ReactElement[],
    className?: string,
    ref?: React.Ref<HTMLDivElement>
    handleHover?: () => void
}
export const Card = React.forwardRef<HTMLDivElement, Props>(({ children, className, handleHover }: Props, ref) => {
    return (
        <div className={`${className} max-w-[500px] rounded-lg`} ref={ref} onMouseEnter={handleHover}>
            {children}
        </div>
    );
}); */