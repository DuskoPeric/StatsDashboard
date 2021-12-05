export const getPercentage=(data,v1,v2)=>{
    let totalValue=0;
    let partialValue=0;
    for (const x of data) { 
        totalValue+= x[v1];
        partialValue+=x[v2];
     }
    return Math.round((100 * partialValue) / totalValue);
}
export const getCustomPercentage=(data)=>{
    let totalValue=0;
    let partialValue=0;
    for (const x of data) { 
        totalValue+= x.fpt+x.tpt+x.ftt;
        partialValue+=x.fps+x.tps+x.fts;
     }
    return Math.round((100 * partialValue) / totalValue);
}

export const calculateRadarData=(data)=>{
    let pts=0;
    let ast=0;
    let stl=0;
    let reb=0;
    let blk=0;
    for (const x of data) { 
        pts+= x.pts;
        ast+= x.ast;
        stl+= x.stl;
        reb+= x.reb;
        blk+= x.blk;
     }
    return [
        {
            name:'BLK',
            value:blk
        },
        {
            name:'AST',
            value:ast
        },
        {
            name:'STL',
            value:stl
        },
        {
            name:'PTS',
            value:pts
        },
        {
            name:'REB',
            value:reb
        },
    ]
}