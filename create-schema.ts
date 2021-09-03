import { MikroORM } from '@mikro-orm/core';
import { Item } from 'src/item/item.entity';
import { Todolist } from 'src/todolist/todolist.entity';

(async () => {
  const orm = await MikroORM.init({
    entities: [Todolist, Item],
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    dbName: 'todo',
  });
  const generator = orm.getSchemaGenerator();

  await generator.createSchema();

  await orm.close(true);
})();
