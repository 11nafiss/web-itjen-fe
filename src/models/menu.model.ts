export interface MenuData {
    menuId: number;
    menuText: string;
    menuLevel: number;
    parentId: number;
    link: string;
    hasSubMenu: boolean;
    isExternalLink: boolean;
}