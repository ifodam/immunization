import { FormControl, FormGroup } from '@angular/forms';

export function getCodeableConceptForm(): FormGroup {
    return new FormGroup({
        text : new FormControl()
    });
}
