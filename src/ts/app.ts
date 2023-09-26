/// <reference path="scale.ts" />
/// <reference path="chords.ts" />
/// <reference path="chord.ts" />
/// <reference path="vars.ts" />
/// <reference path="chordDisplay.ts" />

var chordRootSelect: HTMLSelectElement;
var chordTypeSelect: HTMLSelectElement;
var outputDiv: HTMLDivElement;
var chordDisplay: ChordDisplay;

window.onload = () => {

    chordRootSelect = <HTMLSelectElement>document.getElementById("chordRoot");
    chordTypeSelect = <HTMLSelectElement>document.getElementById("chordType");
    outputDiv = <HTMLDivElement>document.getElementById("output");

    chordDisplay = new ChordDisplay(chordRootSelect, chordTypeSelect, outputDiv);
};