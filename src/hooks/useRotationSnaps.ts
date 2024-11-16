import React from 'react';

export const useRotationSnaps = (amount: number) => React.useMemo(() => {
    const angles:number[] = [];
    for(let i=0; i<=360; i+=amount){
      angles.push(i);
    }
    return angles;
}, [amount]);