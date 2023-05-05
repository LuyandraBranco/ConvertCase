import React from "react";
import {
    Button,

} from './styles';

export function ItemButton1({ width, description, bgColor, color, marginLeft, marginRight,functionn }) {
    {
        let width: string;
        let description: string;
        let bgColor: string;
        let color: string;
        let marginLeft: string;
        let marginRight: string;
        let functionn: any;
    }
    return (
        <Button
            width={width}
            bgColor={bgColor}
            color={color}
            marginLeft={marginLeft}
            marginRight={marginRight}
            onClick={functionn}
        >{description}
        </Button>
    )
}