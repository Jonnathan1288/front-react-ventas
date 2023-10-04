import { Chart } from "primereact/chart";

import React, { useState, useEffect } from "react";
import { ChartAllProps } from "../props/data";
import { Title } from "./Title";

export const ChartVenta = ({ total, completo, incompleto, concecionario }: ChartAllProps) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue("--text-color");
        const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
        const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
        const data = {
            labels: concecionario,
            datasets: [
                {
                    label: "TOTAL",
                    backgroundColor: documentStyle.getPropertyValue("--blue-500"),
                    borderColor: documentStyle.getPropertyValue("--blue-500"),
                    data: total,
                },
                {
                    label: "COMPLETO",
                    backgroundColor: documentStyle.getPropertyValue("--green-500"),
                    borderColor: documentStyle.getPropertyValue("--green-500"),
                    data: completo,
                },
                {
                    label: "INCOMPLETO",
                    backgroundColor: documentStyle.getPropertyValue("--pink-500"),
                    borderColor: documentStyle.getPropertyValue("--pink-500"),
                    data: incompleto,
                },
            ],
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500,
                        },
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, [, total]);

    return (
        <>
            <Title title="GRÁFICO" />
            <div className="card">
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </>
    );
};
