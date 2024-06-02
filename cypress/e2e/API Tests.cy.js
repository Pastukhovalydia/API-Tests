describe('API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  let userId;

  // Выполнить перед каждым тестом
  beforeEach(() => {
    // Создание пользователя перед каждым тестом
    cy.request({
      method: 'POST',
      url: `${baseUrl}/user/createWithList`,
      body: [{
        id: 0,
        username: 'TestCy',
        firstName: 'Test',
        lastName: 'Cy',
        email: 'testcy@example.com',
        password: 'testcypassword',
        phone: '1234567890',
        userStatus: 0
      }],
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }).its('status').should('eq', 200);
  });

  it('должен создавать пользователя', () => {
    // Проверка, что пользователь был создан перед каждым тестом
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/TestCy`,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }).its('status').should('eq', 200);
  });

  it('должен изменять пользователя', () => {
    const updatedUser = {
      id: userId,
      username: 'UpdatedTestCy',
      firstName: 'Updated',
      lastName: 'Cy',
      email: 'updatedtestcy@example.com',
      password: 'updatedtestcypassword',
      phone: '0987654321',
      userStatus: 1
    };

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/user/TestCy`,
      body: updatedUser,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }).its('status').should('eq', 200);
  });

  it('должен удалять пользователя', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/user/TestCy`,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    }).its('status').should('eq', 200);
  });
});
