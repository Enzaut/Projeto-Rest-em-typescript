import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uf } from './uf/uf.entity';
import { Cidade } from './cidade/cidade.entity';
import { Estudante } from './estudante/estudante.entity';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';
import { EstudanteModule } from './estudante/estudante.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cadastro.sqlite',
      entities: [Uf, Cidade, Estudante],
      synchronize: true, 
    }),

  
    TypeOrmModule.forFeature([Uf, Cidade, Estudante]),

    UfModule,
    CidadeModule,
    EstudanteModule
  ],
})
export class AppModule {}
