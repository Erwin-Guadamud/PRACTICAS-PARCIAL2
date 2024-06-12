export class UpdateSignovitalDto {

  private constructor(
    public readonly id: number,
    public readonly descripcion?: string,
    public readonly nivelMinimo?: number,
    public readonly nivelMaximo?: number,
    public readonly estado?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if (this.descripcion) returnObj.descripcion = this.descripcion;
    if (this.nivelMinimo) returnObj.nivelMinimo = this.nivelMinimo;
    if (this.nivelMaximo) returnObj.nivelMaximo = this.nivelMaximo;
    if (this.estado) returnObj.estado = this.estado;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateSignovitalDto?]  {

    const { id, descripcion, nivelMinimo, nivelMaximo, estado } = props;

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }

    if (descripcion) {
      const newDescripcion = descripcion.toUpperCase();
      if (newDescripcion !== descripcion) {
        return ['descripcion must be uppercase'];
      }
    }

    return [undefined, new UpdateSignovitalDto(id, descripcion, nivelMinimo, nivelMaximo, estado)];
  }
}
