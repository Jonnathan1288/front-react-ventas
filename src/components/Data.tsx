import React, { useEffect, useState } from "react";
import { Venta } from "../interface/venta";
import { VentasService } from "../service/venta-service";
import { Table } from "./Table";

import { ChartVenta } from "./ChartVenta";
import { DateRequest } from "../interface/date-request";
import { Box, Button, Input, SimpleGrid } from "@chakra-ui/react";
import { TableSale } from "./TableSale";
import { DataFilterChart } from "../interface/data-chart";

export const Data = () => {
    let requestEmpty: DateRequest = {
        startDate: null,
        endDate: null,
    };

    const [ventas, setVentas] = useState<Venta[]>([]);

    const [startDate, setStartDate] = useState<any>(null);

    const [endDate, setEndDate] = useState<any>(null);

    const [request, setRequest] = useState<DateRequest>(requestEmpty);

    const [dataChartAll, setDataChartAll] = useState<DataFilterChart[]>([]);

    const fechDataAll = async () => {
        try {
            const dataResponse = await VentasService.getData();
            const dataResponseChart = await VentasService.getChartFiltered();
            setVentas(dataResponse);
            setDataChartAll(dataResponseChart);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fechDataAll();
    }, []);

    const total: number[] = dataChartAll.map((i) => i.total);
    const completo: number[] = dataChartAll.map((i) => i.completo);
    const incompleto: number[] = dataChartAll.map((i) => i.incompleto);
    const concecionario: string[] = dataChartAll.map((i) => i.concecionario);

    const handleRequest = () => {
        VentasService.requesData(request)
            .then((e) => {
                setVentas(e);
            })
            .catch((err) => {});

        VentasService.getChartFilteredDate(request)
            .then((e) => {
                setDataChartAll(e);
            })
            .catch((err) => {});
    };

    useEffect(() => {
        setRequest({ startDate, endDate });
    }, [startDate, endDate]);

    return (
        <>
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px" p={5}>
                <Box>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Box>
                <Box>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Box>
            </SimpleGrid>
            <div className="data p-3">
                <Button colorScheme="teal" size="md" type="button" onClick={handleRequest}>
                    Obtener
                </Button>

                <Table ventas={ventas} />
            </div>

            <SimpleGrid columns={2} spacingX="40px" spacingY="20px" p={5}>
                <Box>
                    {ventas && ventas ? (
                        <>
                            <ChartVenta
                                total={total}
                                completo={completo}
                                incompleto={incompleto}
                                concecionario={concecionario}
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </Box>
                <Box>
                    <TableSale data={dataChartAll} />
                </Box>
            </SimpleGrid>
        </>
    );
};
