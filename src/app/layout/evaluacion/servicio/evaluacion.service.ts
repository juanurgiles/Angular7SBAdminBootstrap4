import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EvaluacionService {
    constructor(private http: HttpClient) {}
    recuperarCarreras() {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/carrera/')
            .toPromise()
            .then(res => <any[]>res);
    }
    recuperarCiclosDocente(cedula) {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/ciclosxdocente/' + cedula)
            .toPromise()
            .then(res => <any[]>res);
    }
    recuperarDocentesxCarrera(idCarrera) {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/docentesxcarrera/' + idCarrera)
            .toPromise()
            .then(res => <any[]>res);
    }
    asignaturaDocenteCiclo(idDocente, ciclo) {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/asignaturaDocenteCiclo/' + idDocente + '/' + ciclo)
            .toPromise()
            .then(res => <any[]>res);
    }
    evaluacionProfesorAsignatura(idDocente, idAsignatura) {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/evaluacionProfesorAsignatura/' + idDocente + '/' + idAsignatura)
            .toPromise()
            .then(res => <any[]>res);
    }
    informexCarrera(idCarrera) {
        return this.http
            .get(environment.URL_EVALUACION + 'evaluacion/informexcarrera/' + idCarrera)
            .toPromise()
            .then(res => <any[]>res);
    }
}
