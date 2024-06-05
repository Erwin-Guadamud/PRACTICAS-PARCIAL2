-- CreateTable
CREATE TABLE "Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo'
);

-- CreateTable
CREATE TABLE "SignoVital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "nivelMinimo" INTEGER NOT NULL,
    "nivelMaximo" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo'
);

-- CreateTable
CREATE TABLE "ControlRealizado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacienteId" INTEGER NOT NULL,
    "signoVitalId" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "hora" DATETIME NOT NULL,
    "valor" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'activo',
    CONSTRAINT "ControlRealizado_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ControlRealizado_signoVitalId_fkey" FOREIGN KEY ("signoVitalId") REFERENCES "SignoVital" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
