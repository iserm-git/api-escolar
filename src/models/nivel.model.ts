import {Entity, model, property} from '@loopback/repository';

@model()
export class Nivel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idNivel?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;


  constructor(data?: Partial<Nivel>) {
    super(data);
  }
}

export interface NivelRelations {
  // describe navigational properties here
}

export type NivelWithRelations = Nivel & NivelRelations;
