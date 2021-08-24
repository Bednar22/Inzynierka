import React, { useState } from 'react';

//export default function BellmanFord(props) {
const graph = [
    [0, 1, 4], //1
    [0, 2, 5],
    [0, 3, 14],
    [1, 0, 4], //2
    [2, 4, 4],
    [2, 5, 14],
    [2, 11, 5],
    [2, 0, 5], //3 done
    [3, 0, 14],
    [3, 7, 4], //4
    [4, 2, 4], //5
    [5, 2, 14],
    [5, 6, 4], //6
    [6, 5, 4], //7
    [7, 3, 4],
    [7, 8, 14], //8
    [8, 7, 14],
    [8, 9, 5], //9
    [9, 10, 5],
    [9, 8, 5], //10
    [10, 19, 5],
    [10, 9, 5],
    [10, 14, 14], //11
    [11, 2, 5],
    [11, 12, 4],
    [11, 15, 6],
    [11, 13, 14], //12
    [12, 11, 4], //13
    [13, 12, 14],
    [13, 14, 4], //14
    [14, 13, 4],
    [14, 11, 14], //15
    [15, 11, 6],
    [15, 16, 8],
    [15, 24, 15],
    [15, 29, 8], //16
    [16, 15, 8],
    [16, 17, 8],
    [16, 23, 15], //17
    [17, 16, 8],
    [17, 22, 15],
    [17, 18, 8], //18
    [18, 21, 15],
    [18, 19, 8],
    [18, 17, 8], //19
    [19, 18, 8],
    [19, 20, 15],
    [19, 25, 10],
    [19, 10, 6], //20
    [20, 19, 15], //21
    [21, 18, 15], //22
    [22, 17, 15], //23
    [23, 16, 15], //24
    [24, 15, 15], //25
    [25, 26, 15],
    [25, 27, 8],
    [25, 19, 10], //26
    [26, 25, 8], //27
    [27, 25, 8],
    [27, 28, 8], //28
    [28, 27, 8], //29
    [29, 15, 8], //30
    [29, 30, 15],
    [30, 29, 15], //31
];

const graphTest = [['A', 'B', 2], ['A', 'C', 4], ['B', 'D', 7][('D', 'A', 4)], ['D', 'C', 3]];
//const [wszystkieWyniki, setWszystkieWyniki] = useState([]);

const showPath = (path) => {
    let paths = [];
    for (let i = 0; i < path.length; i++) {
        paths[i] = path[i];
    }
};

export const bellman = (src) => {
    const V = 31;
    const E = graph.length;
    var dis = Array(V).fill(1000000000);

    // initialize distance of source as 0
    dis[src] = 0;
    let sciezka = new Array(V);
    sciezka.fill(null);
    // Relax all edges |V| - 1 times. A simple
    // shortest path from src to any other
    // vertex can have at-most |V| - 1 edges
    for (let i = 0; i < V - 1; i++) {
        for (let j = 0; j < E; j++) {
            if (dis[graph[j][0]] + graph[j][2] < dis[graph[j][1]]) {
                dis[graph[j][1]] = dis[graph[j][0]] + graph[j][2];
                sciezka[graph[j][1]] = graph[j][0];
            }
        }
    }
    for (let i = 0; i < E; i++) {
        let x = graph[i][0];
        let y = graph[i][1];
        let weight = graph[i][2];
        if (dis[x] != 1000000000 && dis[x] + weight < dis[y])
            console.log('Graph contains negative' + ' weight cycle<br>');
    }

    let wyniki = [];
    console.log(sciezka);
    for (var i = 0; i < V; i++) wyniki.push(dis[i]);

    console.log(wyniki);
    return wyniki;
};

export const petlaBellmana = () => {
    let V = 1;
    let nowy = [];
    for (let i = 0; i < V; i++) {
        nowy.push(bellman(i));
        // setWszystkieWyniki((prevWyniki) => [...prevWyniki, nowy]);
    }
    console.log(nowy);
    return nowy;
};

// return (
//     <>
//         {console.log('bellman')}
//         {petlaBellmana()}
//     </>
// );
//}

// Driver code
