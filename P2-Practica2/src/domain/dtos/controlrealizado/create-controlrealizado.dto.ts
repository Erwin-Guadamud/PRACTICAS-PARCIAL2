export class CreateControlrealizadoDto {

  private constructor(
    public readonly fecha: Date,
    public readonly hora: Date,
    public readonly valor: number,
    public readonly estado: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateControlrealizadoDto?]  {

    const { fecha, hora, valor, estado } = props;

    if (!fecha || !hora || !valor || !estado) return ['Fecha, hora, valor, and estado properties are required', undefined];

    return [undefined, new CreateControlrealizadoDto(fecha, hora, valor, estado)];
  }
}
