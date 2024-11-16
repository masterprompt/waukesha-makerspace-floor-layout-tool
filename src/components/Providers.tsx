import { composeProvider } from 'react-compose-provider';
import { DownloadImageProvider } from './DownloadImageProvider';
import React from 'react';
import { ZoomProvider } from './ZoomProvider';
import { FurnitureProvider } from './FurnitureProvider';
import { ZonesProvider } from './ZonesProvider';
import { SelectedTransformProvider } from './SelectedTransformProvider';

const Provider = composeProvider(
    DownloadImageProvider,
    ZoomProvider,
    FurnitureProvider,
    ZonesProvider,
    SelectedTransformProvider,
);

export const Providers = ({ children }: React.PropsWithChildren) => (<Provider>{children}</Provider>);