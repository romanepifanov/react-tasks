export interface NavbarState {
    links: Array<NavbarLink>,
}

export interface NavbarLink {
    to: string,
    title: string,
}