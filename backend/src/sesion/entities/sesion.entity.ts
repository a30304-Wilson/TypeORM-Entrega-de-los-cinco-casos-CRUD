import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Gimnasio } from "../../gimnasio/entities/gimnasio.entity";

@Entity({ name: "SESION" })
export class Sesion {
    @PrimaryGeneratedColumn({ name: "ID" })
    id!: number;

    @Column({ name: "NOMBRE", type: "varchar", length: 120 })
    nombre!: string;

    @Column({ name: "PLAZAS", type: "integer" })
    plazas!: number;

    @ManyToOne(() => Gimnasio, (gimnasio) => gimnasio.sesiones, { nullable: false })
    @JoinColumn({ name: "ID_GIMNASIO" })
    gimnasio!: Gimnasio;
}