'use client'
import { createContext, useState } from 'react';
import type {ReactNode} from 'react';

const PagesContext = createContext();

export function PagesProvider({children} : {children: ReactNode}) {

  const [pageExit, setPageExit] = useState(false);
  return (
    <PagesContext.Provider value={{ pageExit, setPageExit }}>
      {children}
    </PagesContext.Provider>
  );
}

export default PagesContext