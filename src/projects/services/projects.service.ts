import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Project, ProjectsDocument } from '../schemas/projects.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>
    ){}

    async create(projectData: Partial<Project>): Promise<ProjectsDocument>{
        const project = await this.projectModel.create({
            ...projectData 
        })
        return project
    }
}
