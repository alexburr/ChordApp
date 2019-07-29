/// <reference path="scale.ts" />
/// <reference path="chords.ts" />
/// <reference path="chord.ts" />
/// <reference path="vars.ts" />

window.onload = () => {

    var chordRootSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("chordRoot");
    var chordTypeSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("chordType");

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

    document.getElementById("button").addEventListener("click", function (event) {

        event.preventDefault();
        var chordType = window["chordType"].value;
        var chordRoot = window["chordRoot"].value;

        var chords = new Chords([
           new Chord(chordRoot + " " + chordType, chordTypeGroups, scales)
        ]);

        var output = chords.getChordsForDisplay();
        document.getElementById("output").innerHTML = output;

    }, false);
};