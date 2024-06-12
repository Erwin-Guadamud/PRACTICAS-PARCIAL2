export class UpdateControlrealizadoDto {

  private constructor(
    public readonly id: number,
    public readonly fecha?: Date,
    public readonly hora?: Date,
    public readonly valor?: number,
    public readonly estado?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if (this.fecha) returnObj.fecha = this.fecha;
    if (this.hora) returnObj.hora = this.hora;
    if (this.valor) returnObj.valor = this.valor;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: {[key:string]: any}): [string?, UpdateControlrealizadoDto?]  {
    const { id, fecha, hora, valor, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (fecha) {
      const newFecha = new Date(fecha);
      if (newFecha.toString() !== fecha.toString()) {
        return ['fecha must be valid'];
      }
    }

    return [undefined, new UpdateControlrealizadoDto(id, fecha, hora, valor, estado)];
  }
}
