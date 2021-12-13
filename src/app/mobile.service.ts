import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Mobile } from './mobile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MobileService {
  
 basePath : string ='http://localhost:3000/phones/'; 
 

  constructor(private http:HttpClient) { }
  getAllMobiles():Observable<Mobile[]>{ 
    return this.http.get<Mobile[]>(`${this.basePath}`); 
    }
    addNewMobile(mobile : Mobile):Observable<any>{ 
      return this.http.post(`${this.basePath}`,mobile); 
      }  
      deleteMobile(id:any):Observable<any>{
        return this.http.delete(`${this.basePath}/${id}`);
      }
      getMobile(id:any):Observable<Mobile>{
        return this.http.get<Mobile>(`${this.basePath}/${id}`);

      }
      updateMobile(id:any,mobile:Mobile):Observable<any>{
        return this.http.put(`${this.basePath}/${id}`,mobile);
      }
      }

