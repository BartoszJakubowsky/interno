'use client'
import { createContext, useState } from 'react';
import type {ReactNode, Dispatch, SetStateAction} from 'react';


interface ContextProps {
  pageExit: boolean,
  setPageExit: Dispatch<SetStateAction<boolean>>
}
const PagesContext = createContext<ContextProps>({ pageExit: false, setPageExit: () => {} });

export function PagesProvider({children} : {children: ReactNode}) {

  const [pageExit, setPageExit] = useState<boolean>(false);
  return (
    <PagesContext.Provider value={{ pageExit, setPageExit }}>
      {children}
    </PagesContext.Provider>
  );
}

export default PagesContext