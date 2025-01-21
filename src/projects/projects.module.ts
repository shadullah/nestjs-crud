import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Project, ProjectSchema } from "./schemas/projects.schema";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { ProjectsService } from "./services/projects.service";
import { AppService } from "src/app/app.service";
import { ProjectsController } from "./controller/projects.controller";

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: Project.name,
            schema:ProjectSchema
        }
    ]),
    CloudinaryModule
    ], 
    providers:[ProjectsService, AppService],
    controllers:[ProjectsController],
    exports:[ProjectsService],
})

export class ProjectModule {}