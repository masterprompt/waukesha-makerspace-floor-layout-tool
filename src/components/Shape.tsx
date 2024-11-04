import { Circle, Rect } from "react-konva";
import { IPrimitive, IRectangle, PrimitiveType, ICircle, IShape } from "../types";
import React from "react";

export const Primitive = ({ primitive }: { primitive: IPrimitive }) => {
    switch(primitive.type) {
        case PrimitiveType.Rectangle:
            const rectangle = primitive as IRectangle;
            return (
                <Rect
                    x={primitive.x}
                    y={primitive.y}
                    width={rectangle?.width}
                    height={rectangle?.height}
                    fill={primitive.fill}
                    shadowBlur={5}
                />
            );
        case PrimitiveType.Rectangle:
            const circle = primitive as ICircle;
            return (
                <Circle
                    x={primitive.x}
                    y={primitive.y}
                    radius={circle.radius}
                    fill={primitive.fill}
                    shadowBlur={5}
                />
            );
    }
    return null;
};

export const Shape = ({ shape }: { shape: IShape }) => {
    return (
        <>
            {shape.primitives.map(primitive => (
                <Primitive
                    key={primitive.id}
                    primitive={primitive}
                />
            ))}
        </>
    );
};

export const Shapes = () => {
    const [ shapes ] = React.useState<IShape[]>([]);
    return (
        <>
            {shapes.map((shape, key) => (
                <Shape shape={shape} key={key}/>
            ))}
        </>
    );
};