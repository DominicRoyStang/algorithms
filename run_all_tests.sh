#!/bin/bash

SRC_FOLDER=$(dirname $0)/src

node $SRC_FOLDER/depthFirstSearch/depthFirstSearchArrays.test.js
node $SRC_FOLDER/depthFirstSearch/depthFirstSearchGraph.test.js

node $SRC_FOLDER/findAllSubsets/findAllSubsets.test.js

node $SRC_FOLDER/maxSubsetSum/maxAdjacentSubsetSum.test.js
node $SRC_FOLDER/maxSubsetSum/maxNonAdjacentSubsetSum.test.js

node $SRC_FOLDER/sort/mergeSort.test.js
