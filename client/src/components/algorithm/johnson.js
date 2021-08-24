import React from 'react';

let data2 = [
    [4, 7],
    [2, 5],
    [5, 1],
    [3, 6],
    [1, 4],
];

const findArgMin = (data) => {
    let minVal = 1000000;
    let minI, minJ;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (data[i][j] < minVal) {
                minVal = data[i][j];
                minI = i;
                minJ = j;
            }
        }
    }
    console.log(minVal);
    return { minI, minJ };
};

export const johnson = (data) => {
    //console.log(data);
    let l = 0;
    let k = data.length - 1;
    let i_star, j_star;
    let newData = Array(data.length);
    while (data.length != 0) {
        //  console.log(`TO JEST DATA PRZED MIN ${data}`);
        let minVals = findArgMin(data);
        // console.log(`MIN VALUES: ${minVals}`);
        if (data[minVals.minI][0] < data[minVals.minI][1]) {
            newData[l] = data[minVals.minI];
            l++;
        } else {
            newData[k] = data[minVals.minI];
            k = k - 1;
        }
        data.splice(minVals.minI, 1);
        // console.log(`MIN VALUES: ${minVals}`);
    }
    //onsole.log(oldData);
    console.log('NOWE');
    console.log(newData);
};
