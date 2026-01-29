import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import { PrismaClient } from "./generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

app.post("/tasks", async (req, res) => {
  const task = await prisma.task.create({
    data: { title: req.body.title },
  });

  res.json(task);
});

app.get("/tasks", async (req, res) => {
  res.json(await prisma.task.findMany());
});

app.delete("/tasks/:id", async (req, res) => {
  await prisma.task.delete({
    where: { id: Number(req.params.id) },
  });

  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
