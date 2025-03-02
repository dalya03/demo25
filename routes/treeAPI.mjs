import { Router, json } from "express";
import { Tree, Node } from "../data/tree.mjs";

const treeRouter = Router();
treeRouter.use(json());

treeRouter.get("/", (req, res) => {
    const tree = Tree(Node("")); 
    res.json(tree);
});

export default treeRouter;
