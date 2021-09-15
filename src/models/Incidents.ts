import { Column, Entity, CreateDateColumn, PrimaryColumn } from "typeorm";


@Entity('incidents')
class Incidents{
    @PrimaryColumn()
    ong_id: string;

    @Column()
    inc_title: string;

    @Column()
    inc_desc: string;

    @Column()
    inc_value: string;
}


export default Incidents;