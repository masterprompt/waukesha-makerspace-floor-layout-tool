import React from 'react';
import { ZoneService } from '../services/ZoneService';
export const useZoneService = () => React.useMemo(() => new ZoneService(), [] );