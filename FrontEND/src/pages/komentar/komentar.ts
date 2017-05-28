import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-komentar',
  templateUrl: 'komentar.html'
})
export class KomentarPage {

  theme:string;

  daily:any;

  id_daily_h:number;
  id_patient:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data: Data, public http: Http,public loadCtrl: LoadingController) {

    let dataKesehatan = this.navParams.data; //ngambil data yang dikirim

    this.id_daily_h = dataKesehatan.id_daily_h;
    this.id_patient = dataKesehatan.id_patient;
    
    console.log(dataKesehatan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KomentarPage');
    
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    loading.present();
    this.data.getDataPasien().then((data) => {
      this.theme= data.theme;

      this.getDataKesehatan();
      

    })
    loading.dismiss();

  }

  getDataKesehatan(){
    this.http.get(this.data.BASE_URL+"/comment_daily.php?id_daily_h="+this.id_daily_h).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
        
        
      }
    });
  }


}
