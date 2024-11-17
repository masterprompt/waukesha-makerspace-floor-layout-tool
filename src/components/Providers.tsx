import { composeProvider } from 'react-compose-provider';
import { DownloadImageProvider } from './DownloadImageProvider';
import React from 'react';
import { ZoomProvider } from './ZoomProvider';
import { SelectedTransformProvider } from './SelectedTransformProvider';
import { ItemsProvider } from './ItemsProvider';

const Provider = composeProvider(
    DownloadImageProvider,
    ZoomProvider,
    ItemsProvider,
    SelectedTransformProvider,
);

export const Providers = ({ children }: React.PropsWithChildren) => (<Provider>{children}</Provider>);