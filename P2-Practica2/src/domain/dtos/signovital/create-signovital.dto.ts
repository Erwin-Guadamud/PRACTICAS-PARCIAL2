export class CreateSignovitalDto {

  private constructor(
    public readonly descripcion: string,
    public readonly nivelMinimo: number,
    public readonly nivelMaximo: number,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateSignovitalDto?]  {

    const { descripcion, nivelMinimo, nivelMaximo } = props;

    if (!descripcion) return ['Descripcion property is required', undefined];
    if (!nivelMinimo || isNaN(Number(nivelMinimo))) return ['NivelMinimo property must be a valid number', undefined];
    if (!nivelMaximo || isNaN(Number(nivelMaximo))) return ['NivelMaximo property must be a valid number', undefined];

    return [undefined, new CreateSignovitalDto(descripcion, nivelMinimo, nivelMaximo)];
  }
}
