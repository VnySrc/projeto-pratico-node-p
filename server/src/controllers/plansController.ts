import { NextFunction, Request, Response } from "express";
import plansService from "../services/plansServices"


class plansController {
    constructor () {

    }

    async applyBusinessRules (req: Request, res: Response, next: NextFunction) {
        const { quantidade,  beneficiarios} = req.body
        if (quantidade && beneficiarios) {
            const response = await plansService.applyBusinessRulesService(quantidade, beneficiarios)
            if (response instanceof Error) {
                res.json({error: response.message})
            }
            else {
                res.status(200)
                res.json(response.proposta)
                res.end
            }
        }
        else {
            res.status(400)
            res.json({error: "Parametros passados incorretamente"})
        }
    }

    async getProposal (req: Request, res: Response, next: NextFunction) {
        const response = await plansService.getProposalService()
        if (response instanceof Error) {
            res.json({error: response.message})
        }
        else {
            res.status(200)
            res.sendFile(response)
        }
    }
}

export default new plansController