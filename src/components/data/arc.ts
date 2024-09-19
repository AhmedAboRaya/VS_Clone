import { IFile } from "../interfaces/interfaces";

export const architecture: IFile[] = [
    {
        id: 0,
        name: "VSCodeClone",
        type: 'folder',
        children:[
            {
                id: 1,
                name: 'node_modules',
                type: 'folder',
                children: [
                    {
                        id: 2,
                        name: 'dlv',
                        type: 'folder',
                        children: [
                            {
                                id: 6,
                                name: 'dist',
                                type: 'file',
                            },
                            {
                                id: 3,
                                name: 'index.js',
                                type: 'file',
                            },
                            {
                                id: 4,
                                name: 'package.json',
                                type: 'file',
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: 'gensync',
                        type: 'folder',
                        children: [
                            {
                                id: 7,
                                name: 'test',
                                type: 'folder',
                                children: [
                                    {
                                        id: 8,
                                        name: 'index.js',
                                        type: 'file',
                                    }
                                ]
                            },
                            {
                                id: 9,
                                name: 'index.js',
                                type: 'file',
                            },
                            {
                                id: 10,
                                name: 'package.json',
                                type: 'file',
                            }
                        ]
                    }
                ]
            },
            {
                id: 21,
                name: 'src',
                type: 'folder',
                children: [
                    {
                        id: 22,
                        name: 'App.tsx',
                        type: 'file',
                    },
                    {
                        id: 23,
                        name: 'App.css',
                        type: 'file',
                    }
                ]
            },
            {
                id: 12,
                name: 'components',
                type: 'folder',
                children:[
                    {            
                        id: 13,
                        name: 'data',
                        type: 'folder',
                        children:[
                            {
                                id: 16,
                                name: 'useData.tsx',
                                type: 'file',
                            },
                            {
                                id: 17,
                                name: 'icons.ts',
                                type: 'file',
                            }
                        ]
                    },
                    {            
                        id: 14,
                        name: 'Architecture.tsx',
                        type: 'file',
                    },
                    {            
                        id: 15,
                        name: 'LeftSide.tsx',
                        type: 'file',
                    },
                    {            
                        id: 15,
                        name: 'Layout.tsx',
                        type: 'file',
                    }
                ]
            },
            {
                id: 18,
                name: 'index.html',
                type: 'file',
            },
            {
                id: 19,
                name: 'file.ts',
                type: 'file',
            },
            {
                id: 20,
                name: 'tailwind.config.js',
                type: 'file',
            },
            {
                id: 11,
                name: 'README.md',
                type: 'file',
            }
        ]
    }
]