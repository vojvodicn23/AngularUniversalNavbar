export class UniversalNavbarConfig {
    position: 'left' | 'right' | 'top';

    constructor(config: Partial<UniversalNavbarConfig> = {}) {
        this.position = config.position ?? 'top';
       
    }
}

export interface NavItems {
    name: string;
    route?: string;
    children?: NavItem[]; 
}

export interface NavItem {
    name: string;
    route: string;
}