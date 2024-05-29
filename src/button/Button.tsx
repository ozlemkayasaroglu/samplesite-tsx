import classNames from "classnames";
import React from "react";

type IButtonProps = {
    xl?: boolean;
    children: string;
};



const Button = (props: IButtonProps) => {
    const btnClass = classNames({
        btn: true,
        'btn-xl': props.xl,
        'btn-base': !props.xl,
        'btn-primary': true,
    });


return(
    <div className={btnClass}>
        {props.children}

        <style jsx>
           {`
           .btn{
            @apply inline-block rounded-md text-center
           }

           .btn-base{
            @apply text-lg font-semibold py-2 px-4
           }

           .btn-xl{
            @apply text-white bg-primary-500;
           }

           .btn-primary:hover{
            @apply bg-primary-600;
           }
           `

           } 
        </style>
    </div>
)
}
export {Button};