import { Student } from "src/student/entity/student.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class FeeSubmission{
  @PrimaryGeneratedColumn()
  id:number;

  @Column('decimal', { precision: 10, scale: 2 })
  Deposit:number;

  @Column('decimal', { precision: 10, scale: 2 })
  Remaining:number;

  @ManyToOne(() => Student, (student) => student.feeSubmissions,{onDelete:'CASCADE'})
  @JoinColumn({ name: 'studentId' })
  student: Student;
  @CreateDateColumn({type:'timestamp'})
  created_at:Date;

  @UpdateDateColumn({type:'timestamp'})
  updated_at:Date;
  
}