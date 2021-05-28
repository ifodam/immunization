import { FormControl, FormGroup } from '@angular/forms';

export function getIdentifierForm(): FormGroup {
    return new FormGroup({
        system : new FormControl(),
        value: new FormControl()
    });
}
