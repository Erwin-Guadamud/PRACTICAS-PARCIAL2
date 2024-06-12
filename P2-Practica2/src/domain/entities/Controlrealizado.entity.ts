



export class ControlrealizadoEntity {

  constructor(
    public id: number,
    public nombre: string,
  ) {}

  

  public static fromObject( object: {[key: string]: any} ): ControlrealizadoEntity {
    const { id, nombre } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'nombre is required';

    let newNombre;
    if ( nombre ) {
      newNombre = nombre.toUpperCase();
      if (  newNombre !== nombre  ) {
        throw 'Nombre must be uppercase'
      }
    }
    return new ControlrealizadoEntity(id, nombre)

  }

}


