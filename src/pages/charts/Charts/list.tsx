import React from "react";

import {
    Bar,
    Pie,
    PieChart,
    BarChart,
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";

  /* The `ChartsList` component is a functional component in TypeScript React that renders multiple
  charts using the Recharts library. Here's a breakdown of what the component is doing: */
  export const ChartsList : React.FC = () => {
    
        const data = [
            { name: "a", value: 16 },
            { name: "b", value: 12 },
            { name: "c", value: 18 },
            { name: "d", value: 22 },
            { name: "e", value: 38 },
          ];
    return (
        <>
            <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
            <BarChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar type="monotone" dataKey="value" stroke="#8884d8" />
            </BarChart>
            <PieChart width={500} height={500}>
                <Pie
                data={data}
                dataKey="value"
                nameKey="date"
                cx="50%"
                cy="40%"
                outerRadius={150}
                fill="#82ca9d"
                label
                />
            </PieChart>
        </>
    );
  }