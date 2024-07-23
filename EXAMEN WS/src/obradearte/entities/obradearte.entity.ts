import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'obra_de_arte' })
export class ObraDeArte {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    codigo: string;

    @Column('text')
    nombreArtistico: string;

    @Column('text')
    artista: string;

    @Column('text')
    tipo: string;

    @Column('float')
    evaluadoEn: number;

    @Column('date', { nullable: true })
    fechaUltimoRetoque: string;

    @Column('text')
    empresa: string;
}
