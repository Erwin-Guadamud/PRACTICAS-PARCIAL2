export class CreateControlrealizadoDto {

  private constructor(
    public readonly pacienteId: number,
    public readonly signoVitalId: number,
    public readonly fecha: Date,
    public readonly hora: Date,
    public readonly valor: number,
    public readonly estado: string,
  ){}

  static create( props: {[key:string]: any} ): [string?, CreateControlrealizadoDto?]  {

    const { pacienteId, signoVitalId, fecha, hora, valor, estado } = props;

    if (!pacienteId || !signoVitalId || !fecha || !hora || !valor || !estado) {
      return ['PacienteId, signoVitalId, fecha, hora, valor, and estado properties are required', undefined];
    }

    return [undefined, new CreateControlrealizadoDto(pacienteId, signoVitalId, fecha, hora, valor, estado)];
  }
}
