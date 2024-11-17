import React from 'react';
import { FurnitureService } from '../services/FurnitureService';
export const useFurnitureService = () => React.useMemo(() => new FurnitureService(), [] );