import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Nivel} from '../models';
import {NivelRepository} from '../repositories';

export class NivelController {
  constructor(
    @repository(NivelRepository)
    public nivelRepository : NivelRepository,
  ) {}

  @post('/niveles', {
    responses: {
      '200': {
        description: 'Nivel model instance',
        content: {'application/json': {schema: getModelSchemaRef(Nivel)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nivel, {
            title: 'NewNivel',
            exclude: ['idNivel'],
          }),
        },
      },
    })
    nivel: Omit<Nivel, 'idNivel'>,
  ): Promise<Nivel> {
    return this.nivelRepository.create(nivel);
  }

  @get('/niveles/count', {
    responses: {
      '200': {
        description: 'Nivel model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Nivel) where?: Where<Nivel>,
  ): Promise<Count> {
    return this.nivelRepository.count(where);
  }

  @get('/niveles', {
    responses: {
      '200': {
        description: 'Array of Nivel model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Nivel, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Nivel) filter?: Filter<Nivel>,
  ): Promise<Nivel[]> {
    return this.nivelRepository.find(filter);
  }

  @patch('/niveles', {
    responses: {
      '200': {
        description: 'Nivel PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nivel, {partial: true}),
        },
      },
    })
    nivel: Nivel,
    @param.where(Nivel) where?: Where<Nivel>,
  ): Promise<Count> {
    return this.nivelRepository.updateAll(nivel, where);
  }

  @get('/niveles/{id}', {
    responses: {
      '200': {
        description: 'Nivel model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Nivel, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Nivel, {exclude: 'where'}) filter?: FilterExcludingWhere<Nivel>
  ): Promise<Nivel> {
    return this.nivelRepository.findById(id, filter);
  }

  @patch('/niveles/{id}', {
    responses: {
      '204': {
        description: 'Nivel PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nivel, {partial: true}),
        },
      },
    })
    nivel: Nivel,
  ): Promise<void> {
    await this.nivelRepository.updateById(id, nivel);
  }

  @put('/niveles/{id}', {
    responses: {
      '204': {
        description: 'Nivel PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nivel: Nivel,
  ): Promise<void> {
    await this.nivelRepository.replaceById(id, nivel);
  }

  @del('/niveles/{id}', {
    responses: {
      '204': {
        description: 'Nivel DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nivelRepository.deleteById(id);
  }
}
