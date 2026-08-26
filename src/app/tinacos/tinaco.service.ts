import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TinacoService {
  medidores:any
  // medidores: any = [
  //   {
  //     name: 'Tinaco 1',
  //     ip: '192.168.0.5',
  //     bomba: {
  //       auto: true,
  //       status:true,
  //       name: 'Bomba 1',
  //       ip: '192.168.0.6',
  //       // time:{
  //       //   status: false
  //       // }
  //     },
  //     level:[
  //       true,
  //       true,
  //       true,
  //       true,
  //       true,
  //       false
  //     ],
  //     up:true
  //   },
  //   {
  //     name: 'Tinaco 2',
  //     ip: '192.168.0.7',
  //     bomba: {
  //       auto: true,
  //       status:false,
  //       name: 'Bomba 2',
  //       ip: '192.168.0.8',
  //       // time:{
  //       //   status: false
  //       // }
  //     },
  //     level:[
  //       true,
  //       true,
  //       true,
  //       true,
  //       false,
  //       false
  //     ],
  //     up:false
  //   },
  //   {
  //     name: 'Tinaco 3',
  //     ip: '192.168.0.9',
  //     // bomba: {
  //     // auto: false,
  //     //   name: 'Bomba 3',
  //     //   ip: '192.168.0.10',
  //     //   // time:{
  //     //   //   status: false
  //     //   // }
  //     // },
  //     level:[
  //       true,
  //       true,
  //       true,
  //       true,
  //       true,
  //       true
  //     ],
  //     up:true
  //   }
  // ]

  // 2. URL de tu API de Node.js para los medidores
  // private apiUrl = 'http://192.168.1.37:420/api/v1/medidor/getAll';
  private apiUrl = 'https://nda-smbv.onrender.com/api/v1/medidor/getAll';

  // 3. Quitamos el arreglo estático e inyectamos el HttpClient en el constructor
  constructor(private http: HttpClient) {}

  // 4. Método para obtener todos los tinacos desde la base de datos
  obtenerMedidores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 5. Método por si necesitas actualizar estados (como encender/apagar la bomba desde Ionic)
  actualizarMedidor(id: string, datosNuevos: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, datosNuevos);
  }
}