import { Request, Response } from 'express';
import { CreateControlrealizadoDto, UpdateControlrealizadoDto } from '../../domain/dtos';
import { ControlrealizadoRepository } from '../../domain';

export class ControlrealizadosController {

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

    const todo = await this.controlrealizadoRepository.create( createControlrealizadoDto! );
    res.json( todo );
  };

  public updateControlrealizado = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateControlrealizadoDto ] = UpdateControlrealizadoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedControlrealizado = await this.controlrealizadoRepository.updateById( updateControlrealizadoDto! );
    return res.json( updatedControlrealizado );
  };
}
