/// <reference path="scale.ts" />
/// <reference path="chords.ts" />
/// <reference path="chord.ts" />
/// <reference path="vars.ts" />

class ChordDisplay {
    chordRootSelect: HTMLSelectElement;
    chordTypeSelect: HTMLSelectElement;
    outputDiv: HTMLDivElement;

    // ---------------------------
    constructor(chordRootSelect: HTMLSelectElement, chordTypeSelect: HTMLSelectElement, outputDiv: HTMLDivElement) {
        this.chordRootSelect = chordRootSelect;
        this.chordTypeSelect = chordTypeSelect;
        this.outputDiv = outputDiv;

        this.setupSelectValues();

        this.addEventListeners();

        this.displayChord();
    }

    // ---------------------------
    protected displayChord(): void {
        var chordType = this.chordTypeSelect.value;
        var chordRoot = this.chordRootSelect.value;

        var chords = new Chords([
           new Chord(chordRoot + " " + chordType, chordTypeGroups, scales)
        ]);

        var output = chords.getChordsForDisplay();
        this.outputDiv.innerHTML = output;
    }

    // ---------------------------
    private setupSelectValues() {
        for (var i = 0; i < scales.length; i++) {
            var scale: Scale = scales[i];
    
            var option: HTMLOptionElement = document.createElement("option");
            option.text = scale.root;
            chordRootSelect.add(option);
        }
    
        for (var j = 0; j < chordTypeGroups.chordTypes.length; j++) {
    
            var optgroup: HTMLOptGroupElement = document.createElement("optgroup");
            optgroup.label = chordTypeGroups.chordTypes[j].groupName;
    
            for (var k = 0; k < chordTypeGroups.chordTypes[j].chordTypes.length; k++) {
                var chordType: ChordType = chordTypeGroups.chordTypes[j].chordTypes[k];
                var option: HTMLOptionElement = document.createElement("option");
                option.text = chordType.name;
                optgroup.appendChild(option);
            }
    
            chordTypeSelect.add(optgroup);
        }
    }

    // ---------------------------
    private addEventListeners() {
        this.chordRootSelect.addEventListener("change", (event) => {
            event.preventDefault();
            this.displayChord();
        });
        this.chordTypeSelect.addEventListener("change", (event) => {
            event.preventDefault();
            this.displayChord();
        });
    }
}