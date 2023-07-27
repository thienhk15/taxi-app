import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum BookingStatus {
    PENDING = "pending",
    ACCEPTED = "accepted",
    REJECTED = "rejected",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
}

@Schema({ versionKey: false, timestamps: true })
export class Booking extends AbstractDocument{
    @Prop({ required: true })
    customerID: string;

    @Prop()
    driverID: string;

    @Prop()
    pickupAddress: string;

    @Prop()
    destinationAddress: string;

    @Prop()
    pickupCoordinates: string;

    @Prop()
    destinationCoordinates: string;

    @Prop()
    fare: number;

    @Prop()
    status: BookingStatus;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);