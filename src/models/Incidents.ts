import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import Ong from "./Ong";


@Entity('incidents')
class Incidents {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    ong_id: string;

    @ManyToOne(() => Ong)
    @JoinColumn({ name: 'ong_id' })
    ong: Ong;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    value: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}


export default Incidents;