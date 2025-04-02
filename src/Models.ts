export interface IMetadata{
    show_project?:string;
    skip_phase?:string;
}

export interface IProjectItem{
    title?:string;
    description?:string;
    goal?:string;
}

export interface IEmployee {
    employee_first_name?: string;
    employee_last_name?: string;
    order?: number;
  }

 export interface IStage {
    name?: string;
    iterations?: number;
    max_length?: number;
    obligation?: IObligation
  }

 export interface IObligation {
    [key: string]: string;
  }

export interface IData{
    metadata:IMetadata[];
    project:IProjectItem[];
    employees:IEmployee[];
    stages:IStage[]
}