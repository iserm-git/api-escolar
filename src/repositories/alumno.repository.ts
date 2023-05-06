import {DefaultCrudRepository} from '@loopback/repository';
import {Alumno, AlumnoRelations} from '../models';
import {DbJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlumnoRepository extends DefaultCrudRepository<
  Alumno,
  typeof Alumno.prototype.idAlumno,
  AlumnoRelations
> {
  constructor(
    @inject('datasources.dbJSON') dataSource: DbJsonDataSource,
  ) {
    super(Alumno, dataSource);
  }
}
