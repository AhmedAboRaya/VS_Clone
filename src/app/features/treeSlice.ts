import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITreeSlice } from '../../components/interfaces/interfaces'



const initialState: ITreeSlice = {
    tabsFile: [],
    openFile: '',
}

export const treeSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
        state.tabsFile.push(action.payload);
        state.openFile = action.payload;
    },
    decrement: (state, action: PayloadAction<string>) => {
        const newTabsFile = state.tabsFile.filter(tab => tab !== action.payload);
        let temp: boolean = false;

        if(action.payload === state.openFile)
            temp = true;

        const len = newTabsFile.length;
        state.tabsFile = newTabsFile;

        if (!temp)
            state.openFile = state.tabsFile[len-1];
        else
            state.openFile = state.tabsFile[1];
        
    },
    changeTab : (state, action: PayloadAction<string>) =>{
        state.openFile = action.payload;
    }
  },
})

export const { increment, decrement, changeTab } = treeSlice.actions

export default treeSlice.reducer