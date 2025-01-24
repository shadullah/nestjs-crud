import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
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

    async getProjects(){
        const projects = await this.projectModel.find().exec()

        if(!projects || projects.length===0) throw new NotFoundException('no Projects found')

        return {items:projects};
    }

    async getProjectById(id:string):Promise<ProjectsDocument>{
        if(!Types.ObjectId.isValid(id)){
            throw new BadRequestException('Invalid project Id')
        }
        const project = await this.projectModel.findById(id).exec()

        if(!project) throw new BadRequestException('No project found by this id')

        return project;
    }

    async updateProjectInfo(id:string, attrs:Partial<Project>):Promise<ProjectsDocument>{
        if (!attrs) {
            throw new BadRequestException('Update data is required');
        }
        const {title, client, description, images, work}= attrs;

        if(!Types.ObjectId.isValid(id)){
            throw new BadRequestException('Invalid project Id')
        }

        const project = await this.projectModel.findById(id)

        if(!project) throw new BadRequestException('No project found by this id')
            
        project.title = title ?? project.title
        project.client = client ?? project.client
        project.description = description ?? project.description
        project.images = images ?? project.images
        project.work = work ?? project.work

        return project.save()
    }

    async deleteOne(id:string):Promise<void>{
        if(!Types.ObjectId.isValid(id)) throw new BadRequestException('Invalid project Id')

        const project = await this.projectModel.findById(id)
        if(!project) throw new BadRequestException('No project found by this id')

        await project.deleteOne()
    }
}
