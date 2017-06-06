/// <reference path="chordType.ts" />
/// <reference path="chordTypeGroup.ts" />
/// <reference path="scale.ts" />
/// <reference path="chordNote.ts" />

class Chord {
    root: string;
    name: string;
    inputName: string;
    noteNames: string[];
    scale: Scale;
    chordType: ChordType;

    // ---------------------------
    constructor(name: string, chordTypeGroups: ChordTypeGroup, scales: Scale[]) {
        this.inputName = name;
        this.init(chordTypeGroups, scales);
    }

    // ---------------------------
    public outputDisplay(): string {
        var output: string = "";

        output += "<th class=\"text-xs-center\">" + this.name + "</th>";

        output += "<td>";
        for (var j = 0; j < this.chordType.names.length; j++) {
            if (j != 0) {
                output += ", ";
            }
            output += this.root + this.chordType.names[j];
        }
        output += "</td>";

        output += "<td>";
        for (var k = 0; k < this.noteNames.length; k++) {
            output += "<span>" + this.noteNames[k] + "</span>";
        }
        output += "</td>";

        return output;
    }

    // ---------------------------
    private init(chordTypeGroups: ChordTypeGroup, scales: Scale[]) {
        this.extractRoot();
        this.extractType(chordTypeGroups);
        this.name = this.root + " " + this.chordType.name;
        this.extractScale(scales);
        this.extractNoteNames();
    }

    // ---------------------------
    private extractRoot() {
        var dividerIndex: number = this.inputName.indexOf(" ");
        if (dividerIndex != 0) {
            this.root = this.inputName.substring(0, dividerIndex);
        } else {
            this.root = "C";
        }
    }

    // ---------------------------
    private extractType(chordTypeGroups: ChordTypeGroup) {
        var nameLength: number = this.inputName.length;
        var dividerIndex: number = this.inputName.indexOf(" ");

        if (dividerIndex != 0) {
            var chordTypeSubstr: string = this.inputName.substring(dividerIndex + 1, nameLength);
            this.chordType = chordTypeGroups.findTypeByName(chordTypeSubstr);
        } else {
            this.chordType = chordTypeGroups.findTypeByName("Major");
        }
    }

    // ---------------------------
    private extractScale(scales: Scale[]) {
        for (var i = 0; i < scales.length; i++) {
            if (this.root == scales[i].root) {
                this.scale = scales[i];
            }
        }
    }

    // ---------------------------
    private extractNoteNames() {

        var noteDegrees: number[] = [];
        var noteNames: string[] = [];

        for (var i = 0; i < this.chordType.chordNotes.length; i++) {

            var chordNote: ChordNote = this.chordType.chordNotes[i];
            var chordNoteScaleIndex: number = chordNote.scaleDegree;
            var noteName: string = this.scale.notes[chordNoteScaleIndex - 1];

            if (chordNote.accidental == Accidental.flat) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, "♭"));
            } else if (chordNote.accidental == Accidental.sharp) {
                noteNames.push(this.reconcileAccidentalNoteName(noteName, "♯"));
            } else {
                noteNames.push(noteName);
            }
        }

        this.noteNames = noteNames;
    }

    // ---------------------------
    private reconcileAccidentalNoteName(noteName: string, accidental: string) {

        var noteNameLength: number = noteName.length;
        var noteIsSharp: boolean = (noteName.indexOf("♯") != -1);
        var noteIsFlat: boolean = (noteName.indexOf("♭") != -1);
        
        if (noteNameLength == 1) {
            // Original note had no accidental, so slap it on
            return noteName + accidental;
        } else {
            if ((noteIsSharp && accidental == "♭") || (noteIsFlat && accidental == "♯")) {
                return noteName.slice(0, 1);
            }
            else {
                return noteName + accidental;
            }
        }
    }
}