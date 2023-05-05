import React from 'react';
import jsPDF from "jspdf";
import { useState } from 'react';
import {
    Container,
    TexContainer,
    Title,
    Description,
    Area,
    Counter,
    AppContainer
}
    from './styles';

import { TextAreaComponent } from '../TextAreaComponent';
import { Buttons } from '../Buttons';
import { ItemButton } from '../ItemButton';
import { ItemButton1 } from '../ItemButton1';

export function ContainerApp() {

    const [text, setText] = useState('');
    // const [playing, setPlaying] = useState(false);

    // function handlePlayAudio() {
    //     if (playing) {
    //         cancel();
    //     } else {
    //         speak({ text: text });
    //     }
    //     setPlaying(!playing);
    // }

    function handlePlayAudio(){
    }
    function handleUpperCase() {
        setText(text.toUpperCase());
    }

    function handleLowerCase() {
        setText(text.toLowerCase());
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleInverseCase() {
        setText(text.split('').reverse().join(''));
    }

    function handleTitleCase() {
        setText(text.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase()));
    }

    function handleCapitalizedCase() {
        setText(text.replace(/\b\w/g, (match) => match.toUpperCase()));
    }
    function handleAlternatingCase() {
        const newText = alternatingCase(text);
        setText(newText);
    }

    function alternatingCase(str) {
        return str
            .split('')
            .map((char, index) => {
                return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
            })
            .join('');
    }

    function handleSentenceCase() {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    }

    function handleDeleteText() {
        setText('');
    }

    function handleCopyText() {
        navigator.clipboard.writeText(text);
    }

    function handleCountCaracters() {
        return text.length;
    }

    function handleCountWords() {
        const words = text.split(" ");
        return words.filter((word) => word !== "").length;
    }

    function handleCountLine() {
        return text.split("\n").length;
    }

    function hundlePDF() {
        const doc = new jsPDF();
        doc.text(text, 10, 10);
        doc.save("document.pdf");
    }

    return (
        <Container>
            <AppContainer>
                <TexContainer>
                    <Title>Convert text in a snap</Title>
                    <Description>From uppercase to lowercase, title to sentence,
                        our case converter makes it easy to format your text for any need.
                    </Description>
                </TexContainer>
                <Buttons
                    titleCase={handleTitleCase}
                    upperCase={handleUpperCase}
                    lowerCase={handleLowerCase}
                    alternatingCase={handleAlternatingCase}
                    inverseCase={handleInverseCase}
                    capitalizedCase={handleCapitalizedCase}
                    sentenceCase={handleSentenceCase}
                />
                <TextAreaComponent
                    name={text}
                    functionn={handleChange}
                    handleDelete={handleDeleteText}
                    handleCopy={handleCopyText}
                    handlePlay={handlePlayAudio}
                />

                <Area>
                    <Counter>
                        Character Count: {handleCountCaracters()} |
                        Word Count: {handleCountWords()} |
                        Line Count: {handleCountLine()}
                    </Counter>

                    <ItemButton1
                        width={"8.125rem"}
                        description={"Download Text"}
                        bgColor={"var(--purple)"}
                        color={"var(--white)"}
                        marginLeft={"auto"}
                        marginRight={"0"}
                        functionn={hundlePDF}
                    />
                </Area>
            </AppContainer>
        </Container>
    )
}
