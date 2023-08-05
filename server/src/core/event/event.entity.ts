import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Ticket } from '@app/core/ticket/ticket.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  city: string;

  @Column()
  date: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: string[];
}
