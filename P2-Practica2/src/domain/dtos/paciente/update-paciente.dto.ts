export class UpdatePacienteDto {

  private constructor(
    public readonly id: number,
    public readonly nombre?: string,
    public readonly estado?: string,
  ){}
  
  get values() {
    const returnObj: {[key: string]: any} = {};
  
    if (this.nombre) returnObj.nombre = this.nombre;
    if (this.estado) returnObj.estado = this.estado;
  
    return returnObj;
  }
  
  static create(props: {[key: string]: any}): [string?, UpdatePacienteDto?]  {
    const { id, nombre, estado } = props;
    let newNombre = nombre;
  
    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number'];
    }
  
    if (nombre) {
      newNombre = nombre.toUpperCase();
      if (newNombre !== nombre) {
        return ['nombre must be uppercase'];
      }
    }
  
    return [undefined, new UpdatePacienteDto(id, nombre, estado)];
  }
}
