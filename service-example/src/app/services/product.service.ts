import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  add(num1:number,num2:number):number{
    return num1+num2;
  }
  
  
  
    productList(): any[] {
    return [
      {
        P_Name: 'Shirt1',
        P_Brand: 'Levis',
        P_Size: '42',
        P_Price: '1199',
        P_Image:'https://redux-bucket.s3.amazonaws.com/shirt1.jpg'
          
      },
      {
        P_Name: 'Shirt2',
        P_Brand: 'Polo',
        P_Size: '44',
        P_Price: '1399',
        P_Image:
          'https://assets.ajio.com/medias/sys_master/root/20220528/Mxbq/6291822df997dd03e2417859/-1117Wx1400H-441024764-white-MODEL.jpg',
      },
      {
        P_Name: 'Shirt3',
        P_Brand: 'Allen SOlley',
        P_Size: '46',
        P_Price: '1599',
        P_Image:
          'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPALLEN-SOLLY-ADIT509968FABBDC3/1562882058718_1..jpg?imwidth=320&impolicy=hq',
      },
      {
        P_Name: 'Pant1',
        P_Brand: 'Killer',
        P_Size: '44',
        P_Price: '1599',
        P_Image:
          'https://m.media-amazon.com/images/I/91PT2k-SquL._SY550._SX._UX._SY._UY_.jpg',
      },
      {
        P_Name: 'Pant2',
        P_Brand: 'Nostrum',
        P_Size: '42',
        P_Price: '1799',
        P_Image:
          'https://n3.sdlcdn.com/imgs/b/4/4/Nostrum-Jeans-Blue-Slim-Fit-SDL107610104-1-34b9a.jpg',
      },
      {
        P_Name: 'Pant3',
        P_Brand: 'Van Heusen',
        P_Size: '40',
        P_Price: '2299',
        P_Image:
          'https://5.imimg.com/data5/FR/BH/MY-31862344/van-heusen-grey-jeans-500x500.png',
      },
    ];
  }
}
