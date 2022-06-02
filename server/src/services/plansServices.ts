import fs from "fs"
import path from "path";
//types
import { beneficiariesType, propostaType } from "../types/beneficiaries"

const plansPath = fs.readFileSync(path.resolve("./src/tables/plans.json"), "utf-8")
const pricesPath = fs.readFileSync(path.resolve("./src/tables/prices.json"), "utf-8")
const plansTable = JSON.parse(plansPath)
const pricesTable = JSON.parse(pricesPath)
let totalBeneficiaries:number = 0    

class plansServices {
    constructor () {
        
    }
    async applyBusinessRulesService (quantity: number, beneficiarios: beneficiariesType[]) {
           
        let proposta: propostaType = {
            beneficiarios: [],
            planos: {},
        }
        let preçoTotal: number = 0
        
        try {
            beneficiarios.forEach(beneficiary => {
                let plan = plansTable.find(plan => plan.registro === beneficiary.registro)
                let price = pricesTable.filter((prices) => {return prices.codigo == plan.codigo && quantity >= prices.minimo_vidas})
                price = price[price.length - 1] //pegar ultimo valor da array que bate com o codigo e minimo_vidas y
                if (!plan) {
                    return new Error("Plano invalido")
                }
                if (beneficiary.idade <= 17) {
                   beneficiary.plano = plan.nome
                   beneficiary.preço = price.faixa1
                }
                if ( beneficiary.idade > 17 && beneficiary.idade <= 40) {
                    beneficiary.plano = plan.nome
                    beneficiary.preço = price.faixa2
                 }
                 if (beneficiary.idade > 40) {
                    beneficiary.plano = plan.nome
                    beneficiary.preço = price.faixa1
                 }
                 proposta.beneficiarios.push(beneficiary)
                 proposta.planos  = {plano: beneficiary.plano}
                 preçoTotal  += beneficiary.preço
            });
            proposta.planos = {plano: proposta.planos["plano"], preço_total: preçoTotal}
            proposta.planos["quantidade"] = quantity
           
            fs.writeFileSync(path.resolve("./src/tables/proposta.json"), JSON.stringify(proposta), {encoding: "utf8",})// criar proposta.json

            proposta.beneficiarios.forEach(beneficiary => {
                delete beneficiary.registro
            });
            
            return {proposta , quantity}
        }
        catch {
            return new Error("Plano Invalido!")
        }
    }
    
    async getProposalService () {
        try {
            const proposalPath =path.resolve("./src/tables/proposta.json")
            if (proposalPath) {
                return proposalPath
            }
            else {
                return new Error("Proposta ainda não foi gerada")
            }
        }
        catch {
            return new Error("Ocorreu eum erro no servidor, porfavor tente novamente")
        }
    }
}

export default new plansServices