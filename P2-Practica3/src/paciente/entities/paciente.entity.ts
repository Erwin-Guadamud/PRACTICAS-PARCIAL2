import { ControlRealizado } from "src/controlrealizado/entities/controlrealizado.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pacientes' })
export class Paciente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: false,
    })
    nombre: string;

    @Column('text', {
        unique: false,
    })
    identificacion: string;

    @OneToMany(
        () => ControlRealizado,
        (controlRealizado) => controlRealizado.paciente,
        { cascade: ['remove'], onDelete: 'CASCADE' }
    )
    controles: ControlRealizado[];

    @Column('text', {
        default: 'activo',
    })
    estado: string;
}
