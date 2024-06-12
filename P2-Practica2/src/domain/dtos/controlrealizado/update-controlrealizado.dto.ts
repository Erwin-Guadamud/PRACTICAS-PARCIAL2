export class UpdateControlrealizadoDto {

  private constructor(
    public readonly id: number,
    public readonly pacienteId?: number,
    public readonly signoVitalId?: number,
    public readonly fecha?: Date,
    public readonly hora?: Date,
    public readonly valor?: number,
    public readonly estado?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if (this.pacienteId !== undefined) returnObj.pacienteId = this.pacienteId;
    if (this.signoVitalId !== undefined) returnObj.signoVitalId = this.signoVitalId;
    if (this.fecha) returnObj.fecha = this.fecha;
    if (this.hora) returnObj.hora = this.hora;
    if (this.valor) returnObj.valor = this.valor;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }

  static create(props: {[key:string]: any}): [string?, UpdateControlrealizadoDto?]  {
    const { id, pacienteId, signoVitalId, fecha, hora, valor, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number', undefined];
    }

    if (fecha) {
      const newFecha = new Date(fecha);
      if (isNaN(newFecha.getTime())) {
        return ['fecha must be valid', undefined];
      }
    }

    return [undefined, new UpdateControlrealizadoDto(id, pacienteId, signoVitalId, fecha, hora, valor, estado)];
  }
}
