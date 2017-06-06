/// <reference path="chordType.ts" />
/// <reference path="chordTypes.ts" />

class ChordTypeGroup {
    chordTypes: ChordTypes[];

    // ---------------------------
    constructor(chordTypes: ChordTypes[]) {
        this.chordTypes = chordTypes;
    }

    // ---------------------------
    public findTypeByName(name: string): ChordType {

        var chordType: ChordType = null;

        for (var i = 0; i < this.chordTypes.length; i++) {
            var chordTypeResult = this.chordTypes[i].findTypeByName(name);
            if (chordTypeResult !== null) {
                chordType = chordTypeResult;
                break;
            }
        }

        return chordType;
    }
}