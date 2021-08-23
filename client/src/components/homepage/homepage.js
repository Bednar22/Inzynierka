import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularItems from './popularItems';
import SlidingCard from './SlidingCard';
import Grid from '@material-ui/core/Grid';
import { Button, Slide, Paper } from '@material-ui/core';
import BellmanFord from '../algorithm/bellmanFord';
import TSP from '../algorithm/tsp';
//import Tsp from '../algorithm/tsp';
const Homepage = () => {
    useEffect(() => {
        axios
            .get('/product/get/search/p')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    //(from, to, weight)
    // var graph = [
    //     [0, 1, -1],
    //     [0, 2, 4],
    //     [1, 2, 3],
    //     [1, 3, 2],
    //     [1, 4, 2],
    //     [3, 2, 5],
    //     [3, 1, 1],
    //     [4, 3, -3],
    // ]; //BellmanFord(graph, V, E, 0);

    //TSP

    var n = 4;
    var graph = [
        [0, 0, 0, 20],
        [0, 0, 0, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0],
    ];
    var V = 4;
    var v = Array(n).fill(false);
    v[0] = true;
    const [ans, setAns] = useState(1000000);
    var answ = 1000000;
    const tsp = (graph, currPos, n, count, cost) => {
        // Boolean array to check if a node
        // has been visited or not

        // Mark 0th node as visited

        // If last node is reached and it has a link
        // to the starting node i.e the source then
        // keep the minimum value out of the total cost
        // of traversal and "ans"
        // Finally return to check for more possible values
        if (count == n && graph[currPos][0]) {
            setAns(Math.min(ans, cost + graph[currPos][0]));
            //answ = Math.min(answ, cost + graph[currPos][0]);
            return;
        }

        // BACKTRACKING STEP
        // Loop to traverse the adjacency list
        // of currPos node and increasing the count
        // by 1 and cost by graph[currPos][i] value
        for (var i = 0; i < n; i++) {
            if (!v[i] && graph[currPos][i]) {
                // Mark as visited
                v[i] = true;
                tsp(graph, i, n, count + 1, cost + graph[currPos][i]);

                // Mark ith node as unvisited
                v[i] = false;
            }
        }
    };

    useEffect(() => {
        tsp(graph, 0, n, 1, 0);
    }, []);
    return (
        <>
            <Grid container direction='column' xs={12} sm={12} spacing={5} alignItems='center'>
                <SlidingCard></SlidingCard>

                <Grid item>
                    <PopularItems></PopularItems>
                </Grid>
                <Grid>{/* <BellmanFord graph={graph} V={31}  src={0}></BellmanFord> */}</Grid>
                <Grid>
                    <TSP></TSP>
                </Grid>
            </Grid>
        </>
    );
};

export default Homepage;
