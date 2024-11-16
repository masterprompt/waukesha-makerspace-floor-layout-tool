import { IFurnishing } from "../types";
import { pick, assign, find } from "lodash";

export type Layout = string;

const defaultLayout = 'W3siaWQiOiJtYWluQmVuY2giLCJ4IjotMTQ2LCJ5IjotNDAzLCJyb3RhdGlvbiI6MH0seyJpZCI6ImhlYXZ5TWV0YWxTaGVsZjEiLCJ4IjoxMjI4LCJ5IjotMTI0LCJyb3RhdGlvbiI6MH0seyJpZCI6ImhlYXZ5TWV0YWxTaGVsZjIiLCJ4IjoyOTcsInkiOi0yOTAsInJvdGF0aW9uIjowfSx7ImlkIjoibGlxdWlkc0NhYmluZXQiLCJ4IjotNjAsInkiOjM3MSwicm90YXRpb24iOjB9LHsiaWQiOiJibGFja1Rvb2xCb3giLCJ4Ijo1NjIsInkiOi0yMDMsInJvdGF0aW9uIjowfSx7ImlkIjoicmVkVG9vbEJveCIsIngiOi01OTMsInkiOi01NDMsInJvdGF0aW9uIjowfSx7ImlkIjoiY25jUm91dGVyIiwieCI6LTU1NiwieSI6LTMwLCJyb3RhdGlvbiI6MH0seyJpZCI6ImZsYXRTdG9ja1JhY2siLCJ4IjoyOTksInkiOi01MTcsInJvdGF0aW9uIjowfSx7ImlkIjoibGFzZXJFbmdyYXZlciIsIngiOjEwNjYsInkiOjE0MSwicm90YXRpb24iOjB9LHsiaWQiOiJsb2NrZXJzMSIsIngiOjEyMzQsInkiOjUwOCwicm90YXRpb24iOjB9LHsiaWQiOiJsb2NrZXJzMiIsIngiOjEzMDEsInkiOjE5LCJyb3RhdGlvbiI6MH0seyJpZCI6ImxvY2tlcnMzIiwieCI6NjgxLCJ5IjoyNDUsInJvdGF0aW9uIjowfSx7ImlkIjoibW9kdWxhclNoZWx2ZXNOYXJyb3cxIiwieCI6MTEyMSwieSI6LTI3Niwicm90YXRpb24iOjB9LHsiaWQiOiJtb2R1bGFyU2hlbHZlc05hcnJvdzIiLCJ4IjoxMjk5LCJ5IjotMjAsInJvdGF0aW9uIjowfSx7ImlkIjoibW9kdWxhclNoZWx2ZXNXaWRlIiwieCI6MzUwLCJ5IjozOTAsInJvdGF0aW9uIjowfSx7ImlkIjoicGFsbGV0UmFja3MiLCJ4IjoyNDMsInkiOjgxLCJyb3RhdGlvbiI6MH0seyJpZCI6IndpcmVSYWNrU2hlbHZlczEiLCJ4Ijo5MzksInkiOi0xMzYsInJvdGF0aW9uIjowfSx7ImlkIjoid2lyZVJhY2tTaGVsdmVzMiIsIngiOjkwMCwieSI6NDgsInJvdGF0aW9uIjowfV0=';

export class LayoutService {
    private layoutUrlKey = 'layout';
    generateFurnitureLayoutBase64 (furniture: IFurnishing[]) {
        const pieces = furniture.filter(f => f.draggable);
        const funitureJson = JSON.stringify(pieces.map(f => pick(f, ['id', 'x', 'y', 'rotation'])));
        return btoa(funitureJson);
    }

    updateFurnitureWithLayout (furniture: IFurnishing[], layout: Layout) {
        const furnitureJson = atob(layout);
        const furnitureTelemetry = JSON.parse(furnitureJson) as IFurnishing[];
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