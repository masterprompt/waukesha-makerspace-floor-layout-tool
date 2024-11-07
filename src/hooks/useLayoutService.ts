import React from 'react';
import { LayoutService } from '../services/LayoutService';
export const useLayoutService = () => React.useMemo(() => new LayoutService(), [] );