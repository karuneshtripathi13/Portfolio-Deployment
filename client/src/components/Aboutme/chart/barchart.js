import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const state = {
    labels: ["",'React JS','HTML','CSS','NodeJS','JavaScript','UI Design','Scikit Learn','Python','Java','C++/C'],
    datasets: [
      {
        label: 'Skill Levels',
        backgroundColor: 'gold',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'black',
        hoverBorderColor: 'gold',
        data: [0,90, 95, 90, 80,85,70,80,85,90,95]
      }
    ]
}

export default class barchart extends React.Component {
  render() {
    return (
        <div>
            <HorizontalBar data={state} />
        </div>
    );
  }
}