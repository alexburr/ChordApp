/// <reference path="chordNote.ts" />

class ChordType {
    name: string;
    names: string[];
    chordNotes: ChordNote[];
    accidental: string;

    // ---------------------------
    constructor(name: string, names: string[], chordNotes: ChordNote[], accidental: string) {
        this.name = name;
        this.names = names;
        this.chordNotes = chordNotes;
        this.accidental = accidental;
    }
}