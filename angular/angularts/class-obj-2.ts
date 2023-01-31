import { Stuud } from "./class-obj";

class Teach {

    prof=new Stuud()

    collprof(id: number, firstName: string, lastName: string) {

        let a=this.prof.useName(id, firstName, lastName)

        console.log(a);
        

    }
}

let p=new Teach()
p.collprof(1001,'nik','patil')
