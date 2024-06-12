import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePacienteDto, UpdatePacienteDto } from '../../domain/dtos';
import { CreatePaciente, DeletePaciente, GetPaciente, GetPacientes, PacienteRepository, UpdatePaciente } from '../../domain';

export class PacientesController {

  //* Dependency Injection
  constructor(
    private readonly pacienteRepository: PacienteRepository,
  ) { }

  public getPacientes = ( req: Request, res: Response ) => {
    new GetPacientes( this.pacienteRepository )
      .execute()
      .then( (todos: any) => res.json( todos ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public getPacienteById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetPaciente( this.pacienteRepository )
      .execute( id )
      .then( (todo: any) => res.json( todo ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public createPaciente = ( req: Request, res: Response ) => {
    const [ error, createPacienteDto ] = CreatePacienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreatePaciente( this.pacienteRepository )
      .execute( createPacienteDto! )
      .then( paciente => res.json( paciente ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public updatePaciente = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTodoDto ] = UpdatePacienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdatePaciente( this.pacienteRepository )
      .execute( updateTodoDto! )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public deletePaciente = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeletePaciente( this.pacienteRepository )
      .execute( id )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

}
