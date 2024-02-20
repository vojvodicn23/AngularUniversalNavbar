/* export class UniversalNavbarConfig {
    position: 'left' | 'right' | 'top';

    constructor(config: Partial<UniversalNavbarConfig> = {}) {
        this.position = config.position ?? 'top';
       
    }
} */

import { Type } from "@angular/core";

export interface NavItem {
    name?: string;
    route?: string;
    children?: NavItem[]; 
    component?: Type<any>;
    componentData?: any;
    styles?: {[key: string]: string};
    classes?: string[];
}
