// export class Project {
//     constructor( pid!:string;
//         uid!:string;
//         name!:string;
//         ta!:string;
//         approved!:boolean;
//         description!:string;
//         projectLink!:string)
// }
export class Project {
    constructor(
     public pid: number,
      public uid: string,
      public name:string,
        
      public ta:string,
      public approved:boolean,
      public description:string,
      public  projectLink:string
     
     ) {}
   }