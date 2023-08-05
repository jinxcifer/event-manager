import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Event } from '@app/core/event/event.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barcode: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  eventId: number;

  @ManyToOne(() => Event, (event) => event.tickets, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  event: Event;
}
