export interface ISVG {
    type: string;
    isFolder: boolean;
    opened?: boolean;
}

export interface IArchitecture {
    fileTree: IFile;
    onClicking: (name: string) => void;
}

export interface IFile {
    id: number;
    name: string;
    type: 'file' | 'folder';
    children?: IFile[];
    content?: string;
}

export interface ITreeSlice {
    tabsFile: string[];
    openFile: string
}