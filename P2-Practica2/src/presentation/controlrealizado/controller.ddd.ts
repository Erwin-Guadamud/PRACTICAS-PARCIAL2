import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateControlrealizadoDto, UpdateControlrealizadoDto } from '../../domain/dtos';
import { ControlrealizadoRepository } from '../../domain';

export class ControlrealizadoController {

  //* Dependency Injection
  constructor(
    private readonly controlrealizadoRepository: ControlrealizadoRepository,
  ) { }

  public getControlrealizado = async ( req: Request, res: Response ) => {
    const controlrealizado = await this.controlrealizadoRepository.getAll();
    return res.json( controlrealizado );
  };

  public getControlrealizadoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const controlrealizado = await this.controlrealizadoRepository.findById( id );
      res.json( controlrealizado );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createControlrealizado = async ( req: Request, res: Response ) => {
    const [ error, createControlrealizadoDto ] = CreateControlrealizadoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const controlrealizado = await this.controlrealizadoRepository.create( createControlrealizadoDto! );
    res.json( controlrealizado );

  };

  public updateControlrealizado = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateControlrealizadoDto ] = UpdateControlrealizadoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedControlrealizado = await this.controlrealizadoRepository.updateById( updateControlrealizadoDto! );
    return res.json( updatedControlrealizado );

  };

  public deleteControlrealizado = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedControlrealizado = await this.controlrealizadoRepository.deleteById( id );
    res.json( deletedControlrealizado );

  };

}
