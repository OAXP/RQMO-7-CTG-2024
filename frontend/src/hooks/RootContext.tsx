import React from 'react';
import { RootContextType } from '@src/interfaces/RootContextType';

const RootContext = React.createContext<RootContextType>({} as RootContextType);

export default RootContext;
