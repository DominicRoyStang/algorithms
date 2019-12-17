#!/bin/bash

SRC_FOLDER=$(dirname $0)/src

node $SRC_FOLDER/utils/buildGraph.test.js

node $SRC_FOLDER/depthFirstSearch/depthFirstSearchAdjacencyList.test.js
node $SRC_FOLDER/depthFirstSearch/depthFirstSearchObjectGraph.test.js

node $SRC_FOLDER/findAllSubsets/findAllSubsets.test.js

node $SRC_FOLDER/maxSubsetSum/maxAdjacentSubsetSum.test.js
node $SRC_FOLDER/maxSubsetSum/maxNonAdjacentSubsetSum.test.js

node $SRC_FOLDER/sort/mergeSort.test.js
node $SRC_FOLDER/sort/quickSort.test.js

node $SRC_FOLDER/select/select.test.js
