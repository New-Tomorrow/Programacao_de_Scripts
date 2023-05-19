import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Teams } from "./Team";

@Entity({ name: "match" })
export class Match {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, type: 'date',default:()=>"CURRENT_TIMESTAMP"})
    date: Date;

    @ManyToOne((type) => Teams, { onDelete: 'CASCADE' })

    @JoinColumn({
        name: "idhost",
        referencedColumnName: "id", 
        foreignKeyConstraintName: "fk_host_id" 
    })
    host: Teams;

    @ManyToOne((type) => Teams, { onDelete: 'CASCADE' })

    @JoinColumn({
        name: "idvisitor",
        referencedColumnName: "id", 
        foreignKeyConstraintName: "fk_visitor_id" 
    })
    visitor: Teams;

}