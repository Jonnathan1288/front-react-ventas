import { TableSalesProps } from "../props/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Title } from "./Title";

export const TableSale = ({ data }: TableSalesProps) => {
    return (
        <>
            <Title title="TABLA CONCESIONARIO" />
            <DataTable
                value={data}
                dataKey="concecionario"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Mstrando {first} to {last} of {totalRecords} concecionarios"
            >
                <Column
                    field="concecionario"
                    header="CONCESIONARIO"
                    sortable
                    style={{ minWidth: "10rem" }}
                ></Column>

                <Column
                    field="total"
                    header="CANTIDAD"
                    sortable
                    style={{ minWidth: "10rem" }}
                ></Column>
            </DataTable>
        </>
    );
};
