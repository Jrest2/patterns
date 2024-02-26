import { DatabaseConnection } from './singleton';

const firstDbConnection = DatabaseConnection.getInstance();
firstDbConnection.executeQuery(`SELECT * FROM users`);

const secondDbConnection = DatabaseConnection.getInstance();
secondDbConnection.executeQuery('SELECT * FROM settings');

console.log(`First connection === second connection - ${firstDbConnection === secondDbConnection}`); 
