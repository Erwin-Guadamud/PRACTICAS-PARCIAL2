import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ControlRealizado } from '../../controlrealizado/entities/controlrealizado.entity';

@ObjectType()
@Entity({ name: 'pacientes' })
export class Paciente {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column()
  @Field(() => String)
  identificacion: string;

  @Column({ default: 'activo' })
  @Field(() => String, { nullable: true })
  estado?: string;

  @OneToMany(
    () => ControlRealizado,
    (controlRealizado) => controlRealizado.paciente,
    { cascade: true }
  )
  @Field(() => [ControlRealizado], { nullable: true })
  controles?: ControlRealizado[];
}
