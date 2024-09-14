export interface ISVG {
    type: string;
}

export interface IArchitecture {
    id: number;
    name: string;
    type: string;
    onClicking?: (id: number) => void;
    expanded?: boolean;
}