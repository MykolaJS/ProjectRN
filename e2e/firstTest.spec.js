// describe('Example', () => {
//   beforeEach(async () => {
//     await device.reloadReactNative();
//   });

//   it('should have welcome screen', async () => {
//     await expect(element(by.id('welcome'))).toBeVisible();
//   });
// })

describe('Login flow', () => {
    
  it('should login successfully', async () => {
    await device.reloadReactNative();
    it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
   });
  });
  
});