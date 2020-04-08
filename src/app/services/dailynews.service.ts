import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DailynewsService {

  daily_news = [
    {
      date: '2020-04-08',
      data: [
        { publisher: 'the indian express', pdf: 'https://pdf.indianexpress.com/pdfupload/icici/ie-delhi-08-04-2020.pdf#page=2', thumbnail_url: 'https://cache.epapr.in/resourcethumb/9416cc096298600c-d7605c62-36974a95-62dbd572-a4c5b026c7eaf666_300.jpg' },
        { publisher: 'jansatta', pdf: 'https://drive.google.com/file/d/1ABmu8aIAAFvl-_dxep2RgQEtu3pwZdiO/view', thumbnail_url: 'https://d2na0fb6srbte6.cloudfront.net/read/imageapi/coverforissue/2625955/newspaper/600' },
        { publisher: 'the indian express', pdf: 'https://pdf.indianexpress.com/pdfupload/icici/fe-delhi-08-04-2020.pdf#page=2', thumbnail_url: 'https://pdf.indianexpress.com/pdfupload/icici/images/fe-delhi-09-04-2020.jpg' },
        { publisher: 'the indian express', pdf: 'https://todayspaper.hindustantimes.com/Pages/icici/Delhi/08-04-2020-Delhi.pdf#page=2', thumbnail_url: 'https://todayspaper.hindustantimes.com/Pages/icici/Delhi/08-04-2020-Delhi.jpg' },
      ]
    }
  ]

  constructor() { }

  fetch_daily_news() {
    return this.daily_news
  }
}
