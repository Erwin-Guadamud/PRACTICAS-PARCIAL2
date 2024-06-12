

export class CreatePacienteDto {

    private constructor(
      public readonly texto: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {
  
      const { texto } = props;
  
      if ( !texto ) return ['Nombre property is required', undefined];
  
  
      return [undefined, new CreatePacienteDto(texto)];
    }
  
  
  }