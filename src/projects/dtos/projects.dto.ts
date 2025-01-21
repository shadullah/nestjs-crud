import { IsArray, IsString } from "class-validator";

export class ProjectsDto{
    @IsString()
    title!:string;
    @IsString()
    client!:string;

    @IsArray()
    @IsString({each:true})
    images!:string[];
    
    @IsString()
    description!:string;

    @IsArray()
    @IsString({each:true})
    work!:string[];
}