import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePacienteDto, UpdatePacienteDto } from '../../domain/dtos';
import { PacienteRepository } from '../../domain';

export class PacienteController {

  //* Dependency Injection
  constructor(
    private readonly pacienteRepository: PacienteRepository,
  ) { }

  public getPaciente = async ( req: Request, res: Response ) => {
    const paciente = await this.pacienteRepository.getAll();
    return res.json( paciente );
  };

  public getPacienteById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const paciente = await this.pacienteRepository.findById( id );
      res.json( paciente );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createPaciente = async ( req: Request, res: Response ) => {
    const [ error, createPacienteDto ] = CreatePacienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const paciente = await this.pacienteRepository.create( createPacienteDto! );
    res.json( paciente );

  };

  public updatePaciente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePacienteDto ] = UpdatePacienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedPaciente = await this.pacienteRepository.updateById( updatePacienteDto! );
    return res.json( updatedPaciente );

  };

  public deletePaciente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedPaciente = await this.pacienteRepository.deleteById( id );
    res.json( deletedPaciente );

  };

}
