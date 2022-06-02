import { Router } from "express";
import plansController from "../controllers/plansController"
const router = Router()

router.post("/plans", plansController.applyBusinessRules)
router.get("/plans", plansController.getProposal)

export default router