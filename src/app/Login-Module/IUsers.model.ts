export interface IUsers{
    id:string;
    email:string;
    pass:string;
}

export interface IAdmin{
    id:string;
    admemail:string;
    password:string;
}

export interface IBooks{
    id:string;
    bookname: string;
    author: string;
    rackno: string;
    status:string;
    category:string;
}

export interface IRentedUsers{
    id: string;
    email: string;
    bookname: string;
    buy: string;
    rent: string;
    Date:string;
     
}