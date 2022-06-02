

export type beneficiariesType = {
idade: number,
nome: string,
registro: string,
plano?: string
preço?: number
}

export type propostaType = {
    beneficiarios: any[],
    planos: object,
}