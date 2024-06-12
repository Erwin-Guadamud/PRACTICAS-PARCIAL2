

export class CreateControlrealizadoDto {

  private constructor(
    public readonly texto: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateControlrealizadoDto?]  {

    const { texto } = props;

    if ( !texto ) return ['Nombre property is required', undefined];


    return [undefined, new CreateControlrealizadoDto(texto)];
  }


}