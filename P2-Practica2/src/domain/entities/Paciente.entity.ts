export class PacienteEntity {

  constructor(
    public id: number,
    public nombre: string,
    public identificacion: string,
    public estado: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): PacienteEntity {
    const { id, nombre, identificacion, estado } = object;
    if (!id) throw 'Id is required';
    if (!nombre) throw 'Nombre is required';
    if (!identificacion) throw 'Identificacion is required';
    if (!estado) throw 'Estado is required';

    let newNombre, newIdentificacion, newEstado;
    if (nombre) {
      newNombre = nombre.toUpperCase();
      if (newNombre !== nombre) {
        throw 'Nombre must be uppercase';
      }
    }
    if (identificacion) {
      newIdentificacion = identificacion.toUpperCase();
      if (newIdentificacion !== identificacion) {
        throw 'Identificacion must be uppercase';
      }
    }
    if (estado) {
      newEstado = estado.toUpperCase();
      if (newEstado !== estado) {
        throw 'Estado must be uppercase';
      }
    }

    return new PacienteEntity(id, newNombre, newIdentificacion, newEstado);
  }
}
