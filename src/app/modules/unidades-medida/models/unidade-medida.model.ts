export interface IUnidadeMedidaItem {
    CODIGO?: number;
    NOME: string;
    SIGLA: string;
    QUANTIDADE_FRACIONADA?: string;
    CASAS_DECIMAIS: number;
}

export interface IUnidadeMedidaResponse {
    TOTAL_REGISTROS: number;
    REGISTROS: IUnidadeMedidaItem[]
}