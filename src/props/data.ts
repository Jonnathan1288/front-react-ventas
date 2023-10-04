import { DataFilterChart } from "../interface/data-chart";
import { Venta } from "../interface/venta";

export interface TableDataProps {
    ventas: Venta[]
}

export interface ChartAllProps {
    total: number[]
    completo: number[]
    incompleto: number[]
    concecionario: string[]
}

export interface TableSalesProps {
    data: DataFilterChart[]
}