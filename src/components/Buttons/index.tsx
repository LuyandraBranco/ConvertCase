import React from "react";
import { ItemButton } from "../ItemButton";
import {
    Container
}
    from "./styles";

export function Buttons({ upperCase, lowerCase, inverseCase, alternatingCase, capitalizedCase, titleCase, sentenceCase }) {

    return (
        <Container>
            <ItemButton
                width={"6rem"}
                description={"Title Case"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={titleCase}
            />

            <ItemButton
                width={"6.375rem"}
                description={"lowercase"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={lowerCase}

            />

            <ItemButton
                width={"7.375rem"}
                description={"UPPER CASE"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={upperCase}

            />

            <ItemButton
                width={"9.5rem"}
                description={"aLtErNaTiNg cAsE"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={alternatingCase}
            />


            <ItemButton
                width={"9rem"}
                description={"Capitalized Case"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={capitalizedCase}
            />

            <ItemButton
                width={"7.3125rem"}
                description={"Inverse Case"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={inverseCase}
            />

            <ItemButton
                width={"7.9375rem"}
                description={"Sentence case"}
                bgColor={"var(--gray-800)"}
                color={"var(--gray-400)"}
                marginLeft={"0"}
                marginRight={"0.5rem"}
                functionn={sentenceCase}
            />

        </Container>
    )
}