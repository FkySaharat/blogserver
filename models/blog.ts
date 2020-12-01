
export interface BlogModel{
    id: string;
    header:string;
    body:string;
    publicDate: string;
    createdDate: string;
    writer:string;
    coWriter: string[];
    tag:string[];
    seriesId:string;
}