import {Entity, model, property} from '@loopback/repository';

@model()
export class Alumno extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idAlumno?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoP: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoM: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;


  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
  // describe navigational properties here
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
