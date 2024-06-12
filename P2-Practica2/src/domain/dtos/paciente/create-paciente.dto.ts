export class CreatePacienteDto {

  private constructor(
    public readonly nombre: string,
    public readonly identificacion: string,
    public readonly estado: string,
  ){}
  
  
  static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {
  
    const { nombre, identificacion, estado } = props;
  
    if (!nombre) return ['Nombre property is required', undefined];
    if (!identificacion) return ['Identificacion property is required', undefined];
  
    return [undefined, new CreatePacienteDto(nombre, identificacion, estado)];
  }
}
