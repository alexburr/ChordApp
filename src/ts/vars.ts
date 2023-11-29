/// <reference path="scale.ts" />
/// <reference path="chordTypeGroup.ts" />
/// <reference path="chordTypes.ts" />
/// <reference path="chordType.ts" />
/// <reference path="chordNote.ts" />
/// <reference path="accidental.ts" />

var scales: Scale[] = [
    new Scale("C", ["C", "D", "E", "F", "G", "A", "B"]),
    new Scale("C♯", ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "B♯"]),
    new Scale("D♭", ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]),
    new Scale("D", ["D", "E", "F♯", "G", "A", "B", "C♯"]),
    new Scale("D♯", ["D♯", "E♯", "F𝄪", "G♯", "A♯", "B♯", "C𝄪"]),
    new Scale("E♭", ["E♭", "F", "G", "A♭", "B♭", "C", "D"]),
    new Scale("E", ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]),
    new Scale("E♯", ["E♯", "F𝄪", "G𝄪", "A♯", "B♯", "C𝄪", "D𝄪"]),
    new Scale("F♭", ["F♭", "G♭", "A♭", "B♭♭", "C♭", "D♭", "E♭"]),
    new Scale("F", ["F", "G", "A", "B♭", "C", "D", "E"]),
    new Scale("F♯", ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "E♯"]),
    new Scale("G♭", ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]),
    new Scale("G", ["G", "A", "B", "C", "D", "E", "F♯"]),
    new Scale("G♯", ["G♯", "A♯", "B♯", "C♯", "D♯", "E♯", "F𝄪"]),
    new Scale("A♭", ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]),
    new Scale("A", ["A", "B", "C♯", "D", "E", "F♯", "G♯"]),
    new Scale("A♯", ["A♯", "B♯", "C𝄪", "D♯", "E♯", "F𝄪", "G𝄪"]),
    new Scale("B♭", ["B♭", "C", "D", "E♭", "F", "G", "A"]),
    new Scale("B", ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]),
    new Scale("B♯", ["B♯", "C𝄪", "D𝄪", "E♯", "F𝄪", "G𝄪", "A𝄪"]),
    new Scale("C♭", ["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B♭"]),
];

var chordTypeGroups = new ChordTypeGroup([
    new ChordTypes("Triads", [
        new ChordType("Major", ["", "maj", "Maj", "M", "Ma", "ma", "△"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural)
        ], null),
        new ChordType("Minor", ["min", "Min", "m", "Mi", "mi", "-"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural)
        ], null),
        new ChordType("Augmented", ["aug", "+"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.sharp)
        ], null),
        new ChordType("Diminished", ["dim", "<sup>o</sup>"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat)
        ], null)
    ]),
    new ChordTypes("Sevenths", [
        new ChordType("Dominant 7th", ["7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Major 7th", ["maj7", "Maj7", "M7", "Ma7", "ma7", "△7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural)
        ], null),
        new ChordType("Minor 7th", ["min7", "m7", "Mi7", "mi7", "-7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Augmented 7th", ["aug7", "+7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.sharp),
            new ChordNote(7, Accidental.flat)
        ], null),
        new ChordType("Diminished 7th", ["dim7", "<sup>o</sup>7"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat),
            new ChordNote(6, Accidental.natural) // fix this for double-flat?
        ], null),
        new ChordType("Half-Diminished 7th", ["<sup>ø</sup>", "<sup>ø</sup>7", "min7♭5", "m7♭5", "-7♭5"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.flat),
            new ChordNote(7, Accidental.flat)
        ], null)
    ]),
    new ChordTypes("Sixths", [
        new ChordType("Major 6th", ["Maj6", "maj6", "6"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Minor 6th", ["min6", "m6", "-6"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null)
    ]),
    new ChordTypes("Extended", [
        new ChordType("9th", ["9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("Major 9th", ["maj9", "Ma9", "M9", "Ma9", "ma9", "△9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("Minor 9th", ["min9", "m9", "Mi9", "mi9", "-9"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural)
        ], null),
        new ChordType("11th", ["11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural)
        ], null),
        new ChordType("Major ♯11", ["maj#11", "Ma#11", "M#11", "Ma#11", "ma#11", "△#11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.sharp)
        ], null),
        new ChordType("Minor 11", ["min11", "m11", "Mi11", "mi11", "-11"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural)
        ], null),
        new ChordType("13th", ["13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Major 13", ["maj13", "Ma13", "M13", "Ma13", "ma13", "△13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.natural),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.natural),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.sharp),
            new ChordNote(6, Accidental.natural)
        ], null),
        new ChordType("Minor 13", ["min13", "m13", "Mi13", "mi13", "-13"], [
            new ChordNote(1, Accidental.natural),
            new ChordNote(3, Accidental.flat),
            new ChordNote(5, Accidental.natural),
            new ChordNote(7, Accidental.flat),
            new ChordNote(2, Accidental.natural),
            new ChordNote(4, Accidental.natural),
            new ChordNote(6, Accidental.natural)
        ], null)
    ])
]);