import React, { Component } from 'react';
import Square from './square.jsx';

var defaultPrimaryColor = "#ffffff";
var defaultContrastColor = "#000000";
var defaultRows = 4;
var defaultCols = 4;
var rectSize = 10;
var fontSize = 10;
var axisHeight = fontSize;
var axisWidth = fontSize + 5;
var zoom = 4;

class Grid extends React.Component {
    constructor(props) {
        super(props);

        const gridArray = new Array(defaultCols);

        for (let i = 0; i < defaultCols; i++) {
            gridArray[i] = new Array(defaultRows);
            for (let j = 0; j < defaultRows; j++) {
                gridArray[i][j] = 'primary';
            }
        }

        this.state = {
            grid: gridArray,
        }

        console.log(this.state.grid);
        
    }

    render(props) {
        let flatGrid = [];
        this.state.grid.map((col, index) => {
            col.map((rowItem, rIndex) => {
                flatGrid.push(
                    <Square size={rectSize} key={rIndex+','+index} location={[rIndex, index]} fill={defaultPrimaryColor} stroke="#eee" />
                );
            });
        });

        console.log(flatGrid)
        return (
            <div>
                <p>Hello I am grid</p>
                <svg>
                    { flatGrid }
                </svg>
            </div>
        );
    }
}

export default Grid;