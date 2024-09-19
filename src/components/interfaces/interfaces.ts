export interface ISVG {
    type: string;
    isFolder: boolean;
    opened?: boolean;
}

export interface IArchitecture {
    fileTree: IFile;
    onClicking: (id: number) => void;
    expanded: boolean;
}

export interface IFile {
    id: number;
    name: string;
    type: 'file' | 'folder';
    children?: IFile[];
    content?: string;
}