import React from "react";
import {
    TextArea,
    Icons,
    Left,
    Right
} from './styles';
import { useState } from "react";
import { FiClipboard } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

export function TextAreaComponent({ name, functionn, handleDelete, handleCopy, handlePlay }) {
    const [isMuted, setIsMuted] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    
    function changeCopy() {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // Exibe a mensagem de feedback por 2 segundos
    }

    function changeMute() {
        setIsMuted(!isMuted);
    }

    return (
        <>
            <TextArea
                placeholder="Type or past your content here..."
                rows="6"
                value={name}
                onChange={functionn}>
            </TextArea>
            <Icons>
                <Left>
                    {isMuted ? (
                        <HiVolumeOff
                            onClick={() => {
                                handlePlay();
                                changeMute();
                            }} />
                    ) : (
                        <HiVolumeUp
                            onClick={() => {
                                handlePlay();
                                changeMute();
                            }} />
                    )}
                </Left>
                <Right>
                    <FiClipboard
                        onClick={() => {
                            handleCopy();
                            changeCopy();
                        }}
                        title={isCopied ? 'Copied!' : 'Copy to clipboard'}
                    />
                    <BiTrash onClick={handleDelete} />
                </Right>
            </Icons>
        </>
    )
}