import {Entity, model, property} from '@loopback/repository';

@model()
export class Empleado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idEmpleado?: number;

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
    type: 'date',
    required: true,
  })
  fechaIng: string;


  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
