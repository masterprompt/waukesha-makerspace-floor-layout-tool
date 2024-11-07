import { IImage } from "../types";
import { pick, assign, find } from "lodash";

export type Layout = string;

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
        return url.searchParams.get(this.layoutUrlKey);
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