import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateControlrealizadoDto, UpdateControlrealizadoDto } from '../../domain/dtos';
import { CreateControlrealizado, DeleteControlrealizado, GetControlrealizado, GetControlrealizados, ControlrealizadoRepository, UpdateControlrealizado } from '../../domain';

export class ControlrealizadosController {

  //* Dependency Injection
  constructor(
    private readonly controlrealizadoRepository: ControlrealizadoRepository,
  ) { }

  public getControlrealizados = ( req: Request, res: Response ) => {
    new GetControlrealizados( this.controlrealizadoRepository )
      .execute()
      .then( (todos: any) => res.json( todos ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public getControlrealizadoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetControlrealizado( this.controlrealizadoRepository )
      .execute( id )
      .then( (todo: any) => res.json( todo ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public createControlrealizado = ( req: Request, res: Response ) => {
    const [ error, createControlrealizadoDto ] = CreateControlrealizadoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateControlrealizado( this.controlrealizadoRepository )
      .execute( createControlrealizadoDto! )
      .then( controlrealizado => res.json( controlrealizado ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public updateControlrealizado = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTodoDto ] = UpdateControlrealizadoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateControlrealizado( this.controlrealizadoRepository )
      .execute( updateTodoDto! )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public deleteControlrealizado = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteControlrealizado( this.controlrealizadoRepository )
      .execute( id )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

}
