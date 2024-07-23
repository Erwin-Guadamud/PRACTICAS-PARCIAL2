import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'obras_de_arte' })
export class ObraDeArte {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  codigo: string;

  @Column()
  @Field(() => String)
  nombreArtistico: string;

  @Column()
  @Field(() => String)
  artista: string;

  @Column()
  @Field(() => String)
  tipo: string;

  @Column()
  @Field(() => String)
  evaluadoEn: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  fechaUltimoRetoque?: string;

  @Column()
  @Field(() => String)
  empresa: string;
}
