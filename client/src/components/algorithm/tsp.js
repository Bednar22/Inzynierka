import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
//import { bellman, petlaBellmana } from './bellmanFord';

const TSP = (props) => {
    //const [graph, setGraph] = useState([]);

    const graphBellman = [
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

    const bellman = (src) => {
        const V = 31;
        const E = graphBellman.length;
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
                if (dis[graphBellman[j][0]] + graphBellman[j][2] < dis[graphBellman[j][1]])
                    dis[graphBellman[j][1]] = dis[graphBellman[j][0]] + graphBellman[j][2];
                //sciezka[graph[j][1]] = String(graphBellman[j][0]) + '->';
                //console.log(`aktualnie ${sciezka}`);
            }
        }
        for (var i = 0; i < E; i++) {
            var x = graphBellman[i][0];
            var y = graphBellman[i][1];
            var weight = graphBellman[i][2];
            if (dis[x] != 1000000000 && dis[x] + weight < dis[y])
                console.log('Graph contains negative' + ' weight cycle<br>');
        }

        let wyniki = [];
        //console.log(sciezka);
        for (var i = 0; i < V; i++) wyniki.push(dis[i]);

        //for (let i = 0; i < sciezka.length; i++) {}

        return wyniki;
    };

    const petlaBellmana = () => {
        let V = 31;
        let nowy = [];
        for (let i = 0; i < V; i++) {
            nowy.push(bellman(i));
            // setWszystkieWyniki((prevWyniki) => [...prevWyniki, nowy]);
        }
        //console.log(nowy);
        return nowy;
    };

    // useEffect(() => {
    //     let cos = petlaBellmana();
    //     setGraph(cos);
    // });
    const swap = (route, i, j) => {
        let newRoute = [];
        let helpRoute = [];

        //1st step
        // helpRoute = route.slice(0, i - 1);
        // //console.log(helpRoute);
        // newRoute = helpRoute;
        // //2nd
        // helpRoute = route.slice(i - 1, k);
        // //console.log(helpRoute);
        // newRoute = newRoute.concat(helpRoute.reverse());
        // //3rd
        // helpRoute = route.slice(k, route.length);
        // //console.log(helpRoute);
        // newRoute = newRoute.concat(helpRoute);

        let m = route
            .slice(
                Math.min((i + 1) % route.length, (j + 1) % route.length),
                Math.max((i + 1) % route.length, (j + 1) % route.length)
            )
            .reverse();
        let l = route.slice(0, Math.min((i + 1) % route.length, (j + 1) % route.length));
        let r = route.slice(Math.max((i + 1) % route.length, (j + 1) % route.length), route.length);

        route = l.concat(m).concat(r);

        return route;
    };

    const calcDistance = (route, graph) => {
        const valArr = [
            [0, 5, 6, 7, 9, 1, 2, 2, 6, 11],
            [5, 0, 4, 2, 2, 4, 5, 8, 12, 15],
            [6, 4, 0, 8, 1, 6, 14, 2, 6, 9],
            [7, 2, 8, 0, 3, 2, 4, 5, 7, 1],
            [9, 2, 1, 3, 0, 3, 13, 9, 6, 9],
            [1, 4, 6, 2, 3, 0, 2, 4, 1, 6],
            [2, 5, 14, 4, 13, 2, 0, 4, 4, 7],
            [2, 8, 2, 5, 9, 4, 4, 0, 12, 12],
            [6, 12, 6, 7, 6, 1, 4, 12, 0, 7],
            [11, 15, 9, 1, 9, 6, 7, 12, 7, 0],
        ];

        let dist = 0;
        for (let i = 0; i <= route.length - 2; i++) {
            dist += graph[route[i]][route[i + 1]];
        }
        return dist;
    };

    let bestRoute = [];
    let best_distance = 10000;

    //MY OPT ALG ??????????????????????????
    const myTwoOpt = (route) => {
        let graph = petlaBellmana();
        //console.log(graph);
        let newRoute = [];
        let dist = calcDistance(route, graph);
        let bestDistance = 1000000;

        for (let k = 0; k < 10; k++) {
            //while (1 == 1) {

            for (let i = 0; i < route.length; i++) {
                for (let j = i + 2; j < route.length; j++) {
                    // let distance1 =
                    //     calcDistanceBetween(i, (i + 1) % route.length) + calcDistanceBetween(j, (j + 1) % route.length);
                    // let distance2 =
                    //     calcDistanceBetween(i, j) + calcDistanceBetween((i + 1) % route.length, (j + 1) % route.length);
                    // console.log(distance1);
                    // console.log(distance2);
                    // d1 = cities[i].dist(cities[(i + 1) % totalCities]) + cities[j].dist(cities[(j + 1) % totalCities]);
                    // d2 = cities[i].dist(cities[j]) + cities[(i + 1) % totalCities].dist(cities[(j + 1) % totalCities]);
                    newRoute = swap(route, i, j);
                    let newDistance = calcDistance(newRoute, graph);
                    if (newDistance < dist) {
                        if (newDistance < bestDistance) {
                            bestRoute = newRoute;
                            bestDistance = newDistance;
                        }
                        console.log(` // ${route} +++ ${newDistance} ///`);
                        console.log(` // ${newRoute} +++ ${newDistance} ///`);
                    }
                }
            }
        }

        console.log(bestRoute);
        console.log(calcDistance(bestRoute, graph));
    };

    const route = [1, 7, 3, 0, 4, 5, 2, 8, 6, 9];

    return (
        <>
            <h1>{myTwoOpt(route)}</h1>
            {/* <h1>{swap(route, 1, 3)}</h1> */}
        </>
    );
};

export default TSP;
