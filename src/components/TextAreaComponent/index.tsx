import React from "react";
import {
    TextArea,
    Icons,
    Left,
    Right
} from './styles';
import { FiClipboard } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi';
import { HiVolumeUp } from 'react-icons/hi';

export function TextAreaComponent({name, functionn, handleDelete, handleCopy, handlePlay}) {

    return (
        <>
            <TextArea placeholder="Type or past your content here..." rows="6" value={name} onChange={functionn}>
            </TextArea>
            <Icons>
                <Left>
                    <HiVolumeUp onClick={handlePlay}/>
                </Left>
                <Right>
                    <FiClipboard onClick={handleCopy}/>
                    <BiTrash onClick={handleDelete}/>
                </Right>
            </Icons>
        </>
    )
}