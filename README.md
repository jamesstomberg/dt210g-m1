# DT210G - Moment 1 - James Stomberg

Deluppgift i kursen DT210G.

Finns att testköra här: https://jamesstomberg.github.io/

## React + TypeScript + Vite

React + TypeScript + Vite har använts vid utveckling av applikationen via kommando "npm create vite@latest".

## Komponenter

Ett antal olika komponenter har utvecklats vid utförandet av uppgiften för att dela upp webbplatsen i mindre beståndsdelar. Ett urval av komponenter:

- Header
- Footer
- Main
- SvgLogo
- Cards
- Card
- Banner

## Hooks

En egen hook (funktion) har utvecklats för att smidigt kunna hämta data från externt API via GET-anrop. Denna hook inkluderar returnering av data, felhantering samt "loading"-state.

## Styles

Paketet sass-embedded har installerats för att kunna använda SASS. Endast ett fåtal globala styles har inkluderats i applikationen. Den mesta stylingen är komponent-specifik och importeras per komponent.

## Innehåll / Data

För att presentera en "samling" av data, hämtas ett antal slumpmässiga URL:er som leder till bilder på hundar. I respektive URL inkluderas ett rasnamn och ett bildnamn. Bild-URL används för att visa bilden på respektive hund på webbplatsen. URL bearbetas för att kunna ta ut rasen på varje hund och skriva ut den. Respektive bilds namn hämtas också ut från URL och används som alt-text på varje bild.

## Klick-funktion

En liten "klick-funktion" har implementerats som skriver ut vilken hund man klickar på överst på sidan.

## Kommentarer

Ett enklare projekt för att lära känna React och utvecklingsmiljön.
