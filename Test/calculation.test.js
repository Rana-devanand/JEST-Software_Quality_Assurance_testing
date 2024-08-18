const {execute} = require("../services/calculation-service")

test("Calculation result is :" ,()=>{
     const result = execute();
     expect(result).toBe('Success');
})