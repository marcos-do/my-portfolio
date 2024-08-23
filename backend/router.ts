import { Router } from "express";
import { getTechnologies } from "./controllers/techController";

const router: Router = Router();

/**
 * @swagger
 * /tech:
 *   get:
 *     summary: Retrieve a list technologies used
 *     responses:
 *      200:
 *       description: Returns a technology list
*/
router.get("/tech", getTechnologies);

export default router;
