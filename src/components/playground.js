import React from 'react';
import ReactDOM from 'react-dom';
import joint from 'jointjs/index';
import { connect } from 'react-redux'
import Shapes from '../jointjs-configuration/Shapes'

const vertexes = ["A", "B", "C", "D"];
const edges = [("A", "B"), ("C", "D"), ("A", "D")];

class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: 600,
            height: 200,
            model: this.graph,
            gridSize: 1
        });

        const node1 = Node('Hello')
        const node2 = Node('World')
        node2.translate(300);

        const link = Edge(node1, node2)

        this.graph.addCells([node1, node2, link]);
    }

    render() {
        return (
            <div>
                <h1>Playground!</h1>
                <div ref="placeholder" ></div>
            </div>);
    }
}

function Node(name) {
    return new joint.shapes.basic.Circle({
        size: { width: 100, height: 100 },
        attrs: {
            circle: { fill: 'blue' },
            text: { text: name, fill: 'white' }
        }
    });
}
function Edge(src, dst) {
    return new joint.dia.Link({
        source: { id: src.id },
        target: { id: dst.id }
    });
}

function mapStateToProps(state) {
    if (state.newNodes.length == undefined)
        return { newNodes: [] };
    else
        return { newNodes: [state.newNodes] };
}

export default connect(mapStateToProps)(Graph)
