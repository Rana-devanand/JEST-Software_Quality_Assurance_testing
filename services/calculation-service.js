export const  sum = (num)=>{
     const result =  num % 2;
     return result === 0 ? true : false;
}

export const execute = () =>{
     if(sum(4)){
          return "Success"
     }
     else{
          return "Failure"
     }
}