import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true})
    name: string;

    @Prop({minlength: 6, default: true})
    isActive: boolean;

    @Prop({default: true})
    password?: string;

    @Prop({type: [String], default: ['user']})
    roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);