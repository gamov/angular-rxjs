
const theFunction = (amount: number) => `${amount}$`;

const theFunctionMock = jest.fn() as jest.Mocked<typeof theFunction>;
const aString = theFunctionMock(12);

class AClass {
  aMethod(amount: number) {return 12}
  anotherMethodIDontCareAbout(something: boolean) {return 'nothing'}
}

const AClassMock: jest.Mocked<Partial<AClass>> = {
  aMethod: jest.fn((amount) => 32),
};
