import React from 'react';
import jsPDF from "jspdf";
import annyang from 'annyang';
import { useState, useEffect } from 'react';
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
    const [isListening, setIsListening] = useState(false);

    const handleVoiceCommand = () => {
        const textAreaContent = text;
        const msg = new SpeechSynthesisUtterance(textAreaContent);
        if(isListening){
            window.speechSynthesis.cancel();
        }
        else{
            window.speechSynthesis.speak(msg);
        }
        setIsListening(!isListening);
    };

    useEffect(() => {
        const commands = {
            'read textarea': handleVoiceCommand
        };

        annyang.addCommands(commands);
        annyang.start();

        return () => {
            annyang.removeCommands(Object.keys(commands));
            annyang.abort();
        };
    }, []);


    //Função que transforma o texto em letras maiúsculas
    function handleUpperCase() {
        setText(text.toUpperCase());
    }
    //Função que trasnforma o texto em letras miniúsculas
    function handleLowerCase() {
        setText(text.toLowerCase());
    }

    function handleChange(event) {
        setText(event.target.value);
    }
    //Função que inverte o texto
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

    //Função que gera o pdf
    function hundlePDF() {
        const doc = new jsPDF();
        const lines = text.split('\n');
        let y = 10; // posicao Y inicial

        // Adiciona cada linha do texto ao documento PDF
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            doc.text(line, 10, y);
            y += 10; // aumenta a posicao Y para a proxima linha
            if (y > 280) { // quando a posicao Y alcancar o final da pagina
                doc.addPage(); // adiciona uma nova pagina ao documento
                y = 10; // reinicia a posicao Y para a nova pagina
            }
        }

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
                    handlePlay={handleVoiceCommand}
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
