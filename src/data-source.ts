import { DataSource } from "typeorm";

//https://orkhan.gitbook.io/typeorm/docs/data-source-options
const AppDataSource = new DataSource({
    database: 'postgres', // se for SQLite, então use bdaula.db
    type: "postgres", // se for SQLite, então use sqlite
    url: 'postgres://khfswsqj:hDKDWmA0-yOCvvpLQxqQfnRIBOF2dEXA@silly.db.elephantsql.com/khfswsqj', // não use esta propriedade se for sqlite
    port: 5432, // não use esta propriedade se for sqlite
    username: 'khfswsqj', // não use esta propriedade se for sqlite
    password:'hDKDWmA0-yOCvvpLQxqQfnRIBOF2dEXA', // não use esta propriedade se for sqlite
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false, 
    logging: false, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
});

// https://orkhan.gitbook.io/typeorm/docs/data-source
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;