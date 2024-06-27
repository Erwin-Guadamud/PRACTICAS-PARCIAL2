import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signovital/entities/signovital.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'controles_realizados' })
export class ControlRealizado {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Paciente, (paciente) => paciente.controles, { eager: true })
  @Field(() => Paciente)
  paciente: Paciente;

  @ManyToOne(() => SignoVital, (signoVital) => signoVital.controles, { eager: true })
  @Field(() => SignoVital)
  signoVital: SignoVital;

  @Column()
  @Field(() => String)
  fecha: string;

  @Column()
  @Field(() => String)
  hora: string;

  @Column('int')
  @Field(() => Int)
  valor: number;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;
}
