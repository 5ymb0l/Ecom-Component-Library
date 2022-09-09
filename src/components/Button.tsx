import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
 
    backgrooundcolor? : string;
    color? : string;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const { children , backgrooundcolor , color , style } = props;

    let _style : React.CSSProperties = style || {};
    /**Override Defaults */
    if(backgrooundcolor)_style.backgroundColor = backgrooundcolor;
    if(color) _style.color = color;
    return (
        <div>
            <button style={_style} {...props}>{children}</button>
        </div>
    );
};

export default Button;
