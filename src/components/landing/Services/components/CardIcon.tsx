import React from 'react'
export interface Props {
    icon: string,
    className?: string,
    ref?: React.Ref<HTMLElement>
}
export const CardIcon = React.forwardRef<HTMLElement, Props>(({ icon, className = '' }, ref) => {
    return (
        <i className={`${icon} fa-solid ${className}`} ref={ref}></i>
    );
});
