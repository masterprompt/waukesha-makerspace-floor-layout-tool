import { IImage } from "../types";
import { pick, assign, find } from "lodash";

export type Layout = string;

const defaultLayout = 'W3siaWQiOiJtYWluQmVuY2giLCJ4Ijo3NTMuNTM3Nzk3OTc3OTI3OCwieSI6MjU1LjAwODIxODIxODE0MDMsInJvdGF0aW9uIjowfSx7ImlkIjoiaGVhdnlNZXRhbFNoZWxmMSIsIngiOi02MTEuMTAwNzc1MTg5NDE3NywieSI6LTYzNC4wNzQ0ODg1NDI0MjIsInJvdGF0aW9uIjowfSx7ImlkIjoiaGVhdnlNZXRhbFNoZWxmMiIsIngiOi00OTMuOTM0ODM3MDg5MTkwNSwieSI6LTYzNC4wNzQ0ODg1NDI0MDI4LCJyb3RhdGlvbiI6MH0seyJpZCI6ImxpcXVpZHNDYWJpbmV0IiwieCI6LTg4MS45MTEyODk4NDgyMzU1LCJ5IjotNjExLjIwMDQ0Mjk2NTQwNSwicm90YXRpb24iOi05MC4wMDAwMDAwMDAwMDAwNn0seyJpZCI6InJlZFRvb2xCb3giLCJ4IjotODkzLjY3NzQ0OTQzMTE0MzUsInkiOi0xNTguNTE4NjIyMTM1NjMxMzUsInJvdGF0aW9uIjotOTB9LHsiaWQiOiJibGFja1Rvb2xCb3giLCJ4IjotODg2Ljc4NTMzNTQyNTI0OTEsInkiOi0yODkuNDY4Nzg4MjQ3NjMwMywicm90YXRpb24iOi04OS45OTk5OTk5OTk5OTk4N31d';

export class LayoutService {
    private layoutUrlKey = 'layout';
    generateFurnitureLayoutBase64 (furniture: IImage[]) {
        const pieces = furniture.filter(f => f.draggable);
        const funitureJson = JSON.stringify(pieces.map(f => pick(f, ['id', 'x', 'y', 'rotation'])));
        return btoa(funitureJson);
    }

    updateFurnitureWithLayout (furniture: IImage[], layout: Layout) {
        const furnitureJson = atob(layout);
        const furnitureTelemetry = JSON.parse(furnitureJson) as IImage[];
        if (Array.isArray(furnitureTelemetry)) {
            furnitureTelemetry.forEach(f => {
                const piece = find(furniture, { id: f.id, draggable: true });
                if (piece) {
                    assign(piece, f);
                }
            });
        }
    }

    getLayoutFromUrl () {
        const url = new URL(window.location.href);
        return url.searchParams.get(this.layoutUrlKey) || defaultLayout;
    }

    getLayoutUrl (layout: Layout) {
        const url = new URL(window.location.href);
        url.searchParams.set(this.layoutUrlKey, layout);
        return url.toString();
    }

    setLayoutToUrl (layout: Layout) {
        const url = new URL(window.location.href);
        url.searchParams.set(this.layoutUrlKey, layout);
        window.history.pushState(null, '', url.toString());
    }

}