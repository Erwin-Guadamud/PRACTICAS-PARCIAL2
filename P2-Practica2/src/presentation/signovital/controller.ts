import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateSignovitalDto, UpdateSignovitalDto } from '../../domain/dtos';
import { CreateSignovital, DeleteSignovital, GetSignovital, GetSignovitals, SignovitalRepository, UpdateSignovital } from '../../domain';

export class SignovitalsController {

  //* Dependency Injection
  constructor(
    private readonly signovitalRepository: SignovitalRepository,
  ) { }

  public getSignovitals = ( req: Request, res: Response ) => {
    new GetSignovitals( this.signovitalRepository )
      .execute()
      .then( (todos: any) => res.json( todos ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public getSignovitalById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetSignovital( this.signovitalRepository )
      .execute( id )
      .then( (todo: any) => res.json( todo ) )
      .catch( (error: any) => res.status( 400 ).json( { error } ) );

  };

  public createSignovital = ( req: Request, res: Response ) => {
    const [ error, createSignovitalDto ] = CreateSignovitalDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateSignovital( this.signovitalRepository )
      .execute( createSignovitalDto! )
      .then( signovital => res.json( signovital ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public updateSignovital = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTodoDto ] = UpdateSignovitalDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateSignovital( this.signovitalRepository )
      .execute( updateTodoDto! )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public deleteSignovital = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteSignovital( this.signovitalRepository )
      .execute( id )
      .then( todo => res.json( todo ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

}
