export class ControlrealizadoEntity {

  constructor(
    public id: number,
    public pacienteId: number,
    public signoVitalId: number,
    public fecha: Date,
    public hora: Date,
    public valor: number,
    public estado: string,
  ) {}

  public static fromObject(object: {[key: string]: any}): ControlrealizadoEntity {
    const { id, pacienteId, signoVitalId, fecha, hora, valor, estado } = object;

    if (!id) throw 'Id is required';
    if (!pacienteId) throw 'PacienteId is required';
    if (!signoVitalId) throw 'SignoVitalId is required';
    if (!fecha) throw 'Fecha is required';
    if (!hora) throw 'Hora is required';
    if (!valor) throw 'Valor is required';
    if (!estado) throw 'Estado is required';

    const newEstado = estado.toUpperCase();
    if (newEstado !== estado) {
      throw 'Estado must be uppercase';
    }

    return new ControlrealizadoEntity(id, pacienteId, signoVitalId, new Date(fecha), new Date(hora), valor, estado);
  }
}
