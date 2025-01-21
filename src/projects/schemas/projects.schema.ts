import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProjectsDocument = HydratedDocument<Project>

@Schema({timestamps:true})
export class Project{
    @Prop({required:true})
    title!:string
    @Prop({required:true})
    client!:string
    @Prop({required:true})
    description!:string
    @Prop({required:true, type:[String], default:[]})
    images!:string[]
    @Prop({required:true, type:[String]})
    work!:string
}

export const ProjectSchema = SchemaFactory.createForClass(Project)