import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ControlRealizado } from 'src/controlrealizado/entities/controlrealizado.entity';

@ObjectType()
@Entity({ name: 'signos_vitales' })
export class SignoVital {

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  descripcion: string;

  @Column('int')
  @Field(() => Int)
  nivelMinimo: number;

  @Column('int')
  @Field(() => Int)
  nivelMaximo: number;

  @Column({ default: 'activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(
    () => ControlRealizado,
    (controlRealizado) => controlRealizado.signoVital,
    { cascade: true }
  )
  @Field(() => [ControlRealizado], { nullable: true })
  controles?: ControlRealizado[];
}
