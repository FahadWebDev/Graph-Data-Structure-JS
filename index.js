console.log("----- Start -----")

function Graph() {
  let adjacencyList = {};

  const addVertex = (vertex) => {
    if (!adjacencyList[vertex]) {
      adjacencyList[vertex] = new Set()
      return "Added"
    }
    return "Already Added"
  }

  const addEdge = (vertex1, vertex2) => {
    if (!adjacencyList[vertex1]) {
      addVertex(vertex1)
    }
    if (!adjacencyList[vertex2]) {
      addVertex(vertex2)
    }
    adjacencyList[vertex2].add(vertex1)
    adjacencyList[vertex1].add(vertex2)
    return "Edges Added"
  }

  const displayList = () => {
    for (let item in adjacencyList) {
      console.log(item + " => " + [...adjacencyList[item]])
    }
    return "Displayed"
  }


  const removeVertex = (vertex) => {
    if (!adjacencyList[vertex]) {
      return
    }
    for (const item of adjacencyList[vertex]) {
      removeEdge(item, vertex)
    }

    delete adjacencyList[vertex]
    return "Removed"
  }

  const removeEdge = (vertex1, vertex2) => {
    adjacencyList[vertex1].delete(vertex2);
    adjacencyList[vertex2].delete(vertex1);
  }
  const isConnected = (vertex1,vertex2) => {
   return adjacencyList[vertex1].has(vertex2) && adjacencyList[vertex2].has(vertex1)
  }

  return { addVertex, addEdge, displayList, removeVertex,isConnected }
}

const graph = new Graph();
console.log("Add vertex", graph.addVertex("A"))
console.log("Add vertex", graph.addVertex("B"))
console.log("Add vertex", graph.addVertex("C"))
console.log("Add edge", graph.addEdge("B", "A"))
console.log("Add edge", graph.addEdge("B", "C"))
console.log("Display List", graph.displayList())
console.log("Is Connected", graph.isConnected("B","B"))
console.log("Is Connected", graph.isConnected("B","C"))
console.log("Remove Vertex", graph.removeVertex("B"))
console.log("Display List", graph.displayList())

