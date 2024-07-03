import { Column, Entity, PrimaryColumn, } from 'typeorm';

@Entity({ name: 'ControlRealizado' })
export class ControlRealizadoEntity {




      @PrimaryColumn()
      id: number

      @Column()
      pacienteId: number;


      @Column()
      signoVitalId: number;


      @Column()
      fecha?: string;

      @Column()
      hora?: string;

      @Column()
      valor: number;




}