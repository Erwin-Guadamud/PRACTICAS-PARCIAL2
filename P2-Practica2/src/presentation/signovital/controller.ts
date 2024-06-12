import { Request, Response } from 'express';
import { CreateSignovitalDto, UpdateSignovitalDto } from '../../domain/dtos';
import { SignovitalRepository } from '../../domain';

export class SignovitalController {

  //* Dependency Injection
  constructor(
    private readonly signovitalRepository: SignovitalRepository,
  ) { }

  public getSignovital = async ( req: Request, res: Response ) => {
    const signovital = await this.signovitalRepository.getAll();
    return res.json( signovital );
  };

  public getSignovitalById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const signovital = await this.signovitalRepository.findById( id );
      res.json( signovital );
    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }
  };

  public createSignovital = async ( req: Request, res: Response ) => {
    const [ error, createSignovitalDto ] = CreateSignovitalDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.signovitalRepository.create( createSignovitalDto! );
    res.json( todo );
  };

  public updateSignovital = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateSignovitalDto ] = UpdateSignovitalDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedSignovital = await this.signovitalRepository.updateById( updateSignovitalDto! );
    return res.json( updatedSignovital );
  };
}
