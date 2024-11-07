import { IImage } from "../types";
import { pick, assign, find } from "lodash";

export type Layout = string;

const defaultLayout = 'W3siaWQiOiJtYWluQmVuY2giLCJ4Ijo3NTMuNTM3Nzk3OTc3OTI3OCwieSI6MjU1LjAwODIxODIxODE0MDMsInJvdGF0aW9uIjowfSx7ImlkIjoiaGVhdnlNZXRhbFNoZWxmIiwieCI6LTUzMCwieSI6MTU4LCJyb3RhdGlvbiI6MH0seyJpZCI6ImxpcXVpZHNDYWJpbmV0IiwieCI6LTg4MS45MTEyODk4NDgyMzU1LCJ5IjotNjExLjIwMDQ0Mjk2NTQwNSwicm90YXRpb24iOi05MC4wMDAwMDAwMDAwMDAwNn0seyJpZCI6ImJsYWNrVG9vbEJveCIsIngiOi04ODYuNzg1MzM1NDI1MjQ5MSwieSI6LTI4OS40Njg3ODgyNDc2MzAzLCJyb3RhdGlvbiI6LTg5Ljk5OTk5OTk5OTk5OTg3fSx7ImlkIjoicmVkVG9vbEJveCIsIngiOi04OTMuNjc3NDQ5NDMxMTQzNSwieSI6LTE1OC41MTg2MjIxMzU2MzEzNSwicm90YXRpb24iOi05MH0seyJpZCI6ImNuY1JvdXRlciIsIngiOjc1MCwieSI6NTI0LCJyb3RhdGlvbiI6MH0seyJpZCI6ImZsYXRTdG9ja1JhY2siLCJ4IjozNDAsInkiOjM2OCwicm90YXRpb24iOjB9LHsiaWQiOiJsYXNlckVuZ3JhdmVyIiwieCI6LTU4MCwieSI6MzI4LCJyb3RhdGlvbiI6MH0seyJpZCI6ImxvY2tlcnMxIiwieCI6LTMxMiwieSI6LTM0Miwicm90YXRpb24iOjB9LHsiaWQiOiJsb2NrZXJzMiIsIngiOi00NDgsInkiOi0zNDAsInJvdGF0aW9uIjowfSx7ImlkIjoibG9ja2VyczMiLCJ4IjotNTgyLCJ5IjotMzQ0LCJyb3RhdGlvbiI6MH0seyJpZCI6Im1vZHVsYXJTaGVsdmVzTmFycm93MSIsIngiOi00MjYsInkiOjUyLCJyb3RhdGlvbiI6MH0seyJpZCI6Im1vZHVsYXJTaGVsdmVzTmFycm93MiIsIngiOi0xOTQsInkiOjI0MCwicm90YXRpb24iOjB9LHsiaWQiOiJtb2R1bGFyU2hlbHZlc1dpZGUiLCJ4IjotNzgsInkiOjQzOCwicm90YXRpb24iOjB9LHsiaWQiOiJwYWxsZXRSYWNrcyIsIngiOjc4MiwieSI6LTE5NCwicm90YXRpb24iOjB9LHsiaWQiOiJ3aXJlUmFja1NoZWx2ZXMxIiwieCI6MjE4LCJ5IjotMzgyLCJyb3RhdGlvbiI6MH0seyJpZCI6IndpcmVSYWNrU2hlbHZlczIiLCJ4IjozOTYsInkiOi0zODAsInJvdGF0aW9uIjowfV0%3D';

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