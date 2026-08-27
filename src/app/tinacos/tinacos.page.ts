import { Component, OnInit } from '@angular/core';
import { TinacoService } from './tinaco.service';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-tinacos',
  templateUrl: './tinacos.page.html',
  styleUrls: ['./tinacos.page.scss'],
  standalone: false
})
export class TinacosPage implements OnInit {

  medidores: any
  loadBtnPowe = false

  // Datos de Sinric Pro
  private apiUrl = 'https://api.sinric.pro/v1/devices';
  private apiKey = '0ff4061f-4684-4773-8261-2aacf0dedc51'; // Reemplaza con tu API Key
  private deviceId = '6a85f57109efd1746c448c53'; // Reemplaza con tu Device ID

  constructor(
    private tinacoService: TinacoService,
    private http: HttpClient
  ) {
    this.getMEdidores()
  }


  async getMEdidores() {
    // this.medidores = tinacoService.medidores
    // 1. Llamamos al método del servicio
    await this.tinacoService.obtenerMedidores().subscribe({
      next: async (datosVivos) => {
        // 2. Le asignamos los datos de MongoDB a la variable de la pantalla
        this.medidores = await datosVivos;
        console.log('Tinacos cargados con éxito:', this.medidores);
      },
      error: (err) => {
        console.error('Error al conectar con Node.js:', err);
      }
    });
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getMEdidores()
  }
  // bombaBtn(statusBtn:boolean){
  //   console.log(statusBtn)
  //   this.loadBtnPowe = true;
  //   let btn:any
  //   statusBtn?btn="off":btn="on"
  //   this.http.get('http://177.245.176.88/api/bomba?state='+btn,{ responseType: 'text' }).subscribe(res=>{
  //     console.log(res)
  //     this.ionViewWillEnter()
  //   })
  //   this.loadBtnPowe = false;
  // }

  bombaBtn(statusBtn: boolean) {
    console.log(statusBtn);
    this.loadBtnPowe = true;
    let btn = statusBtn ? "off" : "on"; // Si el botón está encendido, envía "off" para apagar, y viceversa

    this.http.get('https://nda-smbv.onrender.com/api/v1/medidor/bomba/' + btn, { responseType: 'text' })
      .subscribe(
        res => {
          console.log('Respuesta del servidor:', res);
          this.ionViewWillEnter(); // Actualiza estado después del cambio
          this.loadBtnPowe = false;
        },
        error => {
          console.error('Error al comunicar con el servidor:', error);
          this.loadBtnPowe = false;
        }
      );
  }


  // // Función para controlar la bomba usando Sinric Pro
  // bombaBtn(statusBtn: boolean) {
  //   console.log('Estado actual del botón:', statusBtn);
  //   this.loadBtnPowe = true;
  //   const nuevoEstado = !statusBtn; // Si está encendido, apagar; si está apagado, encender

  //   const url = `${this.apiUrl}/${this.deviceId}/power`;
  //   const body = { value: nuevoEstado };

  //   this.http.post(url, body, {
  //     headers: {
  //       'Authorization': this.apiKey
  //     }
  //   }).subscribe({
  //     next: (res) => {
  //       console.log('Respuesta de Sinric:', res);
  //       this.ionViewWillEnter(); // Actualizar estado tras cambio
  //       this.loadBtnPowe = false;
  //     },
  //     error: (err) => {
  //       console.error('Error controlando Sinric:', err);
  //       this.loadBtnPowe = false;
  //     }
  //   });
  // }


}
