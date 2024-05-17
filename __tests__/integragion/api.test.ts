import axios from "axios";

test("Deve testar a API (GET /)", async function(){
   const response = await axios({
    url:"http://localhost:3000",
    method:"get",
   })
   expect(response.status).toBe(200)
})