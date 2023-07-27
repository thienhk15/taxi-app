import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Booking } from "./schemas/booking.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class BookingsRepository extends AbstractRepository<Booking>{
    protected readonly logger = new Logger(Booking.name);

    constructor(
        @InjectModel(Booking.name) bookingModel: Model<Booking>,
        @InjectConnection() connection: Connection,
    ) { 
        super(bookingModel, connection); 
    }
}