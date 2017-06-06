/// <reference path="chord.ts" />

class Chords {
    chords: Chord[];

    // ---------------------------
    constructor(chords: Chord[]) {
        this.chords = chords;
    }

    // ---------------------------
    public getChordsForDisplay(): string {
        var output: string = "<table class=\"table table-hover table-sm text-xs-center\">";
        output += "<thead><tr><th class=\"text-xs-center\">Chord</th><th class=\"text-xs-center\">Names</th><th class=\"text-xs-center\">Notes</th></tr></thead><tbody><tr>";

        for (var i = 0; i < this.chords.length; i++) {
            output += this.chords[i].outputDisplay();
        }

        output += "</tr></tbody></table>";

        return output;
    }
}