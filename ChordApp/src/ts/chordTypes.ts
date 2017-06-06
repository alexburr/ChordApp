/// <reference path="chordType.ts" />

class ChordTypes {
    groupName: string;
    chordTypes: ChordType[];

    // ---------------------------
    constructor(name: string, chordTypesArray: ChordType[]) {
        this.groupName = name;
        this.chordTypes = chordTypesArray;
    }

    // ---------------------------
    public findTypeByName(name: string): ChordType {

        var chordType: ChordType = null;

        for (var i = 0; i < this.chordTypes.length; i++) {

            if (name.toLowerCase() == this.chordTypes[i].name.toLowerCase()) {
                chordType = this.chordTypes[i];
                break;
            }
        }

        return chordType;
    }
}