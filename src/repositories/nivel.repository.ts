import {DefaultCrudRepository} from '@loopback/repository';
import {Nivel, NivelRelations} from '../models';
import {DbJsonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NivelRepository extends DefaultCrudRepository<
  Nivel,
  typeof Nivel.prototype.idNivel,
  NivelRelations
> {
  constructor(
    @inject('datasources.dbJSON') dataSource: DbJsonDataSource,
  ) {
    super(Nivel, dataSource);
  }
}
