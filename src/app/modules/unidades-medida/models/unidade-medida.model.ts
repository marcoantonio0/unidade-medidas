export interface IUnidadeMedidaItem {
    description: string;
    sigla: string;
    casas_decimais: string;
}

export interface IUnidadeMedidaResponse {
    TOTAL_REGISTROS: number;
    REGISTROS: IUnidadeMedidaItem[]
}