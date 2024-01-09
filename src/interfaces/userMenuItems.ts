import { MatIconRegistry } from '@angular/material/icon';

export interface userMenuItem {
    label: string;
    route: string;
    icon: keyof MatIconRegistry['_svgIconConfigs'];
}
