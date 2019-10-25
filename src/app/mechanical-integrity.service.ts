import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MechanicalIntegrityModel } from './mechanical-integrity-model';

@Injectable({
  providedIn: 'root'
})
export class MechanicalIntegrityService {

  constructor(private http: HttpClient) { }

  GetMechanicalIntegrityList(idJobProgram: number): Observable<MechanicalIntegrityModel[]> {
    return this.http.get<MechanicalIntegrityModel[]>(`http://localhost/SuccessGateAPI/api/GetMechanicalIntegrity/1`);
  }
}
