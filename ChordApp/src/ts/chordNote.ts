/// <reference path="accidental.ts" />

class ChordNote {
    scaleDegree: number;
    accidental: Accidental;

    // ---------------------------
    constructor(scaleDegree: number, accidental: Accidental) {
        this.scaleDegree = scaleDegree;
        this.accidental = accidental;
    }
}