export class ControlrealizadoEntity {

  constructor(
    public id: number,
    public fecha: Date,
    public hora: Date,
    public valor: number,
    public estado: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): ControlrealizadoEntity {
    const { id, fecha, hora, valor, estado } = object;
    if (!id) throw 'Id is required';
    if (!fecha) throw 'Fecha is required';
    if (!hora) throw 'Hora is required';
    if (!valor) throw 'Valor is required';
    if (!estado) throw 'Estado is required';

    let newEstado;
    if (estado) {
      newEstado = estado.toUpperCase();
      if (newEstado !== estado) {
        throw 'Estado must be uppercase';
      }
    }

    return new ControlrealizadoEntity(id, new Date(fecha), new Date(hora), valor, estado);
  }
}
