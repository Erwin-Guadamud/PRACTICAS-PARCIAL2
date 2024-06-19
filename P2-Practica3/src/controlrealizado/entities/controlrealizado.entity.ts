import { Paciente } from "src/paciente/entities/paciente.entity";
import { SignoVital } from "src/signovital/entities/signovital.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'control_realizado' })
export class ControlRealizado {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    pacienteId: string;

    @Column('int')
    signoVitalId: string;

    @ManyToOne(
        () => Paciente,
        (paciente) => paciente.controles,
        { eager: true }
    )
    paciente: Paciente;

    @ManyToOne(
        () => SignoVital,
        (signoVital) => signoVital.controles,
        { eager: true }
    )
    signoVital: SignoVital;

    @Column('timestamp')
    fecha: Date;

    @Column('timestamp')
    hora: Date;

    @Column('int')
    valor: number;

    @Column('text', {
        default: 'activo'
    })
    estado: string;
}
