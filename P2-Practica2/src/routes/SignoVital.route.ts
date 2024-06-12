import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los signos vitales
router.get("/", async (_req, res) => {
  try {
    const signosVitales = await prisma.signoVital.findMany();
    res.json(signosVitales);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los signos vitales" });
  }
});

// Obtener un signo vital por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const signoVital = await prisma.signoVital.findUnique({
      where: { id: Number(id) },
    });
    if (!signoVital) {
      res.status(404).json({ error: "Signo vital no encontrado" });
    } else {
      res.json(signoVital);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el signo vital" });
  }
});

// Crear un nuevo signo vital
router.post("/", async (req, res) => {
  const { descripcion, nivelMinimo, nivelMaximo, } = req.body;
  try {
    const signoVitalCreado = await prisma.signoVital.create({
      data: {
        descripcion,
        nivelMinimo,
        nivelMaximo,
      },
    });
    res.status(201).json(signoVitalCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el signo vital" });
  }
});

// Actualizar un signo vital por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {descripcion, nivelMinimo, nivelMaximo,} = req.body;
  try {
    const signoVitalActualizado = await prisma.signoVital.update({
      where: { id: Number(id) },
      data: {
        descripcion,
        nivelMinimo,
        nivelMaximo,
      },
    });
    res.json(signoVitalActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el signo vital" });
  }
});

// Eliminar un signo vital por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.signoVital.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Signo vital eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el signo vital" });
  }
});

export default router;
