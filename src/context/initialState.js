export const initBasketState = {
  products: {
    byId: {
      "drinkid1": {
        id: 'drinkid1',
        title: "Mountain Dew",
        description: "Sugar, Citric acid with a splash of Hydrofluoric Acid & water",
        price: 109,
        quantity: 0,
        imageSRC: "https://digitalcontent.api.tesco.com/v2/media/ghs/5cc66364-c063-48f1-b9e0-8d06bcb5b857/snapshotimagehandler_1451681747.jpeg"
      },
      "drinkid2": {
        id: 'drinkid2',
        title: "Desperados",
        description: "Tequila flavoured, Mexican inspired, French created, Croatian produced beer.",
        price: 599,
        quantity: 0,
        imageSRC: "https://www.thedesignateddriver.co.uk/wp-content/uploads/2019/08/Desperados-600x600.jpg"
      },
      "drinkid3": {
        id: 'drinkid3',
        title: "Jack Daniels",
        description: "Moonshine but rebranded.",
        price: 3499,
        quantity: 0,
        imageSRC: "https://www.latramuntana.store/545-large_default/jack-daniels-amb-balanci-3-l.jpg"
      }
    },
    allIds: ['drinkid1', 'drinkid2', 'drinkid3']
  }
}