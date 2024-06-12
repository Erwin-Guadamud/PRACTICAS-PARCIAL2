export class SignovitalEntity {

  constructor(
    public id: number,
    public descripcion: string,
    public nivelMinimo: number,
    public nivelMaximo: number,
    public estado: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): SignovitalEntity {
    const { id, descripcion, nivelMinimo, nivelMaximo, estado } = object;
    if (!id) throw 'Id is required';
    if (!descripcion) throw 'Descripcion is required';
    if (!nivelMinimo) throw 'NivelMinimo is required';
    if (!nivelMaximo) throw 'NivelMaximo is required';
    if (!estado) throw 'Estado is required';

    let newDescripcion, newEstado;
    if (descripcion) {
      newDescripcion = descripcion.toUpperCase();
      if (newDescripcion !== descripcion) {
        throw 'Descripcion must be uppercase';
      }
    }
    if (estado) {
      newEstado = estado.toUpperCase();
      if (newEstado !== estado) {
        throw 'Estado must be uppercase';
      }
    }

    return new SignovitalEntity(id, newDescripcion, nivelMinimo, nivelMaximo, newEstado);
  }
}
