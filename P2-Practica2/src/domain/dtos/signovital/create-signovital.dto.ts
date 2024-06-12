

export class CreateSignovitalDto {

  private constructor(
    public readonly nombre: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateSignovitalDto?]  {

    const { nombre } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];


    return [undefined, new CreateSignovitalDto(nombre)];
  }


}