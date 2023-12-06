export class Personne { 

    id:number; 
    name:string ; 
    firstname:string; 
    age:number;
    path:string;  
    job:string ; 
    
    constructor (id=0,name='',firstname='',age=1,path='', job='') { 
    
    this.id=id ; 
    this.name=name; 
    this.firstname=firstname; 
    this.age=age ; 
    this.path=path ; 
    this.job=job; 
    }
    
    }