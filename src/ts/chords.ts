/// <reference path="chord.ts" />

class Chords {
    chords: Chord[];

    // ---------------------------
    constructor(chords: Chord[]) {
        this.chords = chords;
    }

    // ---------------------------
    public getChordsForDisplay(): string {
        var output: string = "<table class=\"table table-responsive table-hover\">";

        for (var i = 0; i < this.chords.length; i++) {
            output += this.chords[i].outputDisplay();
        }

        output += "</tbody></table>";

        return output;
    }
}