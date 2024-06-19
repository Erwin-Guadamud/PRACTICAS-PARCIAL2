import { ControlRealizado } from "src/controlrealizado/entities/controlrealizado.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'signos_vitales' })
export class SignoVital {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: false,
    })
    descripcion: string;

    @Column('int')
    nivelMinimo: number;

    @Column('int')
    nivelMaximo: number;

    @OneToMany(
        () => ControlRealizado,
        (controlRealizado) => controlRealizado.signoVital,
        { cascade: ['remove'], onDelete: 'CASCADE' }
    )
    controles: ControlRealizado[];

    @Column('text', {
        default: 'activo',
    })
    estado: string;
}
