class Note {
    name: string;
    halfStepsFromRoot: number;
    scaleDegree: number;

    // ---------------------------
    constructor(name: string, halfStepsFromRoot: number, scaleDegree?: number) {
        this.name = name;
        this.halfStepsFromRoot = halfStepsFromRoot;
        this.scaleDegree = scaleDegree;
    }
}