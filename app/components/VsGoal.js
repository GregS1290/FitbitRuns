import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  grid-area: 5 / 5 / span 4 / span 2;
  justify-content: center;
  font-size: 20px;
  background-color: #eae4d6;
  border: 2px solid black;
  border-radius: 5px;
`;

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#ED7D3A', '#0D1B2A'];

class VsGoal extends PureComponent {
  render() {
    return (
      <Div>
        <h3>Runs vs. Goal</h3>
        <ResponsiveContainer width='80%' height='95%'>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={60}
              cy={100}
              innerRadius={30}
              outerRadius={40}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Div>
    );
  }
}

export default VsGoal;
