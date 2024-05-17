import { ProductUseCaseFactory } from "../../src/infra/facotry/abstract-factory/list-employees-abstract-factory";

import { connectToMongoDB, disconnectFromMongoDB } from '../../src/infra/repositoreDataBase/connect'; // Corrigido o caminho do import


describe('Employee Test', () => {

beforeAll(() => {
  connectToMongoDB()
  .then(() => {

  })
  .catch((error: any) => {
    console.error('Erro ao conectar ao MongoDB:', error);
    // Se houver erro na conexão com o MongoDB, talvez você queira encerrar o aplicativo aqui
    process.exit(1); // Encerra o processo com código de erro
  });
 

});
afterAll(async () => {
  try {
    await disconnectFromMongoDB();
  } catch (error) {
    console.error('Erro ao desconectar do MongoDB:', error);
  }
});

test("Deveria criar um employee no repositorio", async function(){
  const listEmployeesFactory = ProductUseCaseFactory.createListEmpolyeeAbstractFactory();
    const employees = await listEmployeesFactory.execute();
   expect(employees.length).toBeGreaterThan(0);
});
})