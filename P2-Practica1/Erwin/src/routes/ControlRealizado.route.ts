import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Obtener todos los controles realizados
router.get("/", async (req, res) => {
  try {
    const controlesRealizados = await prisma.controlRealizado.findMany({
      include: {
        paciente: true,
        signoVital: true,
      },
    });
    res.json(controlesRealizados);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los controles realizados" });
  }
});

// Obtener un control realizado por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const controlRealizado = await prisma.controlRealizado.findUnique({
      where: { id: Number(id) },
      include: {
        paciente: true,
        signoVital: true,
      },
    });
    if (!controlRealizado) {
      res.status(404).json({ error: "Control realizado no encontrado" });
    } else {
      res.json(controlRealizado);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el control realizado" });
  }
});

// Crear un nuevo control realizado
router.post("/", async (req, res) => {
  const { pacienteId, signoVitalId, fecha, hora, valor, estado } = req.body;
  try {
    const controlRealizadoCreado = await prisma.controlRealizado.create({
      data: {
        pacienteId,
        signoVitalId,
        fecha,
        hora,
        valor,
        estado,
      },
    });
    res.status(201).json(controlRealizadoCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el control realizado" });
  }
});

// Actualizar un control realizado por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { pacienteId, signoVitalId, fecha, hora, valor, estado } = req.body;
  try {
    const controlRealizadoActualizado = await prisma.controlRealizado.update({
      where: { id: Number(id) },
      data: {
        pacienteId,
        signoVitalId,
        fecha,
        hora,
        valor,
        estado,
      },
    });
    res.json(controlRealizadoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el control realizado" });
  }
});

// Eliminar un control realizado por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.controlRealizado.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Control realizado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el control realizado" });
  }
});

export default router;
