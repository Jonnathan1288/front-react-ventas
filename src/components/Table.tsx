import React from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TableDataProps } from "../props/data";
import { Title } from "./Title";

export const Table = ({ ventas }: TableDataProps) => {
    return (
        <>
            <Title title="TABLA VENTAS" />
            <div className="">
                <DataTable
                    value={ventas}
                    dataKey="idVenta"
                    paginator
                    rows={3}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Mstrando {first} to {last} of {totalRecords} ventas"
                >
                    <Column
                        field="concecionario"
                        header="CONCESIONARIO"
                        sortable
                        style={{ minWidth: "16rem" }}
                    ></Column>
                    <Column
                        field="almacen"
                        header="ALMACÉN"
                        sortable
                        style={{ minWidth: "8rem" }}
                    ></Column>
                    <Column
                        field="cantidad"
                        header="CANTIDAD"
                        sortable
                        style={{ minWidth: "10rem" }}
                    ></Column>

                    <Column
                        field="estadoVenta"
                        header="ESTADO"
                        sortable
                        style={{ minWidth: "10rem" }}
                    ></Column>
                </DataTable>
            </div>
        </>
    );
};
