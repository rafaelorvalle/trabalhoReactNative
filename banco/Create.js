import * as SQLite from 'expo-sqlite';

export const create = async () => {
    try {
        db = await SQLite.openDatabaseAsync('databaseName');
        result = await db.runAsync(`CREATE TABLE IF NOT EXISTS senhas (senha TEXT);
        `);
        if (result.changes > 0)
            console.log("[LOG] Query executed");
        else
            console.log("[LOG] Empty result retrieved from query");
    } catch (error) {
        console.log(error);
    }
    return db;
}