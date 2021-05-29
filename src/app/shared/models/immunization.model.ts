export interface Immunization {
    id?: string;
    identifier?: Identifier[];
    status: 'completed' | 'entered-in-error' | 'not-done';
    statusReason?: CodeableConcept;
    vaccineCode: CodeableConcept;
    patient: Reference;
    encounter?: Reference;
    occurrenceString: string;
    recorded?: string;
    primarySource?: boolean;
    reportOrigin?: CodeableConcept;
    location?: Reference;
    manufacturer?: Reference;
    lotNumber?: string;
    expirationDate?: string;
    site?: CodeableConcept;
    route?: CodeableConcept;
    doseQuantity?: SimpleQuantity;
    performer?: [{
        function?: CodeableConcept;
        actor: Reference;
    }];
    note?: Annotation[];
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    isSubpotent?: boolean;
    subpotentReason?: CodeableConcept[];
    education?: [{
        documentType?: string;
        reference?: string;
        publicationDate?: string;
        presentationDate?: string;
    }];
    programEligibility?: CodeableConcept[];
    fundingSource?: CodeableConcept;
    reaction?: [{
        date?: string;
        detail?: Reference;
        reported?: boolean;
    }];
    protocolApplied?: [{
        series?: string;
        authority?: Reference;
        targetDisease?: CodeableConcept[];
        doseNumberString: string;
        seriesDosesString?: string;
    }];
}

export interface Identifier {
    use?: 'usual' | 'official' | 'temp' | 'secondary' | 'old';
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: Reference;
}

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

export interface Period {
    start?: string;
    end?: string;
}

export interface Reference {
    reference?: string;
    type?: string;
    identifier?: Identifier;
    display?: string;
}

export interface SimpleQuantity {
    value?: string;
    currency?: string;
}

export interface Annotation {
    authorString?: string;
    time?: string;
    text: string;
}
